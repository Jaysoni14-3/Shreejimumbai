var navigationBar = document.querySelector(".navigation-bar");
var hamburgerIcon = document.querySelector(".hamburger-menu-icon");
var body = document.querySelector("body");


hamburgerIcon.addEventListener("click", function(){
    if(navigationBar.classList.contains("show")){
        navigationBar.classList.remove("show");
        body.classList.remove("noScroll-body");
    }else{
        navigationBar.classList.add("show");
        body.classList.add("noScroll-body");
    }
});
