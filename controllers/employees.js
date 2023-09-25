const express = require('express');
router = express.Router();

const service = require('../services/services')


router.get('/', async (req, res) => {
   const employees = await service.getAllEmployees()
        res.send(employees)
})

router.get('/:Person_id', async (req, res) => {
    const employee = await service.getPersonID(req.params.Person_id)
    if(employee.length == 0)
    res.status(404).json('no employee with id : ' + req.params.Person_id)
else
    res.send(employee)
 })

 router.delete('/:Person_id', async (req, res) => {
    try {
      const affectedRows = await service.deleteEmployee(req.params.Person_id);
      if (affectedRows === 0) {
        res.status(404).json('No employee with ID: ' + req.params.Person_id);
      } else {
        res.send('Deleted successfully');
      }
    } catch (error) {
      console.error(error);
      res.status(500).json('Internal Server Error');
    }
  });

  router.post('/', async (req, res) => {
    await service.AddOrEditEmployee(req.body)
    res.status(201).send('created successfully')
  })

module.exports = router;