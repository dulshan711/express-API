const express = require("express");
//const Product = require("./models/products.model.js");
const router = express.Router();
const {
  getproducts,
  getproduct,
  createproduct,
  updateproduct,
  deleteproduct,
} = require("../controllers/product.controller");

router.get("/", getproducts);
router.post("/", createproduct);

router.get("/:id", getproduct);

//update Product
router.put("/:id", updateproduct);

//Delete product
router.delete("/:id", deleteproduct);

module.exports = router;
