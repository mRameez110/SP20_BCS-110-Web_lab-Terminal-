const ProductModel = require("./models/ProductModel");

const createProduct = async (title, price, buyer) => {
  
  console.log("Create Product");
  let Product = new ProductModel();
  Product.title = title;
  Product.price = price;
  Product.buyer = buyer;
  await Product.save();
  return Product;
};


const getAllProducts = async () => {
  let Product = await ProductModel.find();
  return Product;
};

module.exports.createProduct = createProduct;
module.exports.getAllProducts = getAllProducts;
