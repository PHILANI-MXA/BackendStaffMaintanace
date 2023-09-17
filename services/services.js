var express =  require('express');
const db = require('../db');

router = express.Router();

router.get('/', async (req, res) => {
    const rows = await db.query("SELECT * FROM EmployeesT")
        .then(data => res.send(data))
        .catch(err => console.log (err))
        console.log(rows)
})

module.exports = router;