export default class Header {
    constructor(element) {
        this.element = element;
        this.headerNavElement = document.querySelector('.js-header__hamburger');
        this.headerNav = document.querySelector('.js-header__nav-list');
        this.toggleActiveMenu = this.toggleActiveMenu.bind(this);
    }

    toggleActiveMenu() {
        this.headerNavElement.classList.toggle('expanded');
        this.headerNav.classList.toggle('expanded');
    }

    init() {
        this.element && this.headerNavElement && this.element.addEventListener("click", this.toggleActiveMenu);
    }
}