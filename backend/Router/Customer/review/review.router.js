const express = require("express");

const review_Router = express.Router();

const  { get, post, patch , del } = require("../../../controller/Customer/review_form/review.controller")

review_Router.get("/review" , get)
review_Router.post("/review" , post)
review_Router.patch("/review" , patch)
review_Router.delete("/review" , del)

module.exports = {review_Router} 