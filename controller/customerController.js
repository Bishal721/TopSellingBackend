const asyncHandler = require("express-async-handler");
const { getCustomers } = require("../utils/customersReadData");

const getTopCustomers = asyncHandler(async (req, res) => {
  const customers = getCustomers();

  // Sort customers by the length of their purchases array in descending order
  const sortedCustomers = customers.sort(
    (a, b) => b.purchases.length - a.purchases.length
  );

  // Get the top customers (you can specify how many you want, here we take top 5)
  const topCustomers = sortedCustomers.slice(0, 5);

  res.status(200).json(topCustomers);
});

module.exports = { getTopCustomers };
