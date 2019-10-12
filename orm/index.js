const mysql = require('mysql')

const opts = process.env.JAWSDB_URL || {
  host: 'localhost:',
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

  tableWhere: (table, whereCol, whereVal) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM ?? WHERE ?? = (?)',
        [table, whereCol, whereVal],
        (err, res) => {
          if (err) {
            return reject(new Error(err))
          }
          return resolve(res)
        }
      )
    })
  },

  tableColumnWhere: (column, table, whereCol, whereVal) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT ?? FROM ?? WHERE ?? = (?)',
        [column, table, whereCol, whereVal],
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
        return resolve(res.insertId)
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

  deleteOne: (table, whereCol, whereVal) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM ?? WHERE ?? = ?',
        [table, whereCol, whereVal],
        (err, res) => {
          if (err) {
            return reject(new Error(err))
          }
          return resolve(res.affectedRows)
        }
      )
    })
  },

  taskPages: userId => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT taskId, task FROM taskList
         WHERE userId = ? 
         ORDER BY taskId DESC`,
        [userId],
        (err, res) => {
          if (err) {
            return reject(new Error(err))
          }
          return resolve(res)
        }
      )
    })
  },

  userStats: userId => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM playerShip
      WHERE userId = ?`,
        [userId],
        (err, res) => {
          if (err) {
            return reject(new Error(err))
          }
          return resolve(res)
        }
      )
    })
  },

  // can be used to get any column out of users, playerShip, or taskList based on userId
  // just put the columns wanted into an array [U.userEmail, S.attack, T.task, etc]
  // can hard code these in if we want the same columns always or leave it to be selected at time of use
  userJoin: (displayCols, colVal) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT ?? FROM users U
      JOIN playerShip S ON S.userId = U.userId
      JOIN taskList T ON T.userId = U.userId
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
