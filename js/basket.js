const basketZone = document.querySelector('.shopping-cart__left-cards-block');

const renderBasket = () => {
    let basketDone = JSON.parse(localStorage.getItem("basket"));
    console.log(basketDone);

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