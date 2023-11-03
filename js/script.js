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


let activeTopFilter = 'Все категории';
let isHiddenEmptyProduct = false;
let minValue = 0;
let maxValue = 10000;
let sortBtnActive;

let cards = [{
        id: 1,
        name: 'Metro Last Light Complete Edition',
        image: './images/metro.jpg',
        price: 1000,
        platform: 'steam',
        ownCoins: 'steam points',
        isKey: false,
        isGameAcc: true,
        isService: false,
        isDonat: false,
        count: 1,
        buyers: 0,
        date: "2023-04-23",
        description: 'Text',
        systemText: 'Text',
        activationText: 'Text'
    },
    {
        id: 2,
        name: 'Metro Last Light Complete Edition',
        image: './images/spotify.jpg',
        price: 5000,
        platform: 'mojang',
        isKey: false,
        isGameAcc: true,
        isService: false,
        isDonat: false,
        count: 0,
        buyers: 10,
        date: "2023-05-11",
        description: 'Text',
        systemText: 'Text',
        activationText: 'Text'
    },
    {
        id: 3,
        name: 'Metro Last Light Complete Edition',
        image: './images/minecraft.jpg',
        price: 340,
        platform: 'epic games',
        isKey: false,
        isGameAcc: true,
        isService: false,
        isDonat: false,
        count: 1,
        buyers: 50,
        date: "2022-01-23",
        description: 'Text',
        systemText: 'Text',
        activationText: 'Text'
    },
    {
        id: 4,
        name: 'Metro Last Light Complete Edition',
        image: './images/spotify.jpg',
        price: 340,
        platform: 'random steam',
        isKey: false,
        isGameAcc: false,
        isService: false,
        isDonat: true,
        count: 0,
        buyers: 2,
        date: "2023-08-23",
        description: 'Text',
        systemText: 'Text',
        activationText: 'Text'
    },
    {
        id: 5,
        name: 'Metro Last Light Complete Edition',
        image: './images/minecraft.jpg',
        price: 340,
        platform: 'ubisoft',
        isKey: true,
        isGameAcc: false,
        isService: false,
        isDonat: false,
        count: 1,
        buyers: 4,
        date: "2022-04-23",
        description: 'Text',
        systemText: 'Text',
        activationText: 'Text'
    },
    {
        id: 6,
        name: 'Lalal',
        image: './images/metro.jpg',
        price: 340,
        platform: 'ea play',
        ownCoins: 'apex legends',
        isKey: false,
        isGameAcc: true,
        isService: false,
        isDonat: false,
        count: 0,
        buyers: 11,
        date: "2023-04-23",
        description: 'Text',
        systemText: 'Text',
        activationText: 'Text'
    },
    {
        id: 7,
        name: 'Lalal',
        image: './images/metro.jpg',
        price: 340,
        platform: 'rockstar',
        cheating: true,
        bust: true,
        isKey: false,
        isGameAcc: true,
        isService: false,
        isDonat: false,
        count: 0,
        buyers: 100,
        date: "2023-04-23",
        description: 'Text',
        systemText: 'Text',
        activationText: 'Text'
    },
    {
        id: 8,
        name: 'Lalal',
        image: './images/metro.jpg',
        price: 340,
        platform: 'riot',
        isKey: false,
        isGameAcc: true,
        isService: false,
        isDonat: false,
        count: 0,
        buyers: 2,
        date: "2023-04-23",
        description: 'Text',
        systemText: 'Text',
        activationText: 'Text'
    },
    {
        id: 9,
        name: 'Lalal',
        image: './images/metro.jpg',
        price: 340,
        platform: 'fortnite',
        ownCoins: 'B-БАКСЫ',
        isKey: false,
        isGameAcc: true,
        isService: false,
        isDonat: false,
        count: 0,
        buyers: 543,
        date: "2023-04-23",
        description: 'Text',
        systemText: 'Text',
        activationText: 'Text'
    },
    {
        id: 10,
        name: 'Lalal',
        image: './images/metro.jpg',
        price: 340,
        platform: 'minecraft',
        ownCoins: 'hypixel',
        isKey: false,
        isGameAcc: true,
        isService: false,
        isDonat: false,
        count: 0,
        buyers: 1,
        date: "2023-04-23",
        description: 'Text',
        systemText: 'Text',
        activationText: 'Text'
    },
    {
        id: 11,
        name: 'Lalal',
        image: './images/metro.jpg',
        price: 340,
        platform: 'genshin impact',
        ownCoins: 'примогемы',
        isKey: false,
        isGameAcc: true,
        isService: false,
        isDonat: false,
        count: 0,
        buyers: 8,
        date: "2023-04-23",
        description: 'Text',
        systemText: 'Text',
        activationText: 'Text'
    },
    {
        id: 12,
        name: 'Lalal',
        image: './images/metro.jpg',
        price: 340,
        platform: 'vk play',
        isKey: false,
        isGameAcc: true,
        isService: false,
        isDonat: false,
        count: 0,
        buyers: 8,
        date: "2023-04-23",
        description: 'Text',
        systemText: 'Text',
        activationText: 'Text'
    },
    {
        id: 13,
        name: 'Lalal',
        image: './images/metro.jpg',
        price: 340,
        platform: 'gog',
        isKey: false,
        isGameAcc: true,
        isService: false,
        isDonat: false,
        count: 0,
        buyers: 8,
        date: "2023-04-23"
    },
    {
        id: 14,
        name: 'Lalal',
        image: './images/metro.jpg',
        price: 340,
        platform: 'xbox',
        ownCoins: 'xbox gamepass',
        isKey: false,
        isGameAcc: true,
        isService: false,
        isDonat: false,
        count: 0,
        buyers: 8,
        date: "2023-04-23",
        description: 'Text',
        systemText: 'Text',
        activationText: 'Text'
    },
    {
        id: 15,
        name: 'Lalal',
        image: './images/metro.jpg',
        price: 340,
        platform: 'playstation',
        ownCoins: 'подписка',
        isKey: false,
        isGameAcc: true,
        isService: false,
        isDonat: false,
        count: 0,
        buyers: 8,
        date: "2023-04-23",
        description: 'Text',
        systemText: 'Text',
        activationText: 'Text'
    },
    {
        id: 16,
        name: 'Lalal',
        image: './images/metro.jpg',
        price: 340,
        platform: 'nintendo',
        isKey: false,
        isGameAcc: true,
        isService: false,
        isDonat: false,
        count: 0,
        buyers: 8,
        date: "2023-04-23",
        description: 'Text',
        systemText: 'Text',
        activationText: 'Text'
    },
    {
        id: 17,
        name: 'Lalal',
        image: './images/metro.jpg',
        price: 340,
        platform: 'mobile',
        isKey: false,
        isGameAcc: true,
        isService: false,
        isDonat: false,
        count: 0,
        buyers: 8,
        date: "2023-04-23",
        description: 'Text',
        systemText: 'Text',
        activationText: 'Text'
    },
    {
        id: 18,
        name: 'Lalal',
        image: './images/metro.jpg',
        price: 340,
        platform: 'roblox',
        ownCoins: 'РОБУКСЫ',
        isKey: false,
        isGameAcc: true,
        isService: false,
        isDonat: false,
        count: 0,
        buyers: 8,
        date: "2023-04-23",
        description: 'Text',
        systemText: 'Text',
        activationText: 'Text'
    },
    {
        id: 19,
        name: 'Lalal',
        image: './images/metro.jpg',
        price: 340,
        platform: 'software',
        isKey: false,
        isGameAcc: true,
        isService: false,
        isDonat: false,
        count: 0,
        buyers: 8,
        date: "2023-04-23",
        description: 'Text',
        systemText: 'Text',
        activationText: 'Text'
    },
    {
        id: 20,
        name: 'Lalal',
        image: './images/metro.jpg',
        price: 340,
        platform: 'сервисы',
        ownCoins: 'музыка',
        isKey: false,
        isGameAcc: true,
        isService: false,
        isDonat: false,
        count: 0,
        buyers: 8,
        date: "2023-04-23",
        description: 'Text',
        systemText: 'Text',
        activationText: 'Text'
    },
    {
        id: 21,
        name: 'Lalal',
        image: './images/metro.jpg',
        price: 340,
        platform: 'сервисы',
        ownCoins: 'кино',
        isKey: false,
        isGameAcc: true,
        isService: false,
        isDonat: false,
        count: 0,
        buyers: 8,
        date: "2023-04-23",
        description: 'Text',
        systemText: 'Text',
        activationText: 'Text'
    },
    {
        id: 22,
        name: 'Lalal',
        image: './images/metro.jpg',
        price: 340,
        platform: 'сервисы',
        ownCoins: 'промокоды',
        isKey: false,
        isGameAcc: true,
        isService: false,
        isDonat: false,
        count: 0,
        buyers: 8,
        date: "2023-04-23",
        description: 'Text',
        systemText: 'Text',
        activationText: 'Text'
    },
    {
        id: 23,
        name: 'Lalal',
        image: './images/metro.jpg',
        price: 340,
        platform: 'сервисы',
        ownCoins: 'баллы',
        isKey: false,
        isGameAcc: true,
        isService: false,
        isDonat: false,
        count: 0,
        buyers: 8,
        date: "2023-04-23",
        description: 'Text',
        systemText: 'Text',
        activationText: 'Text'
    },

];

localStorage.setItem('cards', JSON.stringify(cards));

localStorage.setItem('basket', JSON.stringify([]));

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
        console.log(sortBtns[i].innerText);
        sortBtnActive = sortBtns[i].innerText;
        sortList.classList.add('filter__settings__dropdown-list--hidden');
        sortBtn.innerText = sortBtns[i].innerText;
        doFilter(cards);
    });
}


// render

const renderCards = (arr) => {
    console.log('rerender');
    gamesWrapper.innerHTML = '';
    for (let card in arr) {
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
                arr[card].isGameAcc ? `<div class="games__card-icon-info">Аккаунты</div>` : ``
              }
              ${
                arr[card].isDonat ? `<div class="games__card-icon-info">Донат</div>`: ``
              }
              ${
                arr[card].isKey ? `<div class="games__card-icon-key">Ключ</div>` : ``
              }
              ${
                arr[card].isService ? `<div class="results-card-icon-info">Сервисы</div>` : ``
              }
            
              
              ${
                arr[card].platform === "steam" ? `<div class="games__card-icon-steam">Steam</div>` : ``
              }
              ${
                arr[card].platform === "mojang" || arr[card].platform === "Minecraft" ? `<div class="games__card-icon-minecraft">Mojang</div>` : ``
              }

              ${
                arr[card].platform === "epic games" ? `<div class="games__card-info-simple">Epic Games</div>` : ``
              }

              ${
                arr[card].platform === "random steam" ? `<div class="games__card-info-simple">Random Steam</div>` : ``
              }

              ${
                arr[card].platform === "ubisoft" ? `<div class="games__card-info-simple">Ubisoft</div>` : ``
              }

              ${
                arr[card].platform === "ea play" ? `<div class="games__card-info-simple">EA play</div>` : ``
              }

              ${
                arr[card].platform === "rockstar" ? `<div class="games__card-info-simple">Rockstar</div>` : ``
              }

              ${
                arr[card].platform === "riot" ? `<div class="games__card-info-simple">Riot</div>` : ``
              }

              ${
                arr[card].platform === "fortnite" ? `<div class="games__card-info-simple">Fortnite</div>` : ``
              }

              ${
                arr[card].platform === "genshin impact" ? `<div class="games__card-info-simple">Genshin impact</div>` : ``
              }

              ${
                arr[card].platform === "vk play" ? `<div class="games__card-info-simple">VK Play</div>` : ``
              }

              ${
                arr[card].platform === "gog" ? `<div class="games__card-info-simple">GOG</div>` : ``
              }

              ${
                arr[card].platform === "xbox" ? `<div class="games__card-info-simple">Xbox</div>` : ``
              }

              ${
                arr[card].platform === "playstation" ? `<div class="games__card-info-simple">Playstation</div>` : ``
              }

              ${
                arr[card].platform === "nintendo" ? `<div class="games__card-info-simple">Nintendo</div>` : ``
              }

              ${
                arr[card].platform === "mobile" ? `<div class="games__card-info-simple">Mobile</div>` : ``
              }

              ${
                arr[card].platform === "roblox" ? `<div class="games__card-info-simple">Roblox</div>` : ``
              }

              ${
                arr[card].platform === "software" ? `<div class="games__card-info-simple">Software</div>` : ``
              }

              ${
                arr[card].platform === "сервисы" ? `<div class="games__card-info-simple">Сервисы</div>` : ``
              }

              </div>
              <div class="games__card-price">₽${arr[card].price}</div>
            </div>
          </div>
        </div>
      </a>
        `;

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
            console.log(platforms[i].innerText);
            cardsCopy = cardsCopy.filter((it) => {
                return it.platform === platforms[i].innerText.toLowerCase();
            })
        }
    }


    for (let i = 0; i < supFiltersInputs.length; i++) {

        if (supFiltersInputs[i].checked) {
            console.log(supFilters[i].innerText);

            if (supFilters[i].innerText === 'ИГРЫ ОТ ₽150') {
                cardsCopy = cardsCopy.filter((card) => {
                    return card.price >= 150;
                })
            }

            if (supFilters[i].innerText === 'ИГРЫ ОТ ₽700') {
                cardsCopy = cardsCopy.filter((card) => {
                    return card.price >= 700;
                })
            }

            if (supFilters[i].innerText === 'ИГРЫ ОТ ₽900') {
                cardsCopy = cardsCopy.filter((card) => {
                    return card.price >= 900;
                })
            }

            if (supFilters[i].innerText === 'КЛЮЧИ') {
                cardsCopy = cardsCopy.filter((it) => {
                    return it.isKey === true;
                })
            }

            if (supFilters[i].innerText === 'АККАУНТЫ') {
                cardsCopy = cardsCopy.filter((it) => {
                    return it.isGameAcc === true;
                })
            }

            if (supFilters[i].innerText === 'ДОНАТ') {
                cardsCopy = cardsCopy.filter((it) => {
                    return it.isDonat === true;
                })
            }

            if (supFilters[i].innerText === 'STEAM POINTS') {
                cardsCopy = cardsCopy.filter((it) => {
                    return it.ownCoins === supFilters[i].innerText.toLowerCase();
                })
            }

            if (supFilters[i].innerText === 'STEAM POINTS') {
                cardsCopy = cardsCopy.filter((it) => {
                    return it.ownCoins === supFilters[i].innerText.toLowerCase();
                })
            }

            if (supFilters[i].innerText === 'APEX LEGENDS') {
                cardsCopy = cardsCopy.filter((it) => {
                    return it.ownCoins === supFilters[i].innerText.toLowerCase();
                })
            }

            if (supFilters[i].innerText === 'НАКРУТКА') {
                cardsCopy = cardsCopy.filter((it) => {
                    return it.cheating;
                })
            }

            if (supFilters[i].innerText === 'БУСТ') {
                cardsCopy = cardsCopy.filter((it) => {
                    return it.bust;
                })
            }

            if (supFilters[i].innerText === 'B-БАКСЫ') {
                cardsCopy = cardsCopy.filter((it) => {
                    return it.ownCoins === supFilters[i].innerText.toLowerCase();
                })
            }

            if (supFilters[i].innerText === 'HYPIXEL') {
                cardsCopy = cardsCopy.filter((it) => {
                    return it.ownCoins === supFilters[i].innerText.toLowerCase();
                })
            }

            if (supFilters[i].innerText === 'HYPIXEL') {
                cardsCopy = cardsCopy.filter((it) => {
                    return it.ownCoins === supFilters[i].innerText.toLowerCase();
                })
            }

            if (supFilters[i].innerText === 'ПРИМОГЕМЫ') {
                cardsCopy = cardsCopy.filter((it) => {
                    return it.ownCoins === supFilters[i].innerText.toLowerCase();
                })
            }

            if (supFilters[i].innerText === 'XBOX GAMEPASS') {
                cardsCopy = cardsCopy.filter((it) => {
                    return it.ownCoins === supFilters[i].innerText.toLowerCase();
                })
            }

            if (supFilters[i].innerText === 'ПОДПИСКА') {
                cardsCopy = cardsCopy.filter((it) => {
                    return it.ownCoins === supFilters[i].innerText.toLowerCase();
                })
            }

            if (supFilters[i].innerText === 'РОБУКСЫ') {
                cardsCopy = cardsCopy.filter((it) => {
                    return it.ownCoins === supFilters[i].innerText.toLowerCase();
                })
            }

            if (supFilters[i].innerText === 'МУЗЫКА') {
                cardsCopy = cardsCopy.filter((it) => {
                    return it.ownCoins === supFilters[i].innerText.toLowerCase();
                })
            }

            if (supFilters[i].innerText === 'КИНО') {
                cardsCopy = cardsCopy.filter((it) => {
                    return it.ownCoins === supFilters[i].innerText.toLowerCase();
                })
            }

            if (supFilters[i].innerText === 'ПРОМОКОДЫ') {
                cardsCopy = cardsCopy.filter((it) => {
                    return it.ownCoins === supFilters[i].innerText.toLowerCase();
                })
            }

            if (supFilters[i].innerText === 'БАЛЛЫ') {
                cardsCopy = cardsCopy.filter((it) => {
                    return it.ownCoins === supFilters[i].innerText.toLowerCase();
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
    gamesWrapper.style.gridTemplateColumns = `repeat(${evt.target?.getAttribute("data-columnsCount") || evt.getAttribute("data-columnsCount")}, minmax(100px, 1fr))`;
}

for (const radio of gridFilterRadio) {
    if (!defaultChecked && radio.checked) {
        defaultChecked = true;
        gridFilter(radio);
    }
    radio.addEventListener("change", gridFilter);
}