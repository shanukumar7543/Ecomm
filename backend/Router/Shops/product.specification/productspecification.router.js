const express = require('express');

const productspecification_Routes = express.Router();

const{ get , post, patch , del} =  require ("../../../controller/Shops/productspecification/productspecific.controller")


productspecification_Routes.get("/productspeci" , get);
productspecification_Routes.post("/productspeci" , post);
productspecification_Routes.patch("/productspeci/:productsfecific_id" , patch);
productspecification_Routes.delete("/productspeci/:productsfecific_id" , del);


module.exports = {productspecification_Routes}

