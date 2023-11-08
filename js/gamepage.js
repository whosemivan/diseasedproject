// const previewLink = document.querySelectorAll('.gamePage__preview-link');
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
const priceEl = document.querySelector('.shopping-cart__subtext');

const basketZone = document.querySelector('.shopping-cart__left-cards-block');

const basketBtns = document.querySelectorAll('.gamePage__buy-btn');

const categoryLink = document.querySelector('.categoryLink');
const categoryLinkText = document.querySelector('.categoryLink span');

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

// previewLink[1].innerText = productName;
title.innerText = `Купить ${productName}`;
image.src = productImage;
infoImg.src = productImage;
price.innerText = `₽${productPrice}`;
mainPrice.innerText = `₽${productPrice}`;
countElement.innerText = `${count} шт.`;
countBuyers.innerText = `${buyers}`;
gamepageInfo.innerText = `${description}`;
category.innerText = platform;

categoryLinkText.innerText = platform;
categoryLink.href = `index.html?category=${platform}#gamesCatalog`;

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
            <a href="gamepage.html?productName=${item.name}&image=${item.image}&price=${item.price}&count=${item.count}&buyers=${item.buyers}&description=${item.description}&systemText=${item.systemText}&activation=${item.activationText}&platform=${item.platform}&id=${item.id}" class="game__card">
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
                    item.platform === "random steam" ? `<div class="games__card-icon-random">Random Steam</div>` : ``
                  }
    
                  ${
                    item.platform === "ubisoft" ? `<div class="games__card-icon-uplay">Ubisoft</div>` : ``
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
                    item.platform === "сервисы" ? `<div class="games__card-icon-service">Сервисы</div>` : ``
                  }
                  </div>
                  <div class="gamePage__buy-similar-card-price"></div>
                </div>
              </div>
            </div>
          </div>
          </a>
            `
        ))
    }
`;


for (let i = 0; i < basketBtns.length; i++) {
  basketBtns[i].addEventListener('click', () => {
    let basketCards = cards.slice();
    let card = basketCards.filter(it => {
      return it.id.toString() === id;
    })
    console.log(card[0]);
    let basketDone = JSON.parse(localStorage.getItem("basket"));

    if (basketDone.length === 0) {
      localStorage.setItem("basket", JSON.stringify([...basketDone, card[0]]));
    } else {
      let basketDone = JSON.parse(localStorage.getItem("basket"));

      for (let i = 0; i < basketDone.length; i++) {
        if (basketDone[i].id.toString() !== id) {
          continue;
        } else {
          return;
        }
      }

      localStorage.setItem("basket", JSON.stringify([...basketDone, card[0]]));
    }

    renderBasket();
  });
}



const renderBasket = () => {
  let basketDone = JSON.parse(localStorage.getItem("basket"));
  let priceNumber = 0;
  const payBtn = document.querySelector('.shopping-cart__total-btn');

  payBtn.addEventListener('click', () => {
    console.log(document.getElementById("hiddenInput"));
    if (document.getElementById("hiddenInput") === null) {
      const hiddenInput = document.createElement('input');
      hiddenInput.type = 'hidden';
      hiddenInput.id = 'hiddenInput';
      const storedValue = JSON.parse(localStorage.getItem('basket'));
  
      let result = [];
      for (let i = 0; i < storedValue.length; i++) {
        result.push({[storedValue[i].id]: storedValue[i].basketCount ? storedValue[i].basketCount : 1});
      }
  
      console.log(JSON.stringify(result));
  
      if (storedValue !== null) {
        hiddenInput.value = JSON.stringify(result);
      }
  
      document.body.appendChild(hiddenInput);
    } else {
      const storedValue = JSON.parse(localStorage.getItem('basket'));
      const input = document.getElementById("hiddenInput");
  
      let result = [];
      for (let i = 0; i < storedValue.length; i++) {
        result.push({[storedValue[i].id]: storedValue[i].basketCount ? storedValue[i].basketCount : 1});
      }
  
      console.log(JSON.stringify(result));
  
      if (storedValue !== null) {
        input.value = JSON.stringify(result);
      }
  
    }

  });

  for (let i = 0; i < basketDone.length; i++) {
    if (basketDone[i].basketCount) {
      priceNumber += basketDone[i].price * basketDone[i].basketCount;
    } else {
      priceNumber += basketDone[i].price;
    }
  }

  priceEl.innerText = `₽${priceNumber}`;
  basketZone.innerHTML = ``;


  for (card of basketDone) {
    basketZone.innerHTML += `
  <div class="shopping-cart__card">
  <div class="shopping-cart__card-block">
    <div class="shopping-cart__card-text">
      ${card.name}
    </div>
    <div class="shopping-cart__card-quantity">
      <button class="shopping-cart__card-quantity-plus">+</button>
      <p class="shopping-cart__card-quantity-number">${card.basketCount ? card.basketCount : 1}</p>
      <button class="shopping-cart__card-quantity-minus">
        -
      </button>
    </div>
  </div>
  </div>
  `;
  }



  const deleteBtns = document.querySelectorAll('.shopping-cart__card-quantity-minus');
  const addBtns = document.querySelectorAll('.shopping-cart__card-quantity-plus');

  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', () => {
      if (!basketDone[i]?.basketCount || basketDone[i].basketCount === 1) {
        return;
      } else {
        const elementCount = addBtns[i].parentElement.querySelector('.shopping-cart__card-quantity-number');
        basketDone[i].basketCount -= 1;
        elementCount.innerText = basketDone[i].basketCount;


        localStorage.setItem('basket', JSON.stringify(basketDone));


        for (let j = 0; j < basketDone.length; j++) {
          if (basketDone[i].id === basketDone[j].id) {
            console.log(priceNumber);
            priceNumber = priceNumber - basketDone[j].price;
          }
        }

        priceEl.innerText = `₽${priceNumber}`;
      }

    })
  }

  for (let i = 0; i < addBtns.length; i++) {
    addBtns[i].addEventListener('click', () => {
      if (basketDone[i].basketCount === undefined) {
        basketDone[i].basketCount = 1;
      }
      if (basketDone[i].count > basketDone[i].basketCount) {
        basketDone[i].basketCount += 1;


        const elementCount = addBtns[i].parentElement.querySelector('.shopping-cart__card-quantity-number');
        elementCount.innerText = basketDone[i].basketCount;

        priceNumber = 0;
        for (let j = 0; j < basketDone.length; j++) {
          if (basketDone[i].id === basketDone[j].id) {
            priceNumber += basketDone[j].price * basketDone[i].basketCount;
          } else {
            priceNumber += basketDone[j].price;
          }
        }

        priceEl.innerText = `₽${priceNumber}`;

        localStorage.setItem('basket', JSON.stringify(basketDone));
      }

    })
  }
};

renderBasket();