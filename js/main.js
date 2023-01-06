
let slideIndex = 1;
let tabIndex = 1;


mediaScreenChange()

function mediaScreenChange() {
    if (window.innerWidth < 768) {
    console.log('Media Query Matched!')
    showSlides(slideIndex);
    showtabs(tabIndex);
  } else {
    resetTabs()
    resetCards()
  }
}


window.addEventListener("resize", mediaScreenChange)


function openNav() {
    document.getElementById("mobile-nav").style.width = "100%"
    console.log('clicked')
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mobile-nav").style.width = "0"
}

// for the carousel

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide-item")
    let discs = document.getElementsByClassName("disc")
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (i = 0; i < discs.length; i++) {
        discs[i].className = discs[i].className.replace(" active-disc", "")
    }
    slides[slideIndex-1].style.display = "block"
    discs[slideIndex-1].className += " active-disc"
    console.log('ran slides')
}


// for tabs


function currentTab(n) {
    showtabs(tabIndex = n);
}

function showtabs(n) {
    let i;
    let tabs = document.getElementsByClassName("tab-item");
    let tabMenus = document.getElementsByClassName("tab");

    if (n > tabs.length) {tabIndex = 1}
    if (n < 1) {tabIndex = tabs.length}
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    for (i = 0; i < tabMenus.length; i++) {
        tabMenus[i].className = tabMenus[i].className.replace(" active-tab", "");
    }
    tabs[tabIndex-1].style.display = "flex";
    tabMenus[tabIndex-1].className += " active-tab";
}

function resetTabs() {
    let tabs = document.getElementsByClassName("tab-item");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "unset";
    }
}

function resetCards() {
    let tabs = document.getElementsByClassName("slide-item");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "unset";
    }
}