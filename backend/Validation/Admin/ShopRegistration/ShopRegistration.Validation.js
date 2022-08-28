const joi = require('joi');

const schema = joi.object({
    reg_no: joi.number().integer().min(1).max(255).required(),
    shop_id: joi.number().integer().min(1).max(255).required(),
    shop_name: joi.string().text().min(1).max(100).required(),
    address: joi.string().text().min(1).max(100).required(),
    city: joi.string().text().min(1).max(100).required(),
    state: joi.string().text().min(1).max(100).required(),
    pin: joi.number().integer().min(100000).max(999999).required(),
    contact: joi.number().integer().min(1000000000).max(9999999999).required(),
    type: joi.string().text().min(1).max(100).required(),
    owner: joi.string().text().min(1).max(100).required(),
    url: joi.string().text().min(1).max(100).required(),
    gst: joi.number().integer().min(1).max(100).required(),
    status: joi.string().text().min(1).max(100).required(),
    discripation: joi.string().text().min(1).max(100).required(),
    password: joi.number().string().min(1).max(100).required(),
    terms_condition: joi.string().text().min(1).max(100).required()
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