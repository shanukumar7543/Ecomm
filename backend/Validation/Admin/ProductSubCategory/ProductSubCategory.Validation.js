const joi = require('joi');

const schema = joi.object({
    catigory_id: joi.number().integer().min(1).max(255).required(),
    subcatigory_id: joi.number().integer().min(1).max(255).required(),
    name: joi.string().text().min(1).max(100).required()
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