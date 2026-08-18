const menu = [
  {
    category: "Burger & Sandwiches",
    slug: "burger",
    navLabel: "Burger",
    icon: "assets/icons/burger.svg",
    dishes: [
      {
        id: 1,
        name: "Veggie Mushroom Black Burger",
        price: 16.9,
        description:
          "Gemischter Blattsalat, Tomaten, Edamame und Champignons im schwarzen Bun",
        image: "assets/img/veggie-burger.jpg",
      },
      {
        id: 2,
        name: "All Meat Burger",
        price: 15.9,
        description:
          "Rindfleisch, Bacon, Essiggurken, geräucherter Käse, Ketchup und BBQ-Sauce",
        image: "assets/img/all-meat-burger.jpg",
      },
      {
        id: 3,
        name: "Beef Red Burger",
        price: 14.9,
        description: "Rindfleisch, Käse, Tomaten, Salat und rote Zwiebeln",
        image: "assets/img/all-red-burger.jpg",
      },
      {
        id: 4,
        name: "Big Chicken Burger",
        price: 15.9,
        description: "Hähnchen, Käse, Tomaten, Salat, Zwiebeln und Paprika",
        image: "assets/img/big-chicken-burger.jpg",
      },
    ],
  },
  {
    category: "Pizza (30 cm)",
    slug: "pizza",
    navLabel: "Pizza",
    icon: "assets/icons/pizza.svg",
    dishes: [
      {
        id: 5,
        name: "Pizza Margherita",
        price: 11.9,
        description: "Tomatensauce und Mozzarella",
        image: "assets/img/pizza-margherita.jpg",
      },
      {
        id: 6,
        name: "Pizza Chorizo",
        price: 13.9,
        description: "Tomatenscheiben, Mozzarella und Chorizo",
        image: "assets/img/pizza-chorizo.jpg",
      },
      {
        id: 7,
        name: "Pizza Funghi",
        price: 12.9,
        description: "Rote Zwiebeln, Oliven, braune Champignons und Mozzarella",
        image: "assets/img/pizza-funghi.jpg",
      },
      {
        id: 8,
        name: "Quattro Formaggi",
        price: 15.9,
        description: "Mozzarella, Gorgonzola, Fontina und Parmigiano Reggiano",
        image: "assets/img/pizza-quattro-formaggi.jpg",
      },
    ],
  },
  {
    category: "Salate",
    slug: "salate",
    navLabel: "Salate",
    icon: "assets/icons/salad.svg",
    dishes: [
      {
        id: 9,
        name: "Warmer Rucola-Rindfleischsalat",
        price: 16.9,
        description:
          "Rindfleisch, Rucola, Feldsalat, Feta, Kirschtomaten und Balsamico-Dressing",
        image: "assets/img/beef-salad.jpg",
      },
      {
        id: 10,
        name: "Kleiner grüner Salat",
        price: 7.9,
        description: "Blattsalat, Gurke, Karotten, Petersilie und Radieschen",
        image: "assets/img/green-salad.jpg",
      },
      {
        id: 11,
        name: "Meeresfrüchtesalat",
        price: 16.9,
        description:
          "Blattsalat, Kirschtomaten, rote Zwiebeln, Muscheln, Calamari und Garnelen",
        image: "assets/img/seafood-salad.jpg",
      },
      {
        id: 12,
        name: "Veganer Salat mit Tofu",
        price: 14.9,
        description:
          "Blattsalat, Kirschtomaten, Gurke, Babyspinat, Edamame und Erdnüsse",
        image: "assets/img/tofu-salad.jpg",
      },
    ],
  },
  {
    category: "Beilagen",
    slug: "beilagen",
    navLabel: "Beilagen",
    icon: "assets/icons/sides.svg",
    dishes: [
      {
        id: 13,
        name: "Pommes Frites",
        price: 4.9,
        description: "Knusprige Pommes mit Meersalz",
        image: "assets/img/pommes-frittes.jpg",
      },
      {
        id: 14,
        name: "Süßkartoffel-Pommes",
        price: 5.9,
        description: "Süßkartoffelspalten, im Ofen gebacken",
        image: "assets/img/sweet-potato-fries.jpg",
      },
      {
        id: 15,
        name: "Mayonnaise",
        price: 0.9,
        description: "Hausgemachte Mayonnaise, 50 ml",
        image: "assets/img/mayo.png",
      },
      {
        id: 16,
        name: "Ketchup",
        price: 0.9,
        description: "Tomatenketchup, 50 ml",
        image: "assets/img/ketchup.png",
      },
    ],
  },
  {
    category: "Nachspeisen",
    slug: "nachspeisen",
    navLabel: "Nachspeisen",
    icon: "assets/icons/desserts.svg",
    dishes: [
      {
        id: 17,
        name: "Tiramisu",
        price: 6.9,
        description: "Klassisch mit Mascarpone, Espresso und Kakao",
        image: "assets/img/tiramisu.jpg",
      },
      {
        id: 18,
        name: "Profiteroles Dunkel",
        price: 6.5,
        description: "Windbeutel mit Vanillecreme und dunkler Schokolade",
        image: "assets/img/profiteroles-black.jpg",
      },
      {
        id: 19,
        name: "Profiteroles Weiß",
        price: 6.5,
        description: "Windbeutel mit Vanillecreme und weißer Schokolade",
        image: "assets/img/profiteroles-white.jpg",
      },
      {
        id: 20,
        name: "Apfelkuchen",
        price: 5.9,
        description: "Warmer Apfelkuchen mit Zimt",
        image: "assets/img/apple-cake.jpg",
      },
    ],
  },
  {
    category: "Getränke",
    slug: "getraenke",
    navLabel: "Getränke",
    icon: "assets/icons/drinks.svg",
    dishes: [
      {
        id: 21,
        name: "Coca-Cola",
        price: 3.5,
        description: "0,33 l, gekühlt",
        image: "assets/img/coca-cola.png",
      },
      {
        id: 22,
        name: "Fanta",
        price: 3.5,
        description: "0,33 l, gekühlt",
        image: "assets/img/fanta.png",
      },
      {
        id: 23,
        name: "Sprite",
        price: 3.5,
        description: "0,33 l, gekühlt",
        image: "assets/img/sprite.png",
      },
      {
        id: 24,
        name: "Mineralwasser",
        price: 2.9,
        description: "0,5 l, still oder prickelnd",
        image: "assets/img/mineral-wasser.png",
      },
    ],
  },
];

let deliveryFee = 4.99;
