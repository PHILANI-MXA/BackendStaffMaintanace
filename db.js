const mysql = require('mysql2/promise');

const mysqlPool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"October@1978",
    database:"StaffMaintainance",
})

module.exports = mysqlPool;