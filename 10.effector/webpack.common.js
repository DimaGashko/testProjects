const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const imageWebpackLoaderConfig = {
   mozjpeg: {
      progressive: true,
      quality: 65
   },
   pngquant: {
      quality: '65-90',
      speed: 4
   },
}

const styleLoaderBase = {
   use: [
      'css-loader',
      {
         loader: 'postcss-loader',
         options: {
            plugins: [autoprefixer(), cssnano()],
            sourceMap: true,
         }
      },
      {
         loader: 'sass-loader?sourceMap=true'
      }
   ]
}

module.exports = {
   mode: 'development',
   entry: {
      index: './src/index.ts'
   },
   output: {
      filename: 'js/[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
   },
   module: {
      rules: [{
         test: /\.ts$/,
         use: [{
            loader: 'ts-loader?transpileOnly=true&experimentalWatchApi=true',
         }],
         exclude: /node_modules/
      }, {
         test: /\.pug/,
         loaders: ['html-loader', 'pug-html-loader'],

      },
      merge({
         test: /\.string\.(scss|sass|css)$/,
         use: [],
      }, styleLoaderBase),
      merge({
         test: /^((?!string).)*\.(scss|sass|css)$/,
         use: [MiniCssExtractPlugin.loader],
      }, styleLoaderBase),
      {
         test: /\.(gif|png|jpe?g|svg|webp)$/i,
         use: [{
            loader: 'file-loader?outputPath=img',
         }, {
            loader: 'image-webpack-loader',
            options: imageWebpackLoaderConfig,
         }],
      }],
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js']
   },
   plugins: [
      new webpack.HashedModuleIdsPlugin(),
      new MiniCssExtractPlugin({
         filename: "css/[name].[contenthash].css",
      }),
      new HtmlWebpackPlugin({
         chunks: ['index'],
         template: './src/index.html',
         minify: {
            collapseWhitespace: true,
            removeComments: true,
         },
      }),
      new BundleAnalyzerPlugin(),
   ],

};
