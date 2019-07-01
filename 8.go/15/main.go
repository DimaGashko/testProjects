package main

import (
	"image"
	"image/color"

	"golang.org/x/tour/pic"
)

type Image struct {
	w, h int
}

func (img Image) Bounds() image.Rectangle {
	return image.Rect(0, 0, img.w, img.h)
}

func (img Image) ColorModel() color.Model {
	return color.RGBAModel
}

func (img Image) At(x, y int) color.Color {
	var r, g, b float64
	i := img.w*y + x

	if y >= 5000/(x+1) {
		r = float64(i^64) + float64(y)
	} else {
		b = float64(i ^ 64)
	}

	return color.RGBA{uint8(r), uint8(g), uint8(b), 255}
}

func main() {
	m := Image{255, 255}
	pic.ShowImage(m)
}
