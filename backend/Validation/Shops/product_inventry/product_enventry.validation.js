const joi = require('joi');

const schema = joi.object({
    product_id: joi.number().integer().min(1).max(255).required(),
    catigory_id: joi.number().integer().min(1).max(255).required(),
    subcatigory_id: joi.number().integer().min(1).max(255).required(),
    product_name: joi.string().text().min(1).max(255).required(),
    price: joi.number().integer().min(1).max(255).required(),
    mfd: joi.date(),
    exp: joi.date(),
    shop_id: joi.number().integer().min(1).max(255).required(),
    qty: joi.string().text().min(1).max(255).required(),
    descripation: joi.string().text().min(1).max(255).required()
     
})
const product_enventry = async (req, res, next) =>{
    const value = await schema.validate(req.body)
    if(value.error){
            res.send({Error: value.error.details[0]})
    }else{
        next()
    }
}
module.exports = {product_enventry}