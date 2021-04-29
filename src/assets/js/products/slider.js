import {tns} from "../../tiny-slider/src/tiny-slider";

export default class ProductsSlider {
    constructor(sliderName) {
        this.contentElement = document.getElementById('js-products__' + sliderName + '-slider');
        this.buttonElement = document.getElementById('js-products__' + sliderName + '-button');
    }

    hide() {
        this.contentElement.style.display = 'none';
        this.buttonElement.style.backgroundColor = 'white';
        this.buttonElement.style.color = 'black';
    }

    show() {
        this.contentElement.style.display = 'block';
        this.buttonElement.style.backgroundColor = 'black';
        this.buttonElement.style.color = 'white';
    }

    initSlider(containerClassName) {
        if (typeof this.sliderElement == 'undefined') {
            this.sliderElement = tns({
                container: containerClassName,
                items: 1,
                responsive: {
                    320: {
                        edgePadding: 20,
                        gutter: 20,
                        items: 2,
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
                controlsContainer: '.js-products__customize-controls',
                mouseDrag: true,
                lazyload: true,
                overflow: false,
                controlsPosition: top,
            });
        }
    }
}
