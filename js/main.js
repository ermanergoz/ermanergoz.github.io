const KEY_CACHE_LANGUAGE = "language";
const KEY_USER_LANGUAGE_TUR = "tr-TR";
const VAL_USER_LANGUAGE_TUR = "tr";
const PAGE_LANGUAGE_TUR = "index_tr.html";

function setupGrid(createElementName, numberOfCells, elementClassNme, parentElementId) {
    for (let i = 0; i < numberOfCells; i++) {
        const div = document.createElement(createElementName);
        div.className = elementClassNme;
        document.getElementById(parentElementId).appendChild(div);
    }
}

function setLanguage() {
    const userLanguage = window.navigator.language;

    if (userLanguage === KEY_USER_LANGUAGE_TUR && localStorage.getItem(KEY_CACHE_LANGUAGE) !== VAL_USER_LANGUAGE_TUR) {
        window.location.href = PAGE_LANGUAGE_TUR;
        localStorage.setItem(KEY_CACHE_LANGUAGE, VAL_USER_LANGUAGE_TUR);
    }
}

//for navigation highlighting
$('body').scrollspy({
    target: '#navbar',
    offset: 300
});

//footer copyright current year
document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()));

function initializeProjectCarousal() {
    //photo gallery carousal
    jQuery(".project-carousel .owl-carousel").owlCarousel({
        autoplay: true,
        margin: 10,
        smartSpeed: 300,
        items: 2,
        dots: false,
        loop: true,
        nav: true,
        center: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
    });
}