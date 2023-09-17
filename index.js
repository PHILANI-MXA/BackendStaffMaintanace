const express = require('express');
const app = express()

const db = require('./db')
employeeRoutes = require('./controllers/employees')

servicesRoutes = require('./services/services')

// middleware
app.use('/employees', employeeRoutes);
app.use('/services', servicesRoutes);

db.query("SELECT 1")
.then (() =>{ console.log('db connection succeeded')
app.listen(3000, 
    () => console.log('server started running at 3000'))
})
.catch(err => console.log('database connection failed. \n' + err))

