const express = require('express');
const router = express.Router();
const cors = require('cors')
const controller = require('../controllers/customerController');

//*********************************************************** 
// Return all customers
router.get('/', controller.getAllCustomers);

//*********************************************************** 
// Get a specific customer
router.get('/:customerId', controller.getCustomerById);

//*********************************************************** 
// Create a new custome
router.post('/', controller.createCustomer);

//*********************************************************** 
// Delete a customer
router.delete('/:customerId', controller.deleteCustomer);

//*********************************************************** 
// Update existing item
router.patch('/:customerId', controller.updateCustomer);

module.exports = router;