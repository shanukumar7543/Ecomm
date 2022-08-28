const { con } = require('../../../modal/model')

let get = async (req, res) => {
  try {
    const query1 = "SELECT *from bank"
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
    const query1 = 'INSERT into bank SET ?'
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
    let data2 = [req.body, req.params.account_no]
    query2 = 'UPDATE  bank SET ? WHERE account_no = ? '
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
    let data = req.params.account_no
    let query2 = "DELETE from bank WHERE account_no = ?"
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
