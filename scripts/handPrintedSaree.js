import { cart, addToCart } from '../data/cart.js';

const products = [

    {
        id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
        link: "xcd.html",
        image: "data/sareeProducts/edHandPaintedKalamkariPureSilkSareeRed.webp",
        name: "Hand Painted Kalamkari Pure Silk Saree  (Red)",
        rating: {
            stars: 4.5,
            count: 232
        },
        priceCents: 9500,
        keywords: [
            "saree",
            "kalankaaro",

        ]
    },
    {
        id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
        link: "xce.html",
        image: "data/sareeProducts/eeHandPaintedMadhubaniCottonLinenSareePink.webp",
        name: "Hand Painted Madhubani Cotton Linen Saree  (Pink)",
        rating: {
            stars: 4,
            count: 160
        },
        priceCents: 6799,
        keywords: [
            "saree",
            "kalankaari",
            "womens"
        ]
    },
    {
        id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
        link: "xcf.html",
        image: "data/sareeProducts/efHandPaintedKalamkariCottonBlendSareeWhite.webp",
        name: "Hand Painted Kalamkari Cotton Blend Saree  (White)",
        rating: {
            stars: 5,
            count: 846
        },
        priceCents: 6500,
        keywords: [
            "saree",
            "kalankaari",

        ]
    },
    {
        id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
        link: "xbg.html",
        image: "data/sareeProducts/diDigitalPrintWovenKalamkariSilkBlendSareeBlue.webp",
        name: "Digital Print, Woven Kalamkari Silk Blend Saree  (Blue)",
        rating: {
            stars: 4.5,
            count: 305
        },
        priceCents: 2899,
        keywords: [
            "saree",
            "kalankaari"
        ]
    },
    {
        id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
        link: "xc.html",
        image: "data/sareeProducts/djBlockedPrintedCheckeredKalamkariGeorgetteSareeMulticolor.webp",
        name: "Blocked Printed, Checkered Kalamkari Saree ",
        rating: {
            stars: 4,
            count: 89
        },
        priceCents: 3390,
        keywords: [
            "saree",
            "kalankaari",

        ]
    },
    {
        id: "5968897c-4d27-4872-89f6-5bcb052746d7",
        link: "xca.html",
        image: "data/sareeProducts/eaHandPaintedKalamkariPureSilkSareeBeige.webp",
        name: "Hand Painted Kalamkari Pure Silk Saree  (Beige)",
        rating: {
            stars: 4.5,
            count: 235
        },
        priceCents: 25500,
        keywords: [
            "saree",
            "kalankaari",

        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    },
    {
        id: "aad29d11-ea98-41ee-9285-b916638cac4a",
        link: "xcb.html",
        image: "data/sareeProducts/ebHandPaintedKalamkariPureSilkSareeBeige.webp",
        name: "Hand Painted Kalamkari Pure Silk Saree  (Beige)",
        rating: {
            stars: 4.5,
            count: 30
        },
        priceCents: 15000,
        keywords: [
            "accessories",
            "shades"
        ]
    },
    {
        id: "04701903-bc79-49c6-bc11-1af7e3651358",
        link: "xcc.html",
        image: "data/sareeProducts/ecHandPaintedKalamkariChiffonSareeBlue.webp",
        name: "Hand Painted Kalamkari Chiffon Saree  (Blue)",
        rating: {
            stars: 4.5,
            count: 562
        },
        priceCents: 12000,
        keywords: [
            "saree",
            "kalankaari",
            "womens",

        ]
    },

    {
        id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
        link: "xcj.html",
        image: "data/sareeProducts/fbDigitalPrinKalamkariArtSilkareeYellow.webp",
        name: "Digital Print Kalamkari Art Silk Saree  (Yellow)",
        rating: {
            stars: 4.5,
            count: 2465
        },
        priceCents: 4999,
        keywords: [
            "saree",
            "kalankaari",

        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    },
    {
        id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
        link: "xda.html",
        image: "data/sareeProducts/ga.jpg",
        name: "HALFSAREE STUDIO Red Digital Print Kalamkari Art Silk Half Sare",
        rating: {
            stars: 4,
            count: 332
        },
        priceCents: 5095,
        keywords: [
            "bathmat",
            "bathroom",
            "home"
        ]
    },
    {
        id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
        link: "xdb.html",
        image: "data/sareeProducts/gb.jpg",
        name: "Soch Womens Olive Crepe Saree With Floral Kalamkari Print And Zari Borders",
        rating: {
            stars: 4,
            count: 345
        },
        priceCents: 4998,
        keywords: [
            "shoes",
            "flats",
            "womens",
            "footwear"
        ]
    },
    {
        id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
        link: "xdc.html",
        image: "data/sareeProducts/gc.jpg",
        name: "Frasher Store Womens Art Silk Printed Kalamkari Sarees with Tassles",
        rating: {
            stars: 4.5,
            count: 9449
        },
        priceCents: 1599,
        keywords: [
            "tshirts",
            "shirts",
            "apparel",
            "mens"
        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    },
    {
        id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
        link: "xdd.html",
        image: "data/sareeProducts/gd.jpg",
        name: "Soch Womens Mustard Crepe Saree With Floral Kalamkari Print And Zari Borders",
        rating: {
            stars: 4.5,
            count: 2286
        },
        priceCents: 8300,
        keywords: [
            "garbage",
            "bins",
            "cans",
            "kitchen"
        ]
    },
    {
        id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
        link: "xde.html",
        image: "data/sareeProducts/ge.jpg",
        name: "Bengal Looms (India) Kalamkari Printed Soft Tussar Silk Saree in VanDusen Blue, Beige and Brown",
        rating: {
            stars: 4.5,
            count: 45
        },
        priceCents: 6999,
        keywords: [
            "bedroom",
            "bed sheets",
            "sheets",
            "covers",
            "home"
        ]
    },
    {
        id: "d2785924-743d-49b3-8f03-ec258e640503",
        link: "xdf.html",
        image: "data/sareeProducts/gf.jpg",
        name: "Women's Lucknowi Chikankari Linen cotton Woven Sarees For Women with Blouse sarees for Women",
        rating: {
            stars: 5,
            count: 83
        },
        priceCents: 5999,
        keywords: [
            "hats",
            "winter hats",
            "beanies",
            "tuques",
            "apparel",
            "womens"
        ]
    },
    {
        id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
        link: "xdg.html",
        image: "data/sareeProducts/gg.jpg",
        name: "Brasso Silk Sarees 4 Pic in 1 Pack Multicolour",
        rating: {
            stars: 4.5,
            count: 90
        },
        priceCents: 22290,
        keywords: [
            "pants",
            "apparel",
            "mens"
        ]
    },
    {
        id: "1c079479-8586-494f-ab53-219325432536",
        link: "xdh.html",
        image: "data/sareeProducts/gh.jpg",
        name: "Soch Womens Turquoise Blue Crepe Saree With Floral Kalamkari Print And Zari Borders",
        rating: {
            stars: 4,
            count: 229
        },
        priceCents: 4890,
        keywords: [

        ]
    },
    {
        id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
        link: "xdi.html",
        image: "data/sareeProducts/gj.jpg",
        name: "Sai Hevan Women's Womens Art Silk Printed Kalamkari Sarees with Tassles, Gold",
        rating: {
            stars: 3.5,
            count: 42
        },
        priceCents: 10499,
        keywords: [
            "sunglasses",
            "glasses",
            "accessories",
            "shades"
        ]
    }
];



let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
    <div class="product-container">
    <div class="image-hover-container">
    <a href="${product.link}">
      <div 
      class="product-image-container">
        <img class="product-image image-hover-product"
          src="${product.image}">
      </div>
      </a>
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
      ₹${(product.priceCents)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button print-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addToCart(productId);
            updateCartQuantity();
        });
    });