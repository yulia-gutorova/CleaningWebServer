const express = require('express');
const router = express.Router();
const cors = require('cors')
const controller = require('../controllers/memberController');

//*********************************************************** 
// Return all members
router.get('/', controller.getAllMembers);

//*********************************************************** 
// Get a specific member
router.get('/:memberId', controller.getMemberById);

//*********************************************************** 
// Create a new member
router.post('/', controller.createMember);

//*********************************************************** 
// Delete a member
router.delete('/:memberId', controller.deleteMember);

//*********************************************************** 
// Update existing item
router.patch('/:memberId', controller.updateMember);

module.exports = router;