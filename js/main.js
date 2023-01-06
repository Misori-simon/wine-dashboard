function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// for the carousel

let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide-item");
    let discs = document.getElementsByClassName("disc");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < discs.length; i++) {
        discs[i].className = discs[i].className.replace(" active-disc", "");
    }
    slides[slideIndex-1].style.display = "block";
    discs[slideIndex-1].className += " active-disc";
    }


    // for the carousel

let tabIndex = 1;
showtabs(tabIndex);

// Thumbnail image controls
function currentTab(n) {
showtabs(tabIndex = n);
}

function showtabs(n) {
let i;
let tabs = document.getElementsByClassName("tab-item");
console.log(tabs);
let tabMenus = document.getElementsByClassName("tab");
console.log(tabMenus);
if (n > tabs.length) {tabIndex = 1}
if (n < 1) {tabIndex = tabs.length}
for (i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
}
for (i = 0; i < tabMenus.length; i++) {
    tabMenus[i].className = tabMenus[i].className.replace(" active-tab", "");
}
tabs[tabIndex-1].style.display = "block";
tabMenus[tabIndex-1].className += " active-tab";
}