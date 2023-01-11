const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: String,
  buyer: String,
  price: Number,
  
});

const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;
