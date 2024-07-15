const fs = require("fs");
const path = require("path");

let products;

function loadProducts() {
  try {
    const productData = fs.readFileSync(
      path.join(`${__dirname}/../data/products.json`)
    );

    products = JSON.parse(productData);
  } catch (error) {
    console.error("Error reading users data:", error.message);
    products = [];
  }
}

function getProductsData() {
  return products;
}

module.exports = {
  loadProducts,
  getProductsData,
};
