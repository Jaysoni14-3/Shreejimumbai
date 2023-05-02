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
