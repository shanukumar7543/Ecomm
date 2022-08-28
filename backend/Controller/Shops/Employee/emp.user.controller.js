const { con } = require('../../../modal/model')

let get = async (req, res) => {
  try {
    const query1 = "SELECT *from user"
    await con.query(query1, (err, result) => {
      if (err) {
        return res.send(err.sqlMessage)
      }
      res.send(result)
    })
  } catch(err)  {
    res.send(err.sqlMessage)
  }
}

let post = async (req, res) => {
  try {
    let data1 = [req.body]
    const query1 = 'INSERT into user SET ?'
    await con.query(query1, data1, (err, result) => {
      if (err) {
        return res.send(err.sqlMessage)
      }
      res.send({ status: 200, response: result })
    })
  } catch(err)  {
    res.send(err.sqlMessage)
  }
}

let patch = async (req, res) => {
  try {
    let data2 = [req.body, req.params.user_id]
    query2 = 'UPDATE  user SET ? WHERE user_id = ? '
    await con.query(query2, data2, (err, result) => {
      if (err) {
        return res.send(err.sqlMessage)
      }
      res.send(result)
    })
  } catch(err)  {
    res.send(err.sqlMessage)
  }
}

let destory = async (req, res) => {
  try {
    let data = req.params.user_id
    let query2 = "DELETE from user WHERE user_id = ?"
    await con.query(query2, data, (err, result) => {
      if (err) {
       return res.send(err.sqlMessage)
      }
      {
        res.send(result)
      }
    })
  } catch(err)  {
    res.send(err.sqlMessage)
  }
}

module.exports = { get, post, patch, destory}
