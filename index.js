const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/products.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API server Updated");
});

mongoose
  .connect(
    "mongodb+srv://agpeagle:CArlp7FLdx8EyQMY@mernapi.hwgwz4z.mongodb.net/?retryWrites=true&w=majority&appName=mernapi"
  )
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
