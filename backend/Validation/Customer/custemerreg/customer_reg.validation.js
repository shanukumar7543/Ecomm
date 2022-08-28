const joi = require('joi');

const schema = joi.object({
    mobile: joi.number().integer().min(1000000000).max(9999999999).required(),
    email: joi.string().text().min(1).max(255).required(),
    name: joi.string().text().min(1).max(255).required(),
    gender: joi.string().text().min(1).max(255).required(),
    address: joi.string().text().min(1).max(255).required(),
    city: joi.string().text().min(1).max(255).required(),
    state: joi.string().text().min(1).max(255).required(),
    pin: joi.number().integer().min(1).max(255).required(),
    password: joi.string().text().min(1).max(255).required(),
      
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