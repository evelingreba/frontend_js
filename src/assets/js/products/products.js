import ProductsSlider from "./slider";

export default class Products {
    constructor(elem) {
        this._elem = elem;
        this._elem.onclick = this.onClick.bind(this);
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this.hideSliders();
            this[action]();
        }
    }

     showSingleBikes() {
        if (typeof this.singleSlider == 'undefined') {
            this.singleSlider = new ProductsSlider('single');
            this.singleSlider.initSlider('.js-products__single-slider');
        }
        this.singleSlider.show();
    }

    showPremiumBikes() {
        if (typeof this.premiumSlider == 'undefined') {
            this.premiumSlider = new ProductsSlider('premium');
            this.premiumSlider.initSlider('.js-products__premium-slider');
        }
        this.premiumSlider.show();
    }

    showCityBikes() {
        if (typeof this.citySlider == 'undefined') {
            this.citySlider = new ProductsSlider('city');
            this.citySlider.initSlider('.js-products__city-slider');
        }
        this.citySlider.show();
    }

    hideSliders() {
        if (this.singleSlider) {
            this.singleSlider.hide();
        }
        if (this.premiumSlider) {
            this.premiumSlider.hide();
        }
        if (this.citySlider) {
            this.citySlider.hide();
        }
    }
}
