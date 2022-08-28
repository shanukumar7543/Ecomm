const express = require("express");

const offer_Routes = express.Router();

const {get, post, patch, del} = require("../../../controller/Admin/offer/offer.controller")


offer_Routes.get("/offer", get);
offer_Routes.post("/offer", post);
offer_Routes.patch("/offer/:offer_id", patch);
offer_Routes.delete("/offer/:offer_id", del);

module.exports = {offer_Routes}