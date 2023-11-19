const gamesWrapper = document.querySelector('.games__wrapper');
const topFilterBtns = document.querySelectorAll('.filter__categoryName');
const hiddenProductFilter = document.querySelector('.hidden-product');
const platforms = document.querySelectorAll('.filter-checkbox__container-title');
const platformsInputs = document.querySelectorAll('.filter-checkbox__container-title input');

const supFilters = document.querySelectorAll('.filter-checkbox__container');
const supFiltersInputs = document.querySelectorAll('.filter-checkbox__container input');

const inputMinPrice = document.querySelector('.min-price');
const inputMaxPrice = document.querySelector('.max-price');


const filterBtn = document.querySelector('.filter__dropdown-select');
const filters = document.querySelector('.filter__block');

const sortBtn = document.querySelector('.filter__settings__dropdown-selected');
const sortBtns = document.querySelectorAll('.filter__dropdown-item-btn');
const sortList = document.querySelector('.filter__settings__dropdown-list');
const firstScreenSlider = document.querySelector('.first-screen__slider .swiper-wrapper');
const sliderZone = document.querySelector('.lastPurchaseSwiper .swiper-wrapper');
const showMoreBtn = document.querySelector('.showMore');
let isText = true;

let activeTopFilter = 'Все категории';
let isHiddenEmptyProduct = false;
let minValue = 0;
let maxValue = 10000;
let sortBtnActive;

const cards = JSON.parse(document.getElementById('cards').innerHTML);
localStorage.setItem('cards', JSON.stringify(cards));


function getQueryParams() {
  var params = new URLSearchParams(window.location.search);
  return Object.fromEntries(params.entries());
}


const queryParams = getQueryParams();
const categoryName = queryParams.category;

if (categoryName) {
  for (let i = 0; i < platformsInputs.length; i++) {
    if (categoryName.toLowerCase().replace(/\s/g, '') === platforms[i].innerText.toLowerCase().replace(/\s/g, '')) {
      platformsInputs[i].checked = true;
    }
  }
}

localStorage.getItem('basket') ? '' : localStorage.setItem('basket', JSON.stringify([]));


for (let i = 0; i < topFilterBtns.length; i++) {
  topFilterBtns[i].addEventListener('click', () => {

    // delete last active filter
    for (let j in topFilterBtns) {
      if (topFilterBtns[j].innerText === activeTopFilter) {
        topFilterBtns[j].classList.remove('filter__categoryName--active');
      }
    }

    // set new
    topFilterBtns[i].classList.add('filter__categoryName--active');
    activeTopFilter = topFilterBtns[i].innerText;
    doFilter(cards);
  });
}


hiddenProductFilter.addEventListener('click', () => {
  isHiddenEmptyProduct = !isHiddenEmptyProduct;
  doFilter(cards);
});


inputMinPrice.addEventListener('input', (evt) => {
  minValue = evt.target.value
  doFilter(cards);
});

inputMaxPrice.addEventListener('input', (evt) => {
  maxValue = evt.target.value
  doFilter(cards);
});

for (let i = 0; i < platformsInputs.length; i++) {
  platformsInputs[i].addEventListener('click', () => {
    doFilter(cards);
  });
}

for (let i = 0; i < supFiltersInputs.length; i++) {
  supFiltersInputs[i].addEventListener('click', () => {
    doFilter(cards);
  });
}

filterBtn.addEventListener('click', () => {
  filters.classList.toggle('filter__block--hidden');
});

sortBtn.addEventListener('click', () => {
  sortList.classList.toggle('filter__settings__dropdown-list--hidden');
});


for (let i = 0; i < sortBtns.length; i++) {
  sortBtns[i].addEventListener('click', () => {
    sortBtnActive = sortBtns[i].innerText;
    sortList.classList.add('filter__settings__dropdown-list--hidden');
    sortBtn.innerText = sortBtns[i].innerText;
    doFilter(cards);
  });
}


// render
let cardsToShow = 10;

const renderCards = (arr) => {
  gamesWrapper.innerHTML = '';
  for (let i = 0; i < cardsToShow && i < arr.length; i++) {
    const card = i;

    const gameCard = `
          <a href="gamepage.html?productName=${arr[card].name}&image=${arr[card].image}&price=${arr[card].price}&count=${arr[card].count}&buyers=${arr[card].buyers}&description=${arr[card].description}&systemText=${arr[card].systemText}&activation=${arr[card].activationText}&platform=${arr[card].platform}&id=${arr[card].id}" class="game__card">
          <div
            class="game__card-img"
            style="background-image: url('${arr[card].image}')"
          ></div>
          <div class="game__card-info-block">
            <div class="game__card-title">${arr[card].name}</div>
            <div class="games__card-info">
              <div class="games__card-icons">
                <div class="games__card-group-icons">
                ${
                  arr[card].isGameAcc ? `<div class="games__card-icon-info">${isText ? 'Аккаунты' : ''}</div>` : ``
                }
                ${
                  arr[card].isDonat ? `<div class="games__card-icon-info">${isText ? 'Донат' : ''}</div>`: ``
                }
                ${
                  arr[card].isKey ? `<div class="games__card-icon-key">${isText ? 'Ключ' : ''}</div>` : ``
                }
                ${
                  arr[card].isService ? `<div class="results-card-icon-info">${isText ? 'Сервисы' : ''}</div>` : ``
                }
              
                
                ${
                  arr[card].platform === "steam" ? `<div class="games__card-icon-steam">${isText ? 'Steam' : ''}</div>` : ``
                }
                ${
                  arr[card].platform === "mojang" || arr[card].platform === "minecraft" ? `<div class="games__card-icon-minecraft">${isText ? 'Mojang' : ''}</div>` : ``
                }
  
                ${
                  arr[card].platform === "epic games" ? `<div class="games__card-icon-epicgames">${isText ? 'Epic Games' : ''}</div>` : ``
                }
  
                ${
                  arr[card].platform === "random steam" ? `<div class="games__card-icon-random">${isText ? 'Random Steam' : ''}</div>` : ``
                }
  
                ${
                  arr[card].platform === "ubisoft" ? `<div class="games__card-icon-uplay">${isText ? 'Ubisoft' : ''}</div>` : ``
                }
  
                ${
                  arr[card].platform === "ea play" ? `<div class="games__card-info-simple">${isText ? 'EA play' : ''}</div>` : ``
                }
  
                ${
                  arr[card].platform === "rockstar" ? `<div class="games__card-info-simple">${isText ? 'Rockstar' : ''}</div>` : ``
                }
  
                ${
                  arr[card].platform === "riot" ? `<div class="games__card-info-simple">${isText ? 'Riot' : ''}</div>` : ``
                }
  
                ${
                  arr[card].platform === "fortnite" ? `<div class="games__card-info-simple">${isText ? 'Fortnite' : ''}</div>` : ``
                }
  
                ${
                  arr[card].platform === "genshin impact" ? `<div class="games__card-info-simple">${isText ? 'Genshin impact' : ''}</div>` : ``
                }
  
                ${
                  arr[card].platform === "vk play" ? `<div class="games__card-info-simple">${isText ? 'VK Play' : ''}</div>` : ``
                }
  
                ${
                  arr[card].platform === "gog" ? `<div class="games__card-info-simple">${isText ? 'GOG' : ''}</div>` : ``
                }
  
                ${
                  arr[card].platform === "xbox" ? `<div class="games__card-info-simple">${isText ? 'Xbox' : ''}</div>` : ``
                }
  
                ${
                  arr[card].platform === "playstation" ? `<div class="games__card-info-simple">${isText ? 'Playstation' : ''}</div>` : ``
                }
  
                ${
                  arr[card].platform === "nintendo" ? `<div class="games__card-info-simple">${isText ? 'Nintendo' : ''}</div>` : ``
                }
  
                ${
                  arr[card].platform === "mobile" ? `<div class="games__card-info-simple">${isText ? 'Mobile' : ''}</div>` : ``
                }
  
                ${
                  arr[card].platform === "roblox" ? `<div class="games__card-info-simple">${isText ? 'Roblox' : ''}</div>` : ``
                }
  
                ${
                  arr[card].platform === "software" ? `<div class="games__card-info-simple">${isText ? 'Software' : ''}</div>` : ``
                }
  
                ${
                  arr[card].platform === "сервисы" ? `<div class="games__card-icon-service">${isText ? 'Сервисы' : ''}</div>` : ``
                }
  
                </div>
                <div class="games__card-price">₽${arr[card].price}</div>
              </div>
            </div>
          </div>
        </a>
          `;

    if (cardsToShow < arr.length) {
      showMoreBtn.addEventListener('click', () => {
        cardsToShow += 10;
        renderCards(arr);
      });
    } else {
      showMoreBtn.remove();
    }

    gamesWrapper.innerHTML += gameCard;
  }
};

//   <div class="games__card-icon-spotify">Spotify</div>
// <div class="games__card-icon-discord">Discord</div>
// filters


const doFilter = (cards) => {
  let cardsCopy = cards.slice();

  switch (activeTopFilter) {
    case 'Ключи':
      cardsCopy = cardsCopy.filter((it) => {
        return it.isKey === true;
      })
      break;
    case 'Игровые аккаунты':
      cardsCopy = cardsCopy.filter((it) => {
        return it.isGameAcc === true;
      })
      break;
    case 'Сервисы':
      cardsCopy = cardsCopy.filter((it) => {
        return it.isService === true;
      })
      break;
    case 'Донат':
      cardsCopy = cardsCopy.filter((it) => {
        return it.isDonat === true;
      })
      break;
    default:
      cardsCopy = cardsCopy.filter((it) => {
        return it;
      })
  }


  if (isHiddenEmptyProduct === true) {
    cardsCopy = cardsCopy.filter((it) => {
      if (it.count > 0) {
        return it;
      }
    })
  }

  cardsCopy = cardsCopy.filter((card) => {
    return card.price >= minValue && card.price <= maxValue;
  })



  for (let i = 0; i < platformsInputs.length; i++) {
    if (platformsInputs[i].checked) {
      cardsCopy = cardsCopy.filter((it) => {
        return it.platform.replace(/\s/g, '') === platforms[i].innerText.toLowerCase().replace(/\s/g, '');
      })
    }
  }


  for (let i = 0; i < supFiltersInputs.length; i++) {

    if (supFiltersInputs[i].checked) {

      if (supFilters[i].innerText === 'ИГРЫ ОТ ₽150') {
        let parentElement = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title input');
        let parentElementName = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title').innerText;
        parentElement.checked = true;
        
        cardsCopy = cardsCopy.filter((card) => {
          return card.price >= 150 && it.platform.replace(/\s/g, '') === parentElementName.toLowerCase().replace(/\s/g, '');
        })
      }

      if (supFilters[i].innerText === 'ИГРЫ ОТ ₽700') {
        let parentElement = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title input');
        let parentElementName = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title').innerText;
        parentElement.checked = true;
        
        cardsCopy = cardsCopy.filter((card) => {
          return card.price >= 700 && it.platform.replace(/\s/g, '') === parentElementName.toLowerCase().replace(/\s/g, '');
        })
      }

      if (supFilters[i].innerText === 'ИГРЫ ОТ ₽900') {
        let parentElement = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title input');
        let parentElementName = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title').innerText;
        parentElement.checked = true;
        
        cardsCopy = cardsCopy.filter((card) => {
          return card.price >= 900 && it.platform.replace(/\s/g, '') === parentElementName.toLowerCase().replace(/\s/g, '');
        })
      }

      if (supFilters[i].innerText === 'КЛЮЧИ') {
        let parentElement = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title input');
        let parentElementName = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title').innerText;

        parentElement.checked = true;        
        
        cardsCopy = cardsCopy.filter((it) => {
          return it.isKey === true && it.platform.replace(/\s/g, '') === parentElementName.toLowerCase().replace(/\s/g, '');
        })
      }

      if (supFilters[i].innerText === 'АККАУНТЫ') {
        let parentElement = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title input');
        let parentElementName = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title').innerText;
        parentElement.checked = true;
        
        cardsCopy = cardsCopy.filter((it) => {
          return it.isGameAcc === true && it.platform.replace(/\s/g, '') === parentElementName.toLowerCase().replace(/\s/g, '');
        })
      }

      if (supFilters[i].innerText === 'ДОНАТ') {
        let parentElement = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title input');
        let parentElementName = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title').innerText;
        parentElement.checked = true;
        
        cardsCopy = cardsCopy.filter((it) => {
          return it.isDonat === true && it.platform.replace(/\s/g, '') === parentElementName.toLowerCase().replace(/\s/g, '');
        })
      }

      if (supFilters[i].innerText === 'STEAM POINTS') {
        let parentElement = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title input');
        let parentElementName = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title').innerText;
        parentElement.checked = true;
        
        cardsCopy = cardsCopy.filter((it) => {
          return it.ownCoins === supFilters[i].innerText.toLowerCase() && it.platform.replace(/\s/g, '') === parentElementName.toLowerCase().replace(/\s/g, '');
        })
      }

      if (supFilters[i].innerText === 'STEAM POINTS') {
        let parentElement = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title input');
        let parentElementName = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title').innerText;
        parentElement.checked = true;
        
        cardsCopy = cardsCopy.filter((it) => {
          return it.ownCoins === supFilters[i].innerText.toLowerCase() && it.platform.replace(/\s/g, '') === parentElementName.toLowerCase().replace(/\s/g, '');
        })
      }

      if (supFilters[i].innerText === 'APEX LEGENDS') {
        let parentElement = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title input');
        let parentElementName = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title').innerText;
        parentElement.checked = true;
        
        cardsCopy = cardsCopy.filter((it) => {
          return it.ownCoins === supFilters[i].innerText.toLowerCase() && it.platform.replace(/\s/g, '') === parentElementName.toLowerCase().replace(/\s/g, '');
        })
      }

      if (supFilters[i].innerText === 'НАКРУТКА') {
        let parentElement = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title input');
        let parentElementName = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title').innerText;
        parentElement.checked = true;
        
        cardsCopy = cardsCopy.filter((it) => {
          return it.cheating && it.platform.replace(/\s/g, '') === parentElementName.toLowerCase().replace(/\s/g, '');
        })
      }

      if (supFilters[i].innerText === 'БУСТ') {
        let parentElement = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title input');
        let parentElementName = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title').innerText;
        parentElement.checked = true;
        
        cardsCopy = cardsCopy.filter((it) => {
          return it.bust && it.platform.replace(/\s/g, '') === parentElementName.toLowerCase().replace(/\s/g, '');
        })
      }

      if (supFilters[i].innerText === 'B-БАКСЫ') {
        let parentElement = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title input');
        let parentElementName = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title').innerText;
        parentElement.checked = true;
        
        cardsCopy = cardsCopy.filter((it) => {
          return it.ownCoins === supFilters[i].innerText.toLowerCase() && it.platform.replace(/\s/g, '') === parentElementName.toLowerCase().replace(/\s/g, '');
        })
      }

      if (supFilters[i].innerText === 'HYPIXEL') {
        let parentElement = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title input');
        let parentElementName = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title').innerText;
        parentElement.checked = true;
        
        cardsCopy = cardsCopy.filter((it) => {
          return it.ownCoins === supFilters[i].innerText.toLowerCase() && it.platform.replace(/\s/g, '') === parentElementName.toLowerCase().replace(/\s/g, '');
        })
      }

      if (supFilters[i].innerText === 'HYPIXEL') {
        let parentElement = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title input');
        let parentElementName = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title').innerText;
        parentElement.checked = true;
        
        cardsCopy = cardsCopy.filter((it) => {
          return it.ownCoins === supFilters[i].innerText.toLowerCase() && it.platform.replace(/\s/g, '') === parentElementName.toLowerCase().replace(/\s/g, '');
        })
      }

      if (supFilters[i].innerText === 'ПРИМОГЕМЫ') {
        let parentElement = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title input');
        let parentElementName = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title').innerText;
        parentElement.checked = true;
        
        cardsCopy = cardsCopy.filter((it) => {
          return it.ownCoins === supFilters[i].innerText.toLowerCase() && it.platform.replace(/\s/g, '') === parentElementName.toLowerCase().replace(/\s/g, '');
        })
      }

      if (supFilters[i].innerText === 'XBOX GAMEPASS') {
        let parentElement = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title input');
        let parentElementName = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title').innerText;
        parentElement.checked = true;
        
        cardsCopy = cardsCopy.filter((it) => {
          return it.ownCoins === supFilters[i].innerText.toLowerCase() && it.platform.replace(/\s/g, '') === parentElementName.toLowerCase().replace(/\s/g, '');
        })
      }

      if (supFilters[i].innerText === 'ПОДПИСКА') {
        let parentElement = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title input');
        let parentElementName = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title').innerText;
        parentElement.checked = true;
        
        cardsCopy = cardsCopy.filter((it) => {
          return it.ownCoins === supFilters[i].innerText.toLowerCase() && it.platform.replace(/\s/g, '') === parentElementName.toLowerCase().replace(/\s/g, '');
        })
      }

      if (supFilters[i].innerText === 'РОБУКСЫ') {
        let parentElement = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title input');
        let parentElementName = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title').innerText;
        parentElement.checked = true;
        
        cardsCopy = cardsCopy.filter((it) => {
          return it.ownCoins === supFilters[i].innerText.toLowerCase() && it.platform.replace(/\s/g, '') === parentElementName.toLowerCase().replace(/\s/g, '');
        })
      }

      if (supFilters[i].innerText === 'МУЗЫКА') {
        let parentElement = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title input');
        let parentElementName = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title').innerText;
        parentElement.checked = true;
        
        cardsCopy = cardsCopy.filter((it) => {
          return it.ownCoins === supFilters[i].innerText.toLowerCase() && it.platform.replace(/\s/g, '') === parentElementName.toLowerCase().replace(/\s/g, '');
        })
      }

      if (supFilters[i].innerText === 'КИНО') {
        let parentElement = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title input');
        let parentElementName = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title').innerText;
        parentElement.checked = true;
        
        cardsCopy = cardsCopy.filter((it) => {
          return it.ownCoins === supFilters[i].innerText.toLowerCase() && it.platform.replace(/\s/g, '') === parentElementName.toLowerCase().replace(/\s/g, '');
        })
      }

      if (supFilters[i].innerText === 'ПРОМОКОДЫ') {
        let parentElement = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title input');
        let parentElementName = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title').innerText;
        parentElement.checked = true;
        
        cardsCopy = cardsCopy.filter((it) => {
          return it.ownCoins === supFilters[i].innerText.toLowerCase() && it.platform.replace(/\s/g, '') === parentElementName.toLowerCase().replace(/\s/g, '');
        })
      }

      if (supFilters[i].innerText === 'БАЛЛЫ') {
        let parentElement = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title input');
        let parentElementName = supFilters[i].parentElement.parentElement.querySelector('.filter-checkbox__container-title').innerText;
        parentElement.checked = true;
        
        cardsCopy = cardsCopy.filter((it) => {
          return it.ownCoins === supFilters[i].innerText.toLowerCase() && it.platform.replace(/\s/g, '') === parentElementName.toLowerCase().replace(/\s/g, '');
        })
      }
    }

    if (sortBtnActive === 'По популярности') {
      cardsCopy = cardsCopy.sort((a, b) => b.buyers - a.buyers);
    }

    if (sortBtnActive === 'Сначала дешевые') {
      cardsCopy = cardsCopy.sort((a, b) => a.price - b.price);
    }

    if (sortBtnActive === 'Сначала дорогие') {
      cardsCopy = cardsCopy.sort((a, b) => b.price - a.price);
    }

    if (sortBtnActive === 'Новые') {
      cardsCopy = cardsCopy.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
    }
  }

  renderCards(cardsCopy);
}

doFilter(cards);




let defaultChecked = false;
const gridFilterRadio = document.querySelectorAll(".radio-group__input");


function gridFilter(evt) {
  if (+evt.target?.getAttribute("data-columnsCount") === 5) {
    isText = false;
  } else {
    isText = true;
  }
  console.log(isText);
  console.log(evt.target?.getAttribute("data-columnsCount"));

  doFilter(cards);
  gamesWrapper.style.gridTemplateColumns = `repeat(${evt.target?.getAttribute("data-columnsCount") || evt.getAttribute("data-columnsCount")}, minmax(100px, 1fr))`;
}

for (const radio of gridFilterRadio) {
  if (!defaultChecked && radio.checked) {
    if (window.innerWidth > 1550 && +radio.dataset.columnscount < 4) {
      continue;
    }
    defaultChecked = true;
    gridFilter(radio);
  }

  radio.addEventListener("change", gridFilter);
}

sliderZone.innerHTML = ``;

for (let card in cards.slice(0, 6)) {
  sliderZone.innerHTML += `
      <div class="swiper-slide">
      <a href="gamepage.html?productName=${cards[card].name}&image=${cards[card].image}&price=${cards[card].price}&count=${cards[card].count}&buyers=${cards[card].buyers}&description=${cards[card].description}&systemText=${cards[card].systemText}&activation=${cards[card].activationText}&platform=${cards[card].platform}&id=${cards[card].id}" class="lastPurchase__card">
      <div class="lastPurchase__card-img" style="background-image: url('${cards[card].image}')"></div>
      <div class="lastPurchase__card-info">
        <div class="lastPurchase__card-text-block">
          <div class="lastPurchase__card-title">
          ${cards[card].name}
          </div>
          <div class="lastPurchase__card-icons">
          ${
              cards[card].isGameAcc ? `<div class="games__card-icon-info">Аккаунты</div>` : ``
            }
            ${
              cards[card].isDonat ? `<div class="games__card-icon-info">Донат</div>`: ``
            }
            ${
              cards[card].isKey ? `<div class="games__card-icon-key">Ключ</div>` : ``
            }
            ${
              cards[card].isService ? `<div class="results-card-icon-info">Сервисы</div>` : ``
            }
          
            
            ${
              cards[card].platform === "steam" ? `<div class="games__card-icon-steam">Steam</div>` : ``
            }
            ${
              cards[card].platform === "mojang" || cards[card].platform === "minecraft" ? `<div class="games__card-icon-minecraft">Mojang</div>` : ``
            }
  
            ${
              cards[card].platform === "epic games" ? `<div class="games__card-info-simple">Epic Games</div>` : ``
            }
  
            ${
              cards[card].platform === "random steam" ? `<div class="games__card-icon-random">Random Steam</div>` : ``
            }
  
            ${
              cards[card].platform === "ubisoft" ? `<div class="games__card-icon-uplay">Ubisoft</div>` : ``
            }
  
            ${
              cards[card].platform === "ea play" ? `<div class="games__card-info-simple">EA play</div>` : ``
            }
  
            ${
              cards[card].platform === "rockstar" ? `<div class="games__card-info-simple">Rockstar</div>` : ``
            }
  
            ${
              cards[card].platform === "riot" ? `<div class="games__card-info-simple">Riot</div>` : ``
            }
  
            ${
              cards[card].platform === "fortnite" ? `<div class="games__card-info-simple">Fortnite</div>` : ``
            }
  
            ${
              cards[card].platform === "genshin impact" ? `<div class="games__card-info-simple">Genshin impact</div>` : ``
            }
  
            ${
              cards[card].platform === "vk play" ? `<div class="games__card-info-simple">VK Play</div>` : ``
            }
  
            ${
              cards[card].platform === "gog" ? `<div class="games__card-info-simple">GOG</div>` : ``
            }
  
            ${
              cards[card].platform === "xbox" ? `<div class="games__card-info-simple">Xbox</div>` : ``
            }
  
            ${
              cards[card].platform === "playstation" ? `<div class="games__card-info-simple">Playstation</div>` : ``
            }
  
            ${
              cards[card].platform === "nintendo" ? `<div class="games__card-info-simple">Nintendo</div>` : ``
            }
  
            ${
              cards[card].platform === "mobile" ? `<div class="games__card-info-simple">Mobile</div>` : ``
            }
  
            ${
              cards[card].platform === "roblox" ? `<div class="games__card-info-simple">Roblox</div>` : ``
            }
  
            ${
              cards[card].platform === "software" ? `<div class="games__card-info-simple">Software</div>` : ``
            }
  
            ${
              cards[card].platform === "сервисы" ? `<div class="games__card-icon-service">Сервисы</div>` : ``
            }
            <div class="games__card-price">₽${cards[card].price}</div>
  
          </div>
        </div>
      </div>
      </a>
      </div>
      `;
}


for (let card in cards.slice(0, 3)) {
  firstScreenSlider.innerHTML += `
      <div class="swiper-slide">
      <a href="gamepage.html?productName=${cards[card].name}&image=${cards[card].image}&price=${cards[card].price}&count=${cards[card].count}&buyers=${cards[card].buyers}&description=${cards[card].description}&systemText=${cards[card].systemText}&activation=${cards[card].activationText}&platform=${cards[card].platform}&id=${cards[card].id}">
        <img src="${cards[card].image}" class="slider__img"></img>
        <div class="slider__text">
          <img src="${cards[card].sliderLogo}" class="slider__logo"></img>
          <div class="game__info">
            <a class="rightArrow"></a>
            <div class="slider__title">${cards[card].name}</div>
            <div class="game__info-items">
              ${
                  cards[card].isGameAcc ? `<div class="game__info-item">Аккаунты</div>` : ``
                }
                ${
                  cards[card].isDonat ? `<div class="game__info-item">Донат</div>`: ``
                }
                ${
                  cards[card].isKey ? `<div class="game__info-item">Ключ</div>` : ``
                }
                ${
                  cards[card].isService ? `<div class="game__info-item">Сервисы</div>` : ``
                }
              
                
                ${
                  cards[card].platform === "steam" ? `<div class="game__info-item">Steam</div>` : ``
                }
                ${
                  cards[card].platform === "mojang" || cards[card].platform === "minecraft" ? `<div class="game__info-item">Mojang</div>` : ``
                }
      
                ${
                  cards[card].platform === "epic games" ? `<div class="game__info-item">Epic Games</div>` : ``
                }
      
                ${
                  cards[card].platform === "random steam" ? `<div class="game__info-item">Random Steam</div>` : ``
                }
      
                ${
                  cards[card].platform === "ubisoft" ? `<div class="game__info-item">Ubisoft</div>` : ``
                }
      
                ${
                  cards[card].platform === "ea play" ? `<div class="game__info-item">EA play</div>` : ``
                }
      
                ${
                  cards[card].platform === "rockstar" ? `<div class="game__info-item">Rockstar</div>` : ``
                }
      
                ${
                  cards[card].platform === "riot" ? `<div class="game__info-item">Riot</div>` : ``
                }
      
                ${
                  cards[card].platform === "fortnite" ? `<div class="game__info-item">Fortnite</div>` : ``
                }
      
                ${
                  cards[card].platform === "genshin impact" ? `<div class="game__info-item">Genshin impact</div>` : ``
                }
      
                ${
                  cards[card].platform === "vk play" ? `<div class="game__info-item">VK Play</div>` : ``
                }
      
                ${
                  cards[card].platform === "gog" ? `<div class="game__info-item">GOG</div>` : ``
                }
      
                ${
                  cards[card].platform === "xbox" ? `<div class="game__info-item">Xbox</div>` : ``
                }
      
                ${
                  cards[card].platform === "playstation" ? `<div class="game__info-item">Playstation</div>` : ``
                }
      
                ${
                  cards[card].platform === "nintendo" ? `<div class="game__info-item">Nintendo</div>` : ``
                }
      
                ${
                  cards[card].platform === "mobile" ? `<div class="game__info-item">Mobile</div>` : ``
                }
      
                ${
                  cards[card].platform === "roblox" ? `<div class="game__info-item">Roblox</div>` : ``
                }
      
                ${
                  cards[card].platform === "software" ? `<div class="game__info-item">Software</div>` : ``
                }
      
                ${
                  cards[card].platform === "сервисы" ? `<div class="game__info-item">Сервисы</div>` : ``
                }
            </div>
          </div>
        </div>
      </a>
    </div>
      `;
}