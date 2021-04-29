console.log('file 1');
// import { tns } from "../tiny-slider/src/tiny-slider";
import Header from "./header/header.js";
import Banner from "./banner/banner.js";
import Products from "./products/products.js";
import Comments from "./comments/comments";

//Header module
const hamburgerElement = document.querySelector(".header__hamburger");

if(hamburgerElement) {
    const header = new Header(hamburgerElement);
    header.init();
}

//Banner module
const banner = new Banner();
banner.init();


//Products module
const products = new Products(document.querySelector('.js-products__content'));
products.showSingleBikes();


//Comments module
const comments = new Comments();
comments.init().then(response => response.json());

