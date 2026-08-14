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
}

function renderCategoryNav() {
  let navRef = document.getElementById("category-nav");
  navRef.innerHTML = "";

  for (let i = 0; i < menu.length; i++) {
    navRef.innerHTML += getCategoryLinkTemplate(menu[i]);
  }
}
