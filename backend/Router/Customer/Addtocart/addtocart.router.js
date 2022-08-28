const express = require("express");

const addtocart_Routes = express.Router();

const { get , post , patch , del} = require("../../../Controller/Admin/ShopRegistration/shopRegistration.controller");


addtocart_Routes.get("/addtocart", get);
addtocart_Routes.post("/addtocart", post);
addtocart_Routes.patch("/addtocart", patch);
addtocart_Routes.delete("/addtocart", del);

module.exports = {addtocart_Routes}