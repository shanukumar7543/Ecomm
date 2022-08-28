const joi = require('joi');

const schema = joi.object({
   offer_id: joi.number().integer().min(1).max(255).required(),
   coupon_code: joi.number().integer().min(1).max(255).required(),
   from_date: joi.date().required(),
   to_date: joi.date().required(),
   flat_discount: joi.number().integer().min(1).max(100).required(),
   valid_in: joi.number().integer().min(1).max(100).required(),
   bank_offer: joi.number().integer().min().max().required(),
   
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