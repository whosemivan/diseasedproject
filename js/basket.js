const basketZone = document.querySelector('.shopping-cart__left-cards-block');
const price = document.querySelector('.shopping-cart__subtext');

const paySystemsBtns = document.querySelectorAll('.shopping-cart__right-btn');

const deleteClass = () => {
  for (let i = 0; i < paySystemsBtns.length; i++) {
    if (paySystemsBtns[i].classList.contains('shopping-cart__right-btn--active')) {
      paySystemsBtns[i].classList.remove('shopping-cart__right-btn--active');
    } 
  }
};

for (let i = 0; i < paySystemsBtns.length; i++) {
  paySystemsBtns[i].addEventListener('click', () => {
    if (paySystemsBtns[i].classList.contains('shopping-cart__right-btn--active')) {
      return;
    } else {
      deleteClass();
      paySystemsBtns[i].classList.add('shopping-cart__right-btn--active')
    }
  });
}

const renderBasket = () => {
  let basketDone = JSON.parse(localStorage.getItem("basket"));
  let priceNumber = 0;
  const payBtn = document.querySelector('.shopping-cart__total-btn');

  payBtn.addEventListener('click', () => {
    if (document.getElementById("hiddenInput") === null) {
      const hiddenInput = document.createElement('input');
      hiddenInput.type = 'hidden';
      hiddenInput.id = 'hiddenInput';
      const storedValue = JSON.parse(localStorage.getItem('basket'));
  
      let result = [];
      for (let i = 0; i < storedValue.length; i++) {
        result.push({[storedValue[i].id]: storedValue[i].basketCount ? storedValue[i].basketCount : 1});
      }
  
  
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

  price.innerText = `₽${priceNumber}`;
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
            priceNumber = priceNumber - basketDone[j].price;
          }
        }

        price.innerText = `₽${priceNumber}`;
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

        price.innerText = `₽${priceNumber}`;

        localStorage.setItem('basket', JSON.stringify(basketDone));
      }

    })
  }
};

renderBasket();

