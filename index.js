const express = require("express");
const mongoose = require("mongoose");
const Product = require("./model/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose
  .connect(
    "mongodb+srv://abhaymishra94814:RsVk%40264183@crud-app.3umhsjf.mongodb.net/my-crud-app?retryWrites=true&w=majority&appName=crud-app"
  )
  .then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
