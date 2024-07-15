const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = 5000 || process.env.PORT;
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const { loadProducts } = require("./utils/productReadData");
const { loadCustomers } = require("./utils/customersReadData");
const errorhandler = require("./middleware/errorhandler");
const productRoute = require("./routes/productRoute");
const customerRoute = require("./routes/customerRoute");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));

loadProducts();
loadCustomers();

app.use("/api/v1/products", productRoute);
app.use("/api/v1/customers", customerRoute);
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Home page",
  });
});

app.use(errorhandler);

const StartServer = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server Running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

StartServer();
