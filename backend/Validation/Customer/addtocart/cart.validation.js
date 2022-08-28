const joi = require('joi');

const schema = joi.object({
    cart_id: joi.number().integer().min(1).max(255).required(),
    product_id: joi.number().integer().min(1).max(255).required(),
    mobile: joi.number().integer().min(1000000000).max(9999999999).required(),
    qty: joi.number().integer().min(1).max(255).required(),
    added_on: joi.string().text().min(1).max(255).required(),
    payment_status: joi.number().integer().min(1).max(255).required(),
   
})
const validate = async (req, res, next) =>{
    const value = await schema.validate(req.body)
    if(value.error){
            res.send({Error: value.error.details[0]})
    }else{
        next()
    }
}
module.exports = {validate}