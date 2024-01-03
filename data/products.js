export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    link: "xa.html",
    image: "data/sareeProducts/aWovenKalamkariCottonLinenSareeRedGold.webp",
    name: "Woven Kalamkari Cotton Linen Saree  (Red, Gold)",
    rating: {
      stars: 4.5,
      count: 200
    },
    priceCents: 4799,
    keywords: [
      "saree",
      "kalankaari",
      "kalankaari"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    link: "xb.html",
    image: "data/sareeProducts/bWovenKalamkariCottonBlendSareePink.webp",
    name: "Woven Kalamkari Cotton Blend Saree  (Pink)",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 3299,
    keywords: [
      "saree",
      "kalankaari"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    link: "xba.html",
    image: "data/sareeProducts/cWovenKalamkariSilkBlendSareeCream.webp",
    name: "Woven Kalamkari Cotton Blend Saree  (Pink)",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 5999,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    link: "xac.html",
    image: "data/sareeProducts/dDigitalPrintWovenKalamkariJacquardTissueSareeWhite.webp",
    name: "Digital Print, Woven Kalamkari Jacquard, Tissue Saree  (White)",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 5999,
    keywords: [
      "kalankaari",
      "saree",

    ]
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    link: "xbc.html",
    image: "data/sareeProducts/deDigitalPrintWovenKalamkariJacquardTissueSareeMustard.webp",
    name: "Digital Print, Woven Kalamkari Jacquard, Tissue Saree  (Mustard)",
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 4999,
    keywords: [
      "plates",
      "kitchen",
      "dining"
    ]
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    link: "xbd.html",
    image: "data/sareeProducts/dfWovenKalamkariSilkBlendSareeDark Blue.webp",
    name: "Woven Kalamkari Silk Blend Saree  (Dark Blue)",
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      "saree",
      "woolean"
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    link: "xbe.html",
    image: "data/sareeProducts/dgEmbroideredKalamkariSilkBlendSareeDarkBlue.webp",
    name: "Embroidered Kalamkari Silk Blend Saree  (Dark Blue)",
    rating: {
      stars: 4.5,
      count: 317
    },
    priceCents: 5999,
    keywords: [
      "saree",
      "kalankaari",
    ]
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    link: "xbf.html",
    image: "data/sareeProducts/dhEmbroideredKalamkariSilkBlendSareePink.webp",
    name: "Embroidered Kalamkari Silk Blend Saree  (Pink)",
    rating: {
      stars: 4.5,
      count: 144
    },
    priceCents: 3599,
    keywords: [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels"
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
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    link: "xcg.html",
    image: "data/sareeProducts/egDigitalPrintKalamkariArtilksareePurple.webp",
    name: "Digital Print Kalamkari Art Silk Saree  (Purple)",
    rating: {
      stars: 4,
      count: 99
    },
    priceCents: 4999,
    keywords: [
      "saree",
      "women",

    ]
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    link: "xch.html",
    image: "data/sareeProducts/ehDigitalPrintKalamkariArtilkSareePink.webp",
    name: "Digital Print Kalamkari Art Silk Saree  (Pink)",
    rating: {
      stars: 4,
      count: 215
    },
    priceCents: 6999,
    keywords: [
      "saree",
      "kalankaaro",

    ]
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    link: "xci.html",
    image: "data/sareeProducts/faDigitalPrintKalamkariArtSilkSareePink.webp",
    name: "Digital Print Kalamkari Art Silk Saree  (Pink)",
    rating: {
      stars: 4.5,
      count: 52
    },
    priceCents: 5999,
    keywords: [
      "jewelry",
      "saree",
      "womens"
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
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    link: "xea.html",
    image: "data/sareeProducts/ha.jpg",
    name: "Bengal Looms (India) Kalamkari Printed Soft Tussar Silk Saree",
    rating: {
      stars: 4.5,
      count: 511
    },
    priceCents: 6895,
    keywords: [
      "cooking set",
      "kitchen"
    ]
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    link: "xeb.html",
    image: "data/sareeProducts/hb.jpg",
    name: "Site Dept art silk kalamkari and bhagalpuri style saree with blouse Piece, Yellow",
    rating: {
      stars: 4.5,
      count: 130
    },
    priceCents: 7649,
    keywords: [
      "bathroom",
      "washroom",
      "mirrors",
      "home"
    ]
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    link: "xec.html",
    image: "data/sareeProducts/hc.jpg",
    name: "IGHUB FASHION Indian Women's Kalamkari Silk Saree with Blouse Piece",
    rating: {
      stars: 4.5,
      count: 248
    },
    priceCents: 2400,
    keywords: [
      "pants",
      "sweatpants",
      "jogging",
      "apparel",
      "womens"
    ]
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    link: "xed.html",
    image: "data/sareeProducts/hd.jpg",
    name: "NAYAB STORES Women's Kalamkari Ghicha Silk Saree",
    rating: {
      stars: 4.5,
      count: 117
    },
    priceCents: 6990,
    keywords: [
      "accessories",
      "womens"
    ]
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    link: "xee.html",
    image: "data/sareeProducts/he.jpg",
    name: "Exotic India Almond-Cream Kalamkari Saree from Telangana with Printed Fol - Gra",
    rating: {
      stars: 4,
      count: 126
    },
    priceCents: 2899,
    keywords: [
      "boxes",
      "food containers",
      "kitchen"
    ]
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    link: "xef.html",
    image: "data/sareeProducts/hf.jpg",
    name: "Exotic India Tri-Coloured Hand-Painted Kalamkari Chiffon Sari from Telangana - Chiffon",
    rating: {
      stars: 4.5,
      count: 1211
    },
    priceCents: 1799,
    keywords: [
      "coffeemakers",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    link: "xfa.html",
    image: "data/sareeProducts/ia.jpg",
    name: "Sree Lakshmi KalamkariWorks Kalamkari Women's Silk Saree (Beige and Red)",
    rating: {
      stars: 4.5,
      count: 363
    },
    priceCents: 9999,
    keywords: [
      "bedroom",
      "home"
    ]
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    link: "xfb.html",
    image: "data/sareeProducts/ib.jpg",
    name: "Maxis Women's Kalamkari Mysore Art Silk Sarees With Blouse Piece",
    rating: {
      stars: 4.5,
      count: 93
    },
    priceCents: 2111,
    keywords: [
      "bathroom",
      "home",
      "towels"
    ]
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    link: "xfc.html",
    image: "data/sareeProducts/ic.jpg",
    name: "Yashika women's art silk kalamkari and bhagalpuri style saree",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "womens"
    ]
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    link: "xfd.html",
    image: "data/sareeProducts/id.jpg",
    name: "Yashika women's art silk kalamkari bhagalpuri and kashmiri style soft saree",
    rating: {
      stars: 4,
      count: 3
    },
    priceCents: 10747,
    keywords: [
      "food blenders",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    link: "xfe.html",
    image: "data/sareeProducts/ie.jpg",
    name: "Tarshika Women's Kalamkari Printed Saree With Blouse Piece(KATHAK)",
    rating: {
      stars: 5,
      count: 679
    },
    priceCents: 3899,
    keywords: [
      "mixing bowls",
      "baking",
      "cookware",
      "kitchen"
    ]
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    link: "xff.html",
    image: "data/sareeProducts/if.jpg",
    name: "Silk Zone Women's Kalamkari Digital Printed Saree(SZ-INDIGO)",
    rating: {
      stars: 4.5,
      count: 1045
    },
    priceCents: 5799,
    keywords: [
      "kitchen",
      "kitchen towels",
      "tissues"
    ]
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    link: "xfg.html",
    image: "data/sareeProducts/ig.jpg",
    name: "trendsvilla COCONUT MUSTARD KALAMKARI SAREES WITH ATTACHED BLOUSE PIECE",
    rating: {
      stars: 4.5,
      count: 3157
    },
    priceCents: 2400,
    keywords: [
      "sweaters",
      "hoodies",
      "apparel",
      "mens"
    ]
  }
];