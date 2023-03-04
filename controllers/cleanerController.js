const Cleaner = require('../models/Cleaner');

//*********************************************************** 
// Return all cleaners

exports.getAllCleaners = async (req, res) => {
    try {
        const cleaners = await Cleaner.find();
        if(!cleaners){
            res.status(404).json({message: 'No cleaners exist'});
        }
        else{
            res.status(200).json(cleaners);
            
        }
    } catch (error) {
        res.status(500).json({message: error});
    }
}

//*********************************************************** 
// Get a specific cleaner by id

exports.getCleanerById = async (req, res) => {
    try {
        const cleaner = await Cleaner.findById({'_id': req.params.cleanerId});
            res.status(200).json(cleaner);             
    } catch (error) {
        res.status(404).json({message: error});
    }
}

//*********************************************************** 
// Create a new cleaner

exports.createCleaner = async (req, res) => { 
    try {
        const cleaner = new Cleaner({
            id:req.body.id,
            cleanerName: req.body.cleanerName,
        })

        res.status(201).json(await cleaner.save());
    } catch (error) {
        res.status(500).json({message: error});
    }
}

//*********************************************************** 
// Delete cleaner by ID

exports.deleteCleaner = async (req, res) => {
    try {
        res.status(200).json(await Cleaner.deleteOne({'_id': req.params.cleanerId}));
    } catch (error) {
        res.staus(500).json({message: error});
    }
}

//*********************************************************** 
// Update existing cleaner by id

exports.updateCleaner = async (req, res) => {
    try {
        res.status(201).json(await Cleaner.updateOne(
            {
                $set: {
                    cleanerName: req.body.cleanerName,
                }
            }
        ));
        
    } catch (error) {
        res.status(400).json({message: error});
    }
}