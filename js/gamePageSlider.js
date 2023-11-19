const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});



const gamepageSlider = document.querySelector('.gamePage__gameplay-img-block .swiper-wrapper');
const sliderImages = JSON.parse(document.getElementById('cards').innerHTML);
console.log(sliderImages);

for (let image in sliderImages[0].sliderImages) {
    console.log(image);
    gamepageSlider.innerHTML += `
        <div class="swiper-slide">
            <img src="${sliderImages[0].sliderImages[image]}" class="gamePage__gameplay-img" />
        </div>
        `;
}