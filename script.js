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
  document.body.classList.toggle("no-scroll");
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

// vw-basierte Full-Bleed-Technik funktioniert hier nicht, weil .menu
// nicht horizontal zentriert ist (Warenkorb-Sidebar daneben).
// Deshalb exakter Abstand zum echten Bildschirmrand gemessen statt geschätzt.
function setFullBleedOffsets() {
  let menuRef = document.getElementById("menu");
  let rect = menuRef.getBoundingClientRect();
  let leftOffset = -rect.left;
  let rightOffset = -(document.documentElement.clientWidth - rect.right);

  document.documentElement.style.setProperty("--bleed-left", leftOffset + "px");
  document.documentElement.style.setProperty(
    "--bleed-right",
    rightOffset + "px",
  );
}

// Debounce: wartet 150ms nach dem letzten resize-Event, bevor neu
// berechnet wird, sonsdt ruckelt es beim Ziehen am Fensterrand
function setupFullBleedResize() {
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setFullBleedOffsets, 50);
  });
}

function init() {
  setupFullBleedResize();
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
