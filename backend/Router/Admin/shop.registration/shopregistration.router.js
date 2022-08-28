const express = require("express");


const shopregi_Routes = express.Router();

const {get , post, patch, del} = require("../../../controller/Admin/ShopRegistration/shopRegistration.controller");


shopregi_Routes.get("/shopreg", get);
shopregi_Routes.post("/shopreg", post);
shopregi_Routes.patch("/shopreg/:reg_no", patch);
shopregi_Routes.delete("/shopreg/:reg_no", del);

module.exports = {shopregi_Routes}