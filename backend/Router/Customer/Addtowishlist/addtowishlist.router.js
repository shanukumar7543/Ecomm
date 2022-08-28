const express = require("express");

const addtowishlist_Routes = express.Router();

const {get, post, patch, del} = require("../../../Controller/Customer/Addtowishlist/wishlist.controller");


addtowishlist_Routes.get("/addtowishlist", get);
addtowishlist_Routes.post("/addtowishlist", post);
addtowishlist_Routes.patch("/addtowishlist", patch);
addtowishlist_Routes.delete("/addtowishlist", del);

module.exports = {addtowishlist_Routes}