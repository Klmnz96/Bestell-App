function getDishTemplate(dish) {
  return `<article class="dish">
    <img src="${dish.image}" alt="${dish.name}" class="dish-img" />
    <div class="dish-info">
    <h3 class="dish-name">${dish.name}</h3>
    <p class="dish-description">${dish.description}</p>
    </div>
    <span class="dish-price">${dish.price.toFixed(2)} €</span>
    <button class="add-btn" onclick="addToBasket(${dish.id})">Zum Warenkorb</button>
    </article>`;
}

function getCategoryTemplate(category, dishesHTML) {
  return `<section class="category" id="${category.slug}">
    <div class="category-bar">
    <img src="${category.icon}" alt="" />
    <h2>${category.category}</h2>
    </div>
    <div class="dish-list">${dishesHTML}</div>
    </section>`;
}

function getCategoryLinkTemplate(category) {
  return `<a href="#${category.slug}">${category.navLabel}</a>`;
}

function getBasketItemTemplate(entry) {
  return `<li class="basket-item">
    <p class="basket-item-name">${entry.name}</p>
    <div class="basket-item-row">
    <div class="quantity">
    <button class="quantity-btn" onclick="changeQuantity(${entry.id}, -1)"><img src="./assets/icons/minus.svg" alt="Weniger" /></button>
    <span class="quantity-number">${entry.quantity}</span>
    <button class="quantity-btn" onclick="changeQuantity(${entry.id}, 1)"><img src="./assets/icons/plus.svg" alt="Mehr" /></button>
    </div>
    <span class="basket-item-price">${(entry.price * entry.quantity).toFixed(2)} €</span>
    <button class="basket-item-delete" onclick="removeFromBasket(${entry.id})"><img src="./assets/icons/trash.svg" alt="Entfernen" /></button>
    </div>
    </li>`;
}
