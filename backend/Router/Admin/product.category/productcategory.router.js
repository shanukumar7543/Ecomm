const express = require("express");

const product_Routes = express.Router();

const {get, post, patch, del} = require("../../../controller/Admin/ProductCategory/ProductCategory.controller")


product_Routes.get("/product", get);
product_Routes.post("/product", post);
product_Routes.patch("/product/:catigory_id", patch);
product_Routes.delete("/product/:catigory_id", del);

module.exports = {product_Routes}