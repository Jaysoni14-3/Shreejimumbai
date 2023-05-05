var gallery_images = [
    {
        img_id: "gallery-image-1",
        img_src: "../Images/Gallery-images/gallery-image-1.png"
    },
    {
        img_id: "gallery-image-2",
        img_src: "../Images/Gallery-images/gallery-image-2.png"
    },
    {
        img_id: "gallery-image-3",
        img_src: "../Images/Gallery-images/gallery-image-3.png"
    },
    {
        img_id: "gallery-image-4",
        img_src: "../Images/Gallery-images/gallery-image-4.png"
    },
    {
        img_id: "gallery-image-5",
        img_src: "../Images/Gallery-images/gallery-image-5.png"
    },
    {
        img_id: "gallery-image-6",
        img_src: "../Images/Gallery-images/gallery-image-6.png"
    },
    {
        img_id: "gallery-image-7",
        img_src: "../Images/Gallery-images/gallery-image-7.png"
    },
    {
        img_id: "gallery-image-8",
        img_src: "../Images/Gallery-images/gallery-image-8.jpeg"
    },
];

for(var i = 0; i < gallery_images.length; i++){
    var imgID = gallery_images[i].img_id;
    var imgSRC = gallery_images[i].img_src;

    var gallerySection = document.querySelector(".gallery-section");

    var imgHTML = `<div class="image-container" id=${imgID}>
                        <img src=${imgSRC} alt="">
                    </div> `;

    gallerySection.innerHTML += imgHTML;
}


var imageContainer = document.querySelectorAll(".image-container");
var modal = document.querySelector(".modal");
var body = document.querySelector("body");
var closeIcon = document.querySelector(".close-icon-container");
var modalContent = document.querySelector(".modal-content");

closeIcon.addEventListener("click", function(){
    modal.classList.remove("show");
    body.classList.remove("overlay");
});



imageContainer.forEach(item => {
    item.addEventListener("click", function(){
        modal.classList.add("show");
        body.classList.add("overlay");
        var modalImgSrc = this.children[0].getAttribute("src");

        modalContent.innerHTML = `<img src="${modalImgSrc}" alt="">`;
    });
});