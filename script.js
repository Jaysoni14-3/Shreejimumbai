var navigationBar = document.querySelector(".navigation-bar");
var hamburgerIcon = document.querySelector(".hamburger-menu-icon");
var hamburgerIconClose = document.querySelector(".hamburger-menu-icon-close");
var body = document.querySelector("body");


hamburgerIconClose.addEventListener("click", function(){
    if(navigationBar.classList.contains("show")){
        navigationBar.classList.remove("show");
        body.classList.remove("noScroll-body");
    }
});    

hamburgerIcon.addEventListener("click", function(){
    if(navigationBar.classList.contains("show")){
        navigationBar.classList.remove("show");
        body.classList.remove("noScroll-body");
    }else{
        navigationBar.classList.add("show");
        body.classList.add("noScroll-body");
    }
});



let scrollUp = document.getElementById("Scroll_to_top");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
      scrollUp.style.display = "block";
    } else {
      scrollUp.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}