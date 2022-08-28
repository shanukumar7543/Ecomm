const joi = require('joi');

const schema = joi.object({
    mobile: joi.number().integer().min(1000000000).max(9999999999).required(),
    review_point: joi.string().text().min(1).max(255).required(),
    massage: joi.string().text().min(1).max(255).require(),
    datetime: joi.datetime().required()
    
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