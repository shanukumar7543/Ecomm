const express = require('express');

const bank_Routes = express.Router();

const{ get , post, patch , destory} =  require ("../../../controller/Shops/Bank/bank.controller")


bank_Routes.get("/bank" , get);
bank_Routes.post("/bank" , post);
bank_Routes.patch("/bank/:account_no" , patch);
bank_Routes.delete("/bank/:account_no" , destory);


module.exports = {bank_Routes}

