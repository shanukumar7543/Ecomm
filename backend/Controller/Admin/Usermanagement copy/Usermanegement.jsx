const {con} = require("../../../modal/model");

let get = async (req,res) =>{
    try{
        const data = "SELECT * FROM  user_management"
        await con.query(data, (err,result) =>{
            if(err){
                return (err.sqlMessage)
            }
            res.send(result)
        })
    }
    catch(err){
        res.send(err.sqlMessage);
    }
}

let post = async (req,res) =>{
    try{
        let data1 = [req.body]
        const query1 = "INSERT INTO  user_management set ? "
        await con.query(query1, data1, (err,result) =>{
            if(err){
                return res.send(err.sqlMessage)
            }
            res.send({status :200, "response":result})
        })
    }
    catch (err){
        res.send(err.sqlMessage);
    }
}

let patch = async (req,res) => {
    try{
    let data2 = [req.body , req.params.user_id]
    query2 = "UPDATE  user_management SET ? WHERE  user_id = ? "
    await con.query(query2, data2, (err,result)=>{
        if(err){
            return res.send(err.sqlMessage)
        }
        res.send(result)
    })
  }
  catch(err){
    res.send(err.sqlMessage)
}
}

let del = async (req,res) =>{
    try{
    let data = req.params.user_id
    let query2 = "DELETE FROM user_management WHERE  user_id = ?"
    await con.query(query2 , data, (err,result)=>{
        if(err){
            res.send(err.sqlMessage)
        }
        {res.send(result)}
    }
)}
catch(err){
    res.send(err.sqlMessage)
}}

module.exports = {get , post, patch, del}