const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const productschema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter the product name"],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    Image: {
      type: Number,
      required: false,
    },
  },
  {
    Timestamp: true,
  }
);

const product = mongoose.model("product", productschema);

module.exports = product;
