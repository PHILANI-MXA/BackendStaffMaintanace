const express = require('express');
const app = express()
require('express-async-errors');

const db = require('./db');
const bodyParser = require('body-parser');
employeeRoutes = require('./controllers/employees')
detailsRoutes = require('./controllers/employees')

servicesRoutes = require('./services/services')

// middleware
app.use(bodyParser.json())
app.use('/employees', employeeRoutes);
app.use('/details', detailsRoutes);

app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).send('Something went wrong')
})

db.query("SELECT 1")
.then (() =>{ console.log('db connection succeeded')
app.listen(3000,
    () => console.log('server started running at 3000'))
})
.catch(err => console.log('database connection failed. \n' + err))

