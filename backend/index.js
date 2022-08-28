const express = require('express');
const cors=require("cors");

// app.use(cors())
// const validate = require('../backend/Validation/Admin/offer/offer.Validation')
// const {getshopreg, postshopreg, patchshopreg, deleteshopreg} = require('./controller/Admin/ShopRegistration/shopRegistration.controller') 
// const {getproduct_subcatigory , postproduct_subcatigory, patchproduct_subcatigory, deleteproduct_subcatigory} = require('./controller/Admin/ProductSubCategory/productSubCategory.controller')
// const {getproduct_catigory , postproduct_catigory, patchproduct_catigory, deleteproduct_catigory} = require('./controller/Admin/ProductCategory/productCategory.controller')
// const {getoffer , postoffer, patchoffer, deleteoffer} = require('./controller/Admin/offer/offer.controller')
// const { getcart , postcart , patchcart , deletecart } = require('./controller/Customer/Addtocart/cart.customer')
// const { getwishlist , postwishlist, patchwishlist , deletewishlist } = require('./controller/Customer/Addtowishlist/wishlist.customer')
// const { getcustomer_registration , postcustomer_registration, patchcustomer_registration , deletecustomer_registration } = require('./controller/Customer/CustemerReg/customer_reg.customer')
// const { getshipping , postshipping, patchshipping , deleteshipping } = require('./controller/Shiping/shipping/shipping.customer')
// const { getreview , postreview, patchreview , deletereview } = require('./controller/Shiping/review_form/review.shipping')
// const { getpayment , postpayment, patchpayment , deletepayment } = require('./controller/Customer/make_payment/makepayment')
// const { getproductenv , postproductenv, patchproductenv , deleteproductenv } = require('./controller/Shops/product_enventry/productenventry')
// const { getproductspecific , postproductspecific, patchproductspecific , deleteproductspecific } = require('./controller/Shops/productspecification/productspecific')
// const cors = require('cors');



const app = express();
app.use(express.json());
app.use(cors());
const port = 4000;

// Admin

// offer
const {offer_Routes} = require("../backend/Router/Admin/offer/offer.router")
app.use("/offer" , offer_Routes )

//product category
const {product_Routes} = require("../backend/Router/Admin/product.category/productcategory.router")
app.use("/product" , product_Routes)


//product subcategory
const {productsub_Routes} = require("../backend/Router/Admin/product.subcategory/productsubcategory.router")
app.use("/productsub" , productsub_Routes)

// shopreg
const {shopregi_Routes} = require("../backend/Router/Admin/shop.registration/shopregistration.router")
app.use("/shopreg" ,shopregi_Routes );

// // user_management
// const {usermanagement_Routes} = require("../backend/Router/Admin/Usermangement/usermanagement.router")
// app.use("/usermanagement",usermanagement_Routes)

// customer

// addtocart
const {addtocart_Routes} = require("../backend/Router/Customer/Addtocart/addtocart.router")
app.use("/addtocart" , addtocart_Routes);

// addtowishlist
const {addtowishlist_Routes} = require("../backend/Router/Customer/Addtowishlist/addtowishlist.router")
app.use("/addtowishlist" , addtowishlist_Routes);


// coustomerreg
const {coustomerregi_Routes} = require("../backend/Router/Customer/Customer.registration/customer.reg.router")
app.use("/coustomerreg" , coustomerregi_Routes);

//make payment
const  {makepayment_Routes} = require("../backend/Router/Customer/make_payment/make_payment.router")
app.use("/makepayment" , makepayment_Routes);


//review
const{review_Router} = require("../backend/Router/Customer/review/review.router")
app.use("/review" , review_Router);


// Shipping shipping

const{shipping_Routes} = require("../backend/Router/Shipping/shipping/shipping.router")
app.use("/shipping" , shipping_Routes);


// shops

// user

const {user_Routes} =require("../backend/Router/Shops/Employee/emp.user.Router");
app.use("/user", user_Routes);


// Bank

const {bank_Routes} =require("../backend/Router/Shops/bank/bank.Router");
app.use("/bank", bank_Routes);


// shops productInventory

const {productInventory_Routes} =require("../backend/Router/Shops/product.Inventory/productinventory.router");
app.use("/productenv", productInventory_Routes);

// shops productspecification

const {productspecification_Routes} = require("../backend/Router/Shops/product.specification/productspecification.router");
app.use("/productspeci",productspecification_Routes);





















// Admin ShopRegistration
// app.get("/shop_registration" , getshopreg)
// app.post("/shop_registration/post", postshopreg)
// app.patch("/shop_registration/:reg_no", patchshopreg)
// app.delete("/shop_registration/:reg_no", deleteshopreg)

// Admin product_catigory 
// app.get("/product_catigory" ,getproduct_catigory )
// app.post("/product_catigory/post", postproduct_catigory)
// app.patch("/product_catigory/:catigory_id",patchproduct_catigory) 
// app.delete("/product_catigory/:catigory_id" ,deleteproduct_catigory)


// Admin product_subcatigory 
// app.get("/product_subcatigory" ,getproduct_subcatigory )
// app.post("/product_subcatigory/post", postproduct_subcatigory)
// app.patch("/product_subcatigory/:subcatigory_id",patchproduct_subcatigory) 
// app.delete("/product_subcatigory/:subcatigory_id" ,deleteproduct_subcatigory)

// Admin offer
// app.get("/offer" ,getoffer )
// app.post("/offer/post", validate ,postoffer )
// app.patch("/offer/:offer_id",patchoffer) 
// app.delete("/offer/:offer_id",deleteoffer)


//customer..addtocart  cart

// app.get("/cart" , getcart)
// app.post("/cart/post", postcart)
// app.patch("/cart/:cart_id", patchcart)
// app.delete("/cart/:cart_id", deletecart)


//customer..addtowishlist  wishlist
// app.get("/wishlist" , getwishlist)
// app.post("/wishlist/post", postwishlist)
// app.patch("/wishlist/:product_id", patchwishlist)
// app.delete("/wishlist/:product_id", deletewishlist)

//customer..customer_reg  
// app.get("/customer" , getcustomer_registration)
// app.post("/customer/post", postcustomer_registration)
// app.patch("/customer/:mobile", patchcustomer_registration)
// app.delete("customer/:mobile", deletecustomer_registration)

//customer..makepayment  
// app.get("/payment" , getpayment)
// app.post("/payment/post", postpayment)
// app.patch("/payment/:tranjection_id", patchpayment)
// app.delete("payment/:transaction_id", deletepayment)



//shipping  -- review-form
// app.get("/review" , getreview)
// app.post("/review/post", postreview)
// app.patch("/review/:mobile", patchreview)
// app.delete("review/:mobile", deletereview)

//shipping..shipping  
// app.get("/shipping" , getshipping)
// app.post("/shipping/post", postshipping)
// app.patch("/shipping/:mobile", patchshipping)
// app.delete("shipping/:mobile", deleteshipping)


//shops product_enventry
// app.get("/productenv" , getproductenv)
// app.post("/productenv/post", postproductenv)
// app.patch("/productenv/:product_id", patchproductenv)
// app.delete("productenv/:product_id", deleteproductenv)




//shops product_specification
// app.get("/productspecific" , getproductspecific)
// app.post("/productspecific/post", postproductspecific)
// app.patch("/productspecific/:productsfecific_id", patchproductspecific)
// app.delete("productspecific/:productsfecific_id", deleteproductspecific)

// total 48 api

app.listen(port, (err) =>{
    if(err){
        console.log("error")
    }else{
        console.log("server started on port no http://localhost:4000")
    }
})