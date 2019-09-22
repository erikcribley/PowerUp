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
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
}

module.exports = orm
