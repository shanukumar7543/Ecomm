const express = require("express");

const shipping_Routes = express.Router();

const { get , post, patch , del }= require("../../../controller/Shiping/shipping/shipping.controller")

shipping_Routes.get("/shipping", get);
shipping_Routes.post("/shipping", post);
shipping_Routes.patch("/shipping", patch);
shipping_Routes.delete("/shipping", del);

module.exports ={shipping_Routes}
