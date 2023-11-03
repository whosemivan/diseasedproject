const previewLink = document.querySelectorAll('.gamePage__preview-link');
const title = document.querySelector('.gamePage__gameplay-title');
const image = document.querySelector('.gamePage__gameplay-img');
const infoImg = document.querySelector('.gamePage__info-img');
const price = document.querySelector('.gamePage__buy-quantity-info .price');
const mainPrice = document.querySelector('.gamePage__price span');

function getQueryParams() {
    var params = new URLSearchParams(window.location.search);
    return Object.fromEntries(params.entries());
}

const queryParams = getQueryParams();

const productName = queryParams.productName;
const productImage = queryParams.image;
const productPrice = queryParams.price;

// Use the data as needed


previewLink[1].innerText = productName;
title.innerText = `Купить ${productName}`;


image.src = productImage;
infoImg.src = productImage;
price.innerText = `₽${productPrice}`;
mainPrice.innerText = `₽${productPrice}`;