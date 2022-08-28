const express = require ("express")

const makepayment_Routes = express.Router();

const { get, post, patch , del } = require("../../../controller/Customer/make_payment/makepayment.controller")


makepayment_Routes.get("/makepayment", get);
makepayment_Routes.post("/makepayment", post);
makepayment_Routes.patch("/makepayment", patch);
makepayment_Routes.delete("/makepayment", del);


module.exports = {makepayment_Routes}