const fs = require("fs");
const path = require("path");

let customers;

function loadCustomers() {
  try {
    const customerData = fs.readFileSync(
      path.join(`${__dirname}/../data/customers.json`)
    );

    customers = JSON.parse(customerData);
  } catch (error) {
    console.error("Error reading users data:", error.message);
    customers = [];
  }
}

function getCustomers() {
  return customers;
}

module.exports = {
  loadCustomers,
  getCustomers,
};
