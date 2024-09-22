const express = require("express");
const router = express.Router();
const {
  createProduct,
 updateProduct,
 getAllProductsByUserId,
 deleteProduct,
 getProductsById
} = require("../controllers/products");

router.route("/createProducr").post(createProduct);
router.route("/updateProduct/:_id").put(updateProduct);
router.route("/getAllProductByUserId/:userId").get(getAllProductsByUserId);
router.route("/productDetails/:_id").get(getProductsById);
router.route("/deleteProduct/:_id").get(deleteProduct);


module.exports = router;
