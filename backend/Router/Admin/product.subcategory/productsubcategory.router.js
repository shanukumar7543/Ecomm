const express = require("express");

const productsub_Routes = express.Router();

const {get, post, patch, del} = require("../../../controller/Admin/ProductSubCategory/productSubCategory.controller")


productsub_Routes.get("/productsub", get);
productsub_Routes.post("/productsub", post);
productsub_Routes.patch("/productsub/:catigory_id", patch);
productsub_Routes.delete("/productsub/:catigory_id", del);

module.exports = {productsub_Routes}