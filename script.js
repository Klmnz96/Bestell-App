let basket = [];

function getDishById(id) {
  for (let i = 0; i < menu.length; i++) {
    for (let j = 0; j < menu[i].dishes.length; j++) {
      if (menu[i].dishes[j].id === id) {
        return menu[i].dishes[j];
      }
    }
  }
}

function addToBasket(id) {
  let index = basket.findIndex((entry) => entry.id === id);

  if (index === -1) {
    let dish = getDishById(id);
    basket.push({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      quantity: 1,
    });
  } else {
    basket[index].quantity++;
  }

  renderBasket();
}

function increaseQuantity(id) {
  let index = basket.findIndex((entry) => entry.id === id);
  basket[index].quantity++;
  renderBasket();
}

function decreaseQuantity(id) {
  let index = basket.findIndex((entry) => entry.id === id);
  if (basket[index].quantity > 1) {
    basket[index].quantity--;
  } else {
    basket.splice(index, 1);
  }
  renderBasket();
}

function removeFromBasket(id) {
  let index = basket.findIndex((entry) => entry.id === id);
  basket.splice(index, 1);
  renderBasket();
}

function renderBasket() {
  let basketRef = document.getElementById("basket-list");
  basketRef.innerHTML = "";

  if (basket.length === 0) {
    basketRef.innerHTML = "Dein Warenkorb ist leer";
  } else {
    for (let i = 0; i < basket.length; i++) {
      basketRef.innerHTML += getBasketItemTemplate(basket[i]);
    }
  }
  updateBasketSummary();
}

function updateBasketSummary() {
  let subtotal = 0;
  let count = 0;

  for (let i = 0; i < basket.length; i++) {
    subtotal += basket[i].price * basket[i].quantity;
    count += basket[i].quantity;
  }

  let deliveryFee = 4.99;
  let total = subtotal + deliveryFee;

  document.getElementById("subtotal").textContent = subtotal.toFixed(2) + " €";
  document.getElementById("total").textContent = total.toFixed(2) + " €";
  document.getElementById("basket-count").textContent = count;
  document.getElementById("mobile-basket-total").textContent =
    total.toFixed(2) + " €";
}

function renderMenu() {
  let menuRef = document.getElementById("menu");
  menuRef.innerHTML = "";

  for (let i = 0; i < menu.length; i++) {
    menuRef.innerHTML += getCategoryTemplate(menu[i]);
  }
}

function init() {
  renderMenu();
  renderCategoryNav();
  renderBasket();
}

function renderCategoryNav() {
  let navRef = document.getElementById("category-nav");
  navRef.innerHTML = "";

  for (let i = 0; i < menu.length; i++) {
    navRef.innerHTML += getCategoryLinkTemplate(menu[i]);
  }
}
