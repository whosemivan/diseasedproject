const headerBtn = document.querySelector('.header__adaptive-btn');
const menu = document.querySelector('.header__adaptive__block');


headerBtn.addEventListener('click', () => {
    menu.classList.toggle('header__adaptive__block--hidden');
});