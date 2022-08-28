const express = require("express");

const productInventory_Routes = express.Router();

const {get, post, patch, destory} = require("../../../controller/Shops/product_inventory/productenventry.controller");


productInventory_Routes.get("/productenv", get);
productInventory_Routes.post("/productenv", post);
productInventory_Routes.patch("/productenv/:product_id", patch);
productInventory_Routes.delete("/productenv/:product_id", destory);

module.exports = {productInventory_Routes}