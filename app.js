const express = require("express");
const app = express();
require("dotenv").config();
const cors = require('cors');
const connectionDB = require("./src/db/connection");
const user_router = require("./src/routers/user");
const product_router = require("./src/routers/products");


app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;

connectionDB();

app.use("/react-crud/users", user_router);
app.use("/react-crud/products", product_router);


app.listen(PORT, async () => {
  try {
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});