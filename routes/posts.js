const express = require('express');
const router = express.Router();
const cors = require('cors')
const controller = require('../controllers/postController');

//*********************************************************** 
// Return all items
router.get('/', cors(),  controller.getAllPosts);

//*********************************************************** 
// Get a specific item by id
router.get('/:postId', controller.getPostById);

//*********************************************************** 
// Create a new item
router.post('/', controller.createPost);

//*********************************************************** 
// Delete a specific ite
router.delete('/:postId', controller.deletePost);

//*********************************************************** 
// Update existing item
router.patch('/:postId', controller.updatePost);

module.exports = router;