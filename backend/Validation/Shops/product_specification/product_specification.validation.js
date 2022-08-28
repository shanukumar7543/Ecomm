const joi = require('joi');

const schema = joi.object({
    productsfecific_id: joi.number().integer().min(1).max(255).required(),
    product_id: joi.number().integer().min(1).max(255).required(),
    dimension: joi.string().text().min(1).max(255).required(),
    size:  joi.string().text().min(1).max(255).required(),
    color: joi.string().text().min(1).max(255).required(),
    price: joi.number().integer().min(1).max(255).required(),
    mfd: joi.date(),
    exp_date: joi.date(),
    height: joi.string().text().min(1).max(255).required(),
    photo: joi.string().text().min(1).max(255).required()
})
const product_specification = async (req, res, next) =>{
    const value = await schema.validate(req.body)
    if(value.error){
            res.send({Error: value.error.details[0]})
    }else{
        next()
    }
}
module.exports = {product_specification}