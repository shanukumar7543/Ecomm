const { con } = require('../../../modal/model')

let get = async (req, res) => {
  try {
    const query1 = "SELECT *from payment"
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
    const query1 = 'INSERT into payment SET ?'
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
    let data2 = [req.body, req.params.tranjection_id]
    query2 = 'UPDATE  payment SET ? WHERE tranjection_id = ? '
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

let del = async (req, res) => {
  try {
    let data = req.params.tranjection_id
    let query2 = "DELETE from payment WHERE tranjection_id = ?"
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

module.exports = { get, post, patch , del }
