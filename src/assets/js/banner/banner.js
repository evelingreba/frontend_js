import {tns} from "../../tiny-slider/src/tiny-slider";

export default class Banner {
    init() {
        this.getSlider().play();
    }

    getSlider() {
        return tns({
            container: '.js-banner__slider',
            items: 1,
            speed: 300,
            autoplay: true,
            autoplayTimeout: 3000,
            position: 0,
            nav: false,
            controlsContainer: '.js-banner__nav',
            autoplayButtonOutput: false,
            mouseDrag: true,
            lazyload: true,
        });
    }
}