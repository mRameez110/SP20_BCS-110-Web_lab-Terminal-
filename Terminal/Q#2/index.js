const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {
  createProduct,
  getAllProducts,
} = require("./productsOperations");

app.use(express.json());


mongoose
  .connect("mongodb://127.0.0.1/mernstack", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(async () => {
    console.log("Connection to MongoDB created");

    //   Perform 'CRUD Operations'      

    let Product = await  createProduct("nokia", 100, "Subhan Khan");
    console.log('whats Happenig',Product);

    let allProducts = await getAllProducts();
    console.log(allProducts);
    
  })
  .catch((err) => {
    console.log("Error Connecting");
    console.log(err);
  });
app.listen(3000);
