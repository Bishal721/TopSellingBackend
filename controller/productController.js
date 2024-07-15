const asyncHandler = require("express-async-handler");
const { getProductsData } = require("../utils/productReadData");

const getProducts = asyncHandler(async (req, res) => {
  const products = getProductsData();
  res.status(200).json(products);
});

const getTopSelligProducts = asyncHandler(async (req, res) => {
  const products = getProductsData();
  // Sort products by unitsSold in descending order
  const sortedProducts = products.sort((a, b) => b.unitsSold - a.unitsSold);

  // Get the top 5 products
  const top5Products = sortedProducts.slice(0, 5);

  res.status(200).json(top5Products);
});

module.exports = { getProducts, getTopSelligProducts };
