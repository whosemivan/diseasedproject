const previewLink = document.querySelectorAll('.gamePage__preview-link');
const title = document.querySelector('.gamePage__gameplay-title');
const image = document.querySelector('.gamePage__gameplay-img');
const infoImg = document.querySelector('.gamePage__info-img');
const price = document.querySelector('.gamePage__buy-quantity-info .price');
const mainPrice = document.querySelector('.gamePage__price span');
const countElement = document.querySelector('.gamePage__buy-quantity-info .count');
const countBuyers = document.querySelector('.buyers');
const gamepageBtns = document.querySelectorAll('.gamePage__requirements-btn');
const gamepageInfo = document.querySelector('.gamePage__requirements-info');
const category = document.querySelector('.gamePage__gameplay-category');
const gamesBlock = document.querySelector('.gamePage__buy-similar-games-block');

const basketZone = document.querySelector('.shopping-cart__left-cards-block');

const basketBtn = document.querySelector('.basket');

let activeInfoPage = 'Описание';

function getQueryParams() {
  var params = new URLSearchParams(window.location.search);
  return Object.fromEntries(params.entries());
}

const queryParams = getQueryParams();
const productName = queryParams.productName;
const productImage = queryParams.image;
const productPrice = queryParams.price;
const count = queryParams.count;
const buyers = queryParams.buyers;
const description = queryParams.description;
const systemText = queryParams.systemText;
const activation = queryParams.activation;
const platform = queryParams.platform;
const id = queryParams.id;

previewLink[1].innerText = productName;
title.innerText = `Купить ${productName}`;
image.src = productImage;
infoImg.src = productImage;
price.innerText = `₽${productPrice}`;
mainPrice.innerText = `₽${productPrice}`;
countElement.innerText = `${count} шт.`;
countBuyers.innerText = `${buyers}`;
gamepageInfo.innerText = `${description}`;
category.innerText = platform;

for (let i = 0; i < gamepageBtns.length; i++) {
  gamepageBtns[i].addEventListener('click', () => {
    for (let j = 0; j < gamepageBtns.length; j++) {
      gamepageBtns[j].classList.remove('gamePage__requirements-btn--active');
      activeInfoPage = '';
    }

    gamepageBtns[i].classList.add('gamePage__requirements-btn--active');
    activeInfoPage = gamepageBtns[i].innerText;

    console.log(activeInfoPage);
    console.log(description);

    if (activeInfoPage === 'Описание') {
      gamepageInfo.innerText = `${description}`;
    } else if (activeInfoPage === 'Системные требования') {
      gamepageInfo.innerText = `${systemText}`;
    } else if (activeInfoPage === 'Активация') {
      gamepageInfo.innerText = `${activation}`;
    }
  });
}


const cards = JSON.parse(localStorage.getItem('cards'));


let cardsCopy = cards.slice();
cardsCopy = cardsCopy.filter((it) => {
  return it.platform === platform;
})
cardsCopy = cardsCopy.slice(0, 3)
gamesBlock.innerHTML = `
    ${
        cardsCopy.map((item) => (
            `
            <div class="gamePage__buy-similar-card">
            <img
              src=${item.image}
              class="gamePage__buy-similar-card-img"
              alt=${item.name}
            />
            <div class="gamePage__buy-similar-card-info">
              <div class="gamePage__buy-similar-card-text-block">
                <div class="gamePage__buy-similar-card-title">
                ${item.name}
                </div>
                <div class="gamePage__buy-similar-card-icons">
                  <div class="games__buy-group-icons">
                  ${
                    item.isGameAcc ? `<div class="games__card-icon-info">Аккаунты</div>` : ``
                  }
                  ${
                    item.isDonat ? `<div class="games__card-icon-info">Донат</div>`: ``
                  }
                  ${
                    item.isKey ? `<div class="games__card-icon-key">Ключ</div>` : ``
                  }
                  ${
                    item.isService ? `<div class="results-card-icon-info">Сервисы</div>` : ``
                  }
                
                  
                  ${
                    item.platform === "steam" ? `<div class="games__card-icon-steam">Steam</div>` : ``
                  }
                  ${
                    item.platform === "mojang" || item.platform === "Minecraft" ? `<div class="games__card-icon-minecraft">Mojang</div>` : ``
                  }
    
                  ${
                    item.platform === "epic games" ? `<div class="games__card-info-simple">Epic Games</div>` : ``
                  }
    
                  ${
                    item.platform === "random steam" ? `<div class="games__card-info-simple">Random Steam</div>` : ``
                  }
    
                  ${
                    item.platform === "ubisoft" ? `<div class="games__card-info-simple">Ubisoft</div>` : ``
                  }
    
                  ${
                    item.platform === "ea play" ? `<div class="games__card-info-simple">EA play</div>` : ``
                  }
    
                  ${
                    item.platform === "rockstar" ? `<div class="games__card-info-simple">Rockstar</div>` : ``
                  }
    
                  ${
                    item.platform === "riot" ? `<div class="games__card-info-simple">Riot</div>` : ``
                  }
    
                  ${
                    item.platform === "fortnite" ? `<div class="games__card-info-simple">Fortnite</div>` : ``
                  }
    
                  ${
                    item.platform === "genshin impact" ? `<div class="games__card-info-simple">Genshin impact</div>` : ``
                  }
    
                  ${
                    item.platform === "vk play" ? `<div class="games__card-info-simple">VK Play</div>` : ``
                  }
    
                  ${
                    item.platform === "gog" ? `<div class="games__card-info-simple">GOG</div>` : ``
                  }
    
                  ${
                    item.platform === "xbox" ? `<div class="games__card-info-simple">Xbox</div>` : ``
                  }
    
                  ${
                    item.platform === "playstation" ? `<div class="games__card-info-simple">Playstation</div>` : ``
                  }
    
                  ${
                    item.platform === "nintendo" ? `<div class="games__card-info-simple">Nintendo</div>` : ``
                  }
    
                  ${
                    item.platform === "mobile" ? `<div class="games__card-info-simple">Mobile</div>` : ``
                  }
    
                  ${
                    item.platform === "roblox" ? `<div class="games__card-info-simple">Roblox</div>` : ``
                  }
    
                  ${
                    item.platform === "software" ? `<div class="games__card-info-simple">Software</div>` : ``
                  }
    
                  ${
                    item.platform === "сервисы" ? `<div class="games__card-info-simple">Сервисы</div>` : ``
                  }
                  </div>
                  <div class="gamePage__buy-similar-card-price"></div>
                </div>
              </div>
            </div>
          </div>
            `
        ))
    }
`;


let basketCards = cards.slice();
let card = basketCards.filter(it => {
  return it.id.toString() === id;
})

console.log(card);

let basketDone = JSON.parse(localStorage.getItem("basket"));

basketBtn.addEventListener('click', () => {
  if (basketDone.length === 0) {
    localStorage.setItem("basket", JSON.stringify([...basketDone, ...card]));
  } else {
    for (let i = 0; i < basketDone.length; i++) {
      if (basketDone[i].id !== id) {
        localStorage.setItem("basket", JSON.stringify([...basketDone, ...card]));
      }
    }
  }

  renderBasket();

});

console.log(basketDone);

const renderBasket = () => {
  let basketDone = JSON.parse(localStorage.getItem("basket"));
  for (card of basketDone) {
    console.log(card);
    basketZone.innerHTML += `
  <div class="shopping-cart__card">
  <div class="shopping-cart__card-block">
    <div class="shopping-cart__card-text">
      ${card.name}
    </div>
    <div class="shopping-cart__card-quantity">
      <button class="shopping-cart__card-quantity-plus">+</button>
      <p class="shopping-cart__card-quantity-number">1</p>
      <button class="shopping-cart__card-quantity-minus">
        -
      </button>
    </div>
  </div>
  </div>
  `;
  }
};

renderBasket();