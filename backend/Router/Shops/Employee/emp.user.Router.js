const express = require('express');

const user_Routes = express.Router();

const{ get , post, patch , destory} =  require ("../../../controller/Shops/Employee/emp.user.controller")


user_Routes.get("/user" , get);
user_Routes.post("/user" , post);
user_Routes.patch("/user/:user_id" , patch);
user_Routes.delete("/user/:user_id" , destory);


module.exports = {user_Routes}
