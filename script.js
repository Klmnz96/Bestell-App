let basket = [];
let isPickup = false;

function selectDelivery() {
  isPickup = false;
  document.getElementById("delivery-btn").classList.add("active");
  document.getElementById("pickup-btn").classList.remove("active");
  updateBasketSummary();
}

function selectPickup() {
  isPickup = true;
  document.getElementById("pickup-btn").classList.add("active");
  document.getElementById("delivery-btn").classList.remove("active");
  updateBasketSummary();
}

function placeOrder() {
  basket = [];
  renderBasket();
  document.getElementById("confirmation").classList.add("visible");
  document.getElementById("basket-wrapper").classList.remove("open");
}

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

function closeConfirmation() {
  document.getElementById("confirmation").classList.remove("visible");
}

function toggleBasket() {
  document.getElementById("basket-wrapper").classList.toggle("open");
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
  saveBasketToLocalStorage();
  updateBasketSummary();
}

function calculateBasketTotals() {
  let subtotal = 0;
  let count = 0;

  for (let i = 0; i < basket.length; i++) {
    subtotal += basket[i].price * basket[i].quantity;
    count += basket[i].quantity;
  }

  let deliveryFee = isPickup ? 0 : 4.99;
  let total = subtotal + deliveryFee;

  return {
    subtotal: subtotal,
    count: count,
    deliveryFee: deliveryFee,
    total: total,
  };
}

function updateBasketSummary() {
  let totals = calculateBasketTotals();

  document.getElementById("delivery-fee").textContent =
    totals.deliveryFee.toFixed(2) + " €";
  document.getElementById("subtotal").textContent =
    totals.subtotal.toFixed(2) + " €";
  document.getElementById("total").textContent = totals.total.toFixed(2) + " €";
  document.getElementById("basket-count").textContent = totals.count;
  document.getElementById("mobile-basket-total").textContent =
    totals.total.toFixed(2) + " €";
}

function renderMenu() {
  let menuRef = document.getElementById("menu");
  menuRef.innerHTML = "";

  for (let i = 0; i < menu.length; i++) {
    menuRef.innerHTML += getCategoryTemplate(menu[i]);
  }
}

function init() {
  getBasketFromLocalStorage();
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

function saveBasketToLocalStorage() {
  localStorage.setItem("basket", JSON.stringify(basket));
}

function getBasketFromLocalStorage() {
  let savedBasket = JSON.parse(localStorage.getItem("basket"));
  if (savedBasket) {
    basket = savedBasket;
  }
}
