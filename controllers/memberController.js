const Member = require('../models/Member');

//*********************************************************** 
// Return all members

exports.getAllMembers = async (req, res) => {
    try {
        const members = await Member.find();
        if(!members){
            res.status(404).json({message: 'No members exist'});
        }
        else{
            res.status(200).json(members);
            
        }
    } catch (error) {
        res.status(500).json({message: error});
    }
}

//*********************************************************** 
// Get a specific member by id

exports.getMemberById = async (req, res) => {
    try {
        const member = await Member.findById({'_id': req.params.memberId});
            res.status(200).json(member);             
    } catch (error) {
        res.status(404).json({message: error});
    }
}

//*********************************************************** 
// Create a new member

exports.createMember = async (req, res) => { 
    try {
        const member = new Member({
            name: req.body.name,
            isCustomer: req.body.isCustomer
        })

        res.status(201).json(await member.save());
    } catch (error) {
        res.status(500).json({message: error});
    }
}

//*********************************************************** 
// Delete item by ID

exports.deleteMember = async (req, res) => {
    try {
        res.status(200).json(await Member.deleteOne({'_id': req.params.memberId}));
    } catch (error) {
        res.staus(500).json({message: error});
    }
}

//*********************************************************** 
// Update existing member by id

exports.updateMember = async (req, res) => {
    try {
        res.status(201).json(await Member.updateOne(
            {'_id': req.params.memberId},
            {
                $set: {
                    name: req.body.name,
                    isCustomer: req.body.isCustomer
                }
            }
        ));
        
    } catch (error) {
        res.status(400).json({message: error});
    }
}