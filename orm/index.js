const mysql = require('mysql')

const opts = process.env.JAWSDB_URL || {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'project3'
}

const connection = mysql.createConnection(opts)

const orm = {
  tableAll: table => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM ??', [table], (err, res) => {
        if (err) {
          return reject(new Error(err))
        }
        return resolve(res)
      })
    })
  },

  tableWhere: (table, column, value) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM ?? WHERE ?? = (?)',
        [table, column, value],
        (err, res) => {
          if (err) {
            return reject(new Error(err))
          }
          return resolve(res)
        }
      )
    })
  },

  insertOne: (table, dataObj) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO ?? SET ?', [table, dataObj], (err, res) => {
        if (err) {
          return reject(new Error(err))
        }
        return resolve(res.affectedRows)
      })
    })
  },

  updateOne: (table, column, value, whereCol, whereVal) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE ?? SET ?? = ? WHERE ?? = ?',
        [table, column, value, whereCol, whereVal],
        (err, res) => {
          if (err) {
            return reject(new Error(err))
          }
          return resolve(res.affectedRows)
        }
      )
    })
  },

  userJoin: (displayCols, colVal) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT ?? FROM users U
      JOIN taskList T ON T.userId = U.userId
      JOIN playerShip P ON P.userId = U.userId
      WHERE U.userId = ?`
      connection.query(query, [displayCols, colVal], (err, res) => {
        if (err) {
          return reject(new Error(err))
        }
        return resolve(res)
      })
    })
  }
}

module.exports = orm
