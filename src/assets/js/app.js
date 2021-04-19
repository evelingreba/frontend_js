import * as url from "url";

console.log('file 1');

(function() {

    let hamburger = {
        nav: document.querySelector('.hamburger__nav'),
        navToggle: document.querySelector('.header__hamburger'),

        initialize() {
            this.navToggle.addEventListener('click',
                () => { this.toggle(); });
        },

        toggle() {
            this.navToggle.classList.toggle('expanded');
            this.nav.classList.toggle('expanded');
        },
    };

    hamburger.initialize();

}());

import { tns } from "../tiny-slider/src/tiny-slider";


    var slider = tns({
    container: '.banner__slider',
    items: 1,
        speed: 300,
        autoplay: true,
        autoplayTimeout: 3000,
        position: 0,
        nav: false,
        controlsContainer: ".banner__nav",
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
    controlsContainer: ".bikes__customize-controls",
    mouseDrag: true,
    lazyload: true,
    overflow: false,
    controlsPosition: top,
});

bikes__singleSlider.play();

var bikes__premiumSlider = tns({
    container: '.bikes__premium-slider',
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
    controlsContainer: ".bikes__customize-controls",
    mouseDrag: true,
    lazyload: true,
    overflow: false,
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
    mouseDrag: true,
    lazyload: true,
    overflow: false,

});

bikes__citySlider.play();

document.getElementById('bikes__single-button').onclick = function () {
    document.getElementById('bikes__single-speed').style.display = 'block';
    document.getElementById('bikes__premium-series').style.display = 'none';
    document.getElementById('bikes__city').style.display = 'none';

    document.getElementById('bikes__single-button').style.backgroundColor = 'black';
    document.getElementById('bikes__single-button').style.color = 'white';

    document.getElementById('bikes__premium-button').style.backgroundColor = 'white';
    document.getElementById('bikes__premium-button').style.color = 'black';

    document.getElementById('bikes__city-button').style.backgroundColor = 'white';
    document.getElementById('bikes__city-button').style.color = 'black';
}

document.getElementById('bikes__premium-button').onclick = function () {
    document.getElementById('bikes__premium-series').style.display = 'block';
    document.getElementById('bikes__single-speed').style.display = 'none';
    document.getElementById('bikes__city').style.display = 'none';

    document.getElementById('bikes__premium-button').style.backgroundColor = 'black';
    document.getElementById('bikes__premium-button').style.color = 'white';

    document.getElementById('bikes__single-button').style.backgroundColor = 'white';
    document.getElementById('bikes__single-button').style.color = 'black';

    document.getElementById('bikes__city-button').style.backgroundColor = 'white';
    document.getElementById('bikes__city-button').style.color = 'black';
}

document.getElementById('bikes__city-button').onclick = function () {
    document.getElementById('bikes__city').style.display = 'block';
    document.getElementById('bikes__premium-series').style.display = 'none';
    document.getElementById('bikes__single-speed').style.display = 'none';

    document.getElementById('bikes__city-button').style.backgroundColor = 'black';
    document.getElementById('bikes__city-button').style.color = 'white';

    document.getElementById('bikes__single-button').style.backgroundColor = 'white';
    document.getElementById('bikes__single-button').style.color = 'black';

    document.getElementById('bikes__premium-button').style.backgroundColor = 'white';
    document.getElementById('bikes__premium-button').style.color = 'black';
}

function getComments() {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let response = '';
            for (let i = 0; i < data.length; i++) {
                response += `<div class="comments__item">
                    <p class="comments__name">${data[i].name}</p>
                    <p class="comments__email">${data[i].email}</p>
                    <p class="comments__body">${data[i].body}</p>
                    </div>`;
            }
            document.getElementById("comments__text").innerHTML = response;
        });
}

getComments();