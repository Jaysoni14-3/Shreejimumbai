var products = [
    {
        product_image: "../Images/Product-images/Product-image-1.png",
        product_name: "Inventaa victor trio LED garden lights",
        product_price: "741/ piece",
    }, 
    {
        product_image: "../Images/Product-images/Product-image-2.png",
        product_name: "Swimming pool SS underwater light 1 AMP",
        product_price: "75,000/ piece",
    },
    {
        product_image: "../Images/Product-images/Product-image-3.png",
        product_name: "Sparkle Maxx Clarifier and conditioner for pool",
        product_price: "600/ Kg",
    },
    {
        product_image: "../Images/Product-images/Product-image-4.png",
        product_name: "TCCA 90 Clorine Powder",
        product_price: "180/ Kg",
    },
    {
        product_image: "../Images/Product-images/Product-image-5.png",
        product_name: "Emaux sand filter for swimming pool",
        product_price: "40,000/ piece",
    }, 
    {
        product_image: "../Images/Product-images/Product-image-6.png",
        product_name: "Swimming pool clorine feeder plastic 9 lb",
        product_price: "3,846/ piece",
    },
    {
        product_image: "../Images/Product-images/Product-image-7.png",
        product_name: "ABS Round Pool Drain Covers",
        product_price: "700/ piece",
    },
    {
        product_image: "../Images/Product-images/Product-image-8.png",
        product_name: "Acrylic pipeline filter 15 lph for Fi Literation",
        product_price: "75,000/ piece",
    },
];



var productWrapper = document.querySelector(".product-wrapper");

for(let i = 0; i < products.length; i++){
    var productImage = products[i].product_image;
    var productPrice = products[i].product_price;
    var productName = products[i].product_name;

    var productCardHTML = `<div class="product-card">
                                <div class="product-image mb-8">
                                    <img src=${productImage} alt="">
                                </div>
                                <div class="product-details">
                                    <div class="product-name mb-8">
                                        <h4>${productName}</h4>
                                    </div>
                                  
                                    
                                    <a href="tel:+91 8693891336" class="button primary-button">Call us <i class="fa-solid fa-phone" style="color: #ffffff;"></i></a>
                                </div>
                            </div> `;
        
        
    // console.log(productCardHTML)
    productWrapper.innerHTML += productCardHTML;
}


{/* <button class="primary-button">Call us <img src="../Images/icons/Phone-icon-white.png" alt="phone-icon"></button> */}

{/* <div class="product-price">
<img src="../Images/icons/Rupee-icon.png" class="ruppee-icon" alt="ruppee-icon">
<p>${productPrice}</p>
</div> */}