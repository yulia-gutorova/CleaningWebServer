const express = require('express');
const router = express.Router();
const cors = require('cors')
const controller = require('../controllers/cleaner.controller');

//*********************************************************** 
// Return all cleaners
router.get('/',  controller.getAllCleaners);

//*********************************************************** 
// Get a specific cleaner by id
router.get('/:cleanerId', controller.getCleanerById);

//*********************************************************** 
// Create a new cleaner
router.post('/', controller.createCleaner);

//*********************************************************** 
// Delete a specific ite
router.delete('/:cleanerId', controller.deleteCleaner);

//*********************************************************** 
// Update existing cleaner
router.patch('/:cleanerId', controller.updateCleaner);

module.exports = router;