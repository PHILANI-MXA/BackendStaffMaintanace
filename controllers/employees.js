const express = require('express');
router = express.Router();

const db = require('../db');

const getAllEmployees = async ()=>{

}

router.get('/', async (req, res) => {
    const rows = await db.query("SELECT * FROM PersonT")
        .then(data => res.send(data))
        .catch(err => console.log (err))
        console.log(rows)
})

module.exports = router;