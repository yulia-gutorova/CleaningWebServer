const Customer = require('../models/Customer');

//*********************************************************** 
// Return all items

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        if(!posts){
            res.status(404).json({message: 'The item does not exist'});
        }
        else{
            res.status(200).json(posts);
            
        }
    } catch (error) {
        res.status(500).json({message: error});
    }
}

//*********************************************************** 
// Get a specific item by id

exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById({'_id': req.params.postId});
            res.status(200).json(post);             
    } catch (error) {
        res.status(404).json({message: error});
    }
}

//*********************************************************** 
// Create a new item

exports.createPost = async (req, res) => { 
    try {
        const post = new Post({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            nickName: req.body.nickName,
            phone: req.body.phone,
            tags: req.body.tags,
        })

        res.status(201).json(await post.save());
    } catch (error) {
        res.status(500).json({message: error});
    }
}

//*********************************************************** 
// Delete item by ID

exports.deletePost = async (req, res) => {
    try {
        res.status(200).json(await Post.deleteOne({'_id': req.params.postId}));
    } catch (error) {
        res.staus(500).json({message: error});
    }
}

//*********************************************************** 
// Update existing item by id

exports.updatePost = async (req, res) => {
    try {
        res.status(201).json(await Post.updateOne(
            {'_id': req.params.postId},
            {
                $set: {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    nickName: req.body.nickName,
                    phone: req.body.phone,
                    tags: req.body.tags,
                }
            }
        ));
        
    } catch (error) {
        res.status(400).json({message: error});
    }
}