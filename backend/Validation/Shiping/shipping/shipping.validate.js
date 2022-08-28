const joi = require('joi');

const schema = joi.object({
    invoice_id: joi.number().integer().min(1).max(255).required(),
    shipping_id: joi.number().integer().min(1).max(255).required(),
    mobile: joi.number().integer().min(1000000000).max(9999999999).required(),
    ship_date: joi.date(),
    delivery: joi.date(),
    status: joi.string().text().min(1).max(255).required(),
    dilivered: joi.datetime().required()
    
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