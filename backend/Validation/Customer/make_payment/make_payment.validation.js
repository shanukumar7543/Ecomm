const joi = require('joi');

const schema = joi.object({
    cart_id: joi.number().integer().min(1).max(255).required(),
    tranjection_id: joi.number().integer().min(1).max(255).required(),
    datetime: joi.date().required(),
    amount: joi.number().integer().min(1).max(255).required(),
    tax: joi.number().integer().min(1).max(255).required(),
    payment_mode: joi.string().text().min(1).max(255).required(),
    status: joi.string().text().min(1).max(255).required(),
    invoice_id: joi.number().integer().min(1).max(255).required()
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