import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.esm.browser.js';

var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './vmSocks-blue-onWhite.jpg',
        inventory: 10,
    },
});

window.app = app;