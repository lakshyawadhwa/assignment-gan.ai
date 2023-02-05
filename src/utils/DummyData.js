import { images } from "./Images";

export const productsArray = [
  {
    name: "Chocolate chip cookies",
    image: images.chocolate_chip_cookies,
    description: "3 pieces of delicious chocolate chip cookies",
    price: 120,
    quantity: 0,
    inStock: true,
    category: "desserts",
    featuredProduct: true,
  },
  {
    name: "Brownies",
    image: images.brownie,
    description: "2 pieces of delicious brownies",
    price: 200,
    quantity: 0,
    inStock: true,
    category: "desserts",
    featuredProduct: true,
  },
  {
    name: "Eclair",
    image: images.eclair,
    description: "3 pieces of delicious chocolate chip cookies",
    price: 150,
    quantity: 0,
    inStock: true,
    category: "desserts",
    featuredProduct: true,
  },
  {
    name: "Sourdough Bread",
    image: images.sourdough_bread,
    description: "Freshly baked sourdough bread",
    price: 200,
    quantity: 0,
    inStock: true,
    category: "breads",
    featuredProduct: false,
  },
  {
    name: "Chocolate Cake",
    image: images.triple_chocolate_cake,
    description:
      "500gm Triple chocolate cake with dark, milk and white chocolate",
    price: 1000,
    quantity: 0,
    inStock: true,
    category: "cake",
    featuredProduct: true,
  },
  {
    name: "Rainbow Cake",
    image: images.rainbow_cake,
    description: "500gm Rainbow cake with multiple flavours",
    price: 1000,
    quantity: 0,
    inStock: true,
    category: "cake",
    featuredProduct: false,
  },
];

export const categories = [
  { text: "Cake", category: "cake" },
  { text: "Breads", category: "breads" },
  { text: "Desserts", category: "desserts" },
];
