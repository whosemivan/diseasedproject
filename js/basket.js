const basketZone = document.querySelector('.shopping-cart__left-cards-block');
const price = document.querySelector('.shopping-cart__subtext');

const renderBasket = () => {
  let basketDone = JSON.parse(localStorage.getItem("basket"));
  console.log(basketDone);
  let priceNumber = 0;

  for (let i = 0; i < basketDone.length; i++) {
    priceNumber += basketDone[i].price;
  }
  
  price.innerText = `₽${priceNumber}`;

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


// Создаем элемент input
const hiddenInput = document.createElement('input');

// Устанавливаем атрибуты элемента
hiddenInput.type = 'hidden';
hiddenInput.id = 'hiddenInput';

// Получаем значение из localStorage
const storedValue = localStorage.getItem('basket');

// Если значение существует в localStorage, устанавливаем его в value скрытого input поля
if (storedValue !== null) {
  hiddenInput.value = storedValue;
}

// Добавляем созданный элемент в DOM (например, в body)
document.body.appendChild(hiddenInput);