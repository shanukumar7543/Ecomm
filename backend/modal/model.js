const mysql = require('mysql');

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ecommerce1"
})
 
con.connect((err) =>{
    if(err){
        console.log(err.sqlMessage)
    }else{
        console.log("Server is Started")
    }
})

module.exports = {con}
