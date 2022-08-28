const express = require("express");

const coustomerregi_Routes = express.Router();

const {get, post, patch, del} = require("../../../controller/Customer/CustomerReg/customer_reg.controller");


coustomerregi_Routes.get("/coustomerreg", get);
coustomerregi_Routes.post("/coustomerreg", post);
coustomerregi_Routes.patch("/coustomerreg", patch);
coustomerregi_Routes.delete("/coustomerreg", del);

module.exports = {coustomerregi_Routes}