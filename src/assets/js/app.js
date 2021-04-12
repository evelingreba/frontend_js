import * as url from "url";

console.log('file 1');
import { tns } from "../tiny-slider/src/tiny-slider";

    var slider = tns({
    container: '.banner__slider-item',
    items: 1,
        speed: 300,
        autoplay: true,
        autoplayTimeout: 3000,
        position: 0,
        nav: false,
        controlsContainer: "#banner__customize-controls",
        autoplayButtonOutput: false,
        mouseDrag: true,
        lazyload: true,
});
slider.play();

var bikes__singleSlider = tns({
    container: '.bikes__single-slider',
    items: 1,
    responsive: {
        320: {
            edgePadding: 20,
            gutter: 20,
            items: 2
        },
        768: {
            gutter: 30,
            items: 3
        },
        1025: {
            items: 4
        }
    },
    nav: false,
    controlsContainer: ".bikes__customize-controls",
    mouseDrag: true,
    lazyload: true,

});

bikes__singleSlider.play();

var bikes__premiumSlider = tns({
    container: '.bikes__premium-slider',
    items: 1,
    responsive: {
        320: {
            edgePadding: 20,
            gutter: 20,
            items: 2
        },
        768: {
            gutter: 30,
            items: 3
        },
        1025: {
            items: 4
        }
    },
    nav: false,
    controlsContainer: ".bikes__customize-controls",
});

bikes__premiumSlider.play();

var bikes__citySlider = tns({
    container: '.bikes__city-slider',
    items: 1,
    responsive: {
        320: {
            edgePadding: 20,
            gutter: 20,
            items: 2
        },
        768: {
            gutter: 30,
            items: 3
        },
        1025: {
            items: 4
        }
    },
    nav: false,
    controlsContainer: ".bikes__customize-controls",
});

bikes__citySlider.play();

document.getElementById('bikes__single-button').onclick = function () {
    document.getElementById('bikes__single-speed').style.display = 'block';
    document.getElementById('bikes__premium-series').style.display = 'none';
    document.getElementById('bikes__city').style.display = 'none';
}

document.getElementById('bikes__premium-button').onclick = function () {
    document.getElementById('bikes__premium-series').style.display = 'block';
    document.getElementById('bikes__single-speed').style.display = 'none';
    document.getElementById('bikes__city').style.display = 'none';
}

document.getElementById('bikes__city-button').onclick = function () {
    document.getElementById('bikes__city').style.display = 'block';
    document.getElementById('bikes__premium-series').style.display = 'none';
    document.getElementById('bikes__single-speed').style.display = 'none';
}