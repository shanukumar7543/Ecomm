const express = require("express");


const usermanagement_Routes = express.Router();

const {get , post, patch, del} = require("../../../Controller/Admin/Usermanagement/Usermanegement");


usermanagement_Routes.get("/userman", get);
usermanagement_Routes.post("/userman", post);
usermanagement_Routes.patch("/userman/:user_id", patch);
usermanagement_Routes.delete("/userman/:user_id", del);

module.exports = {usermanagement_Routes}