import * as url from "url";

console.log('file 1');
import { tns } from "../tiny-slider/src/tiny-slider";

    var slider = tns({
    container: '.my-slider',
    items: 1,
        speed: 300,
        autoplay: true,
        autoplayTimeout: 3000,
        position: 0,
        nav: false,
        controlsContainer: "#customize-controls",
        autoplayButtonOutput: false,
        mouseDrag: true,
        lazyload: true,
});

//var tns = function(options) {
    //options = extend({
        //arrowKeys: true,

    //}, options || {});
//}

slider.play();
