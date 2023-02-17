const Customer = require('../models/Customer');

//*********************************************************** 
// Return all customers

exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        if(!customers){
            res.status(404).json({message: 'No customers exist'});
        }
        else{
            res.status(200).json(customers);
            
        }
    } catch (error) {
        res.status(500).json({message: error});
    }
}

//*********************************************************** 
// Get a specific customer by id

exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findById({'id': req.params.customerId});
            res.status(200).json(customer);             
    } catch (error) {
        res.status(404).json({message: error});
    }
}

//*********************************************************** 
// Create a new customer

exports.createCustomer = async (req, res) => { 
    try {
        const customer = new Customer({
            id:req.body.id,
            customerName: req.body.customerName
        })

        res.status(201).json(await customer.save());
    } catch (error) {
        res.status(500).json({message: error});
    }
}

//*********************************************************** 
// Delete item by ID

exports.deleteCustomer = async (req, res) => {
    try {
        res.status(200).json(await Customer.deleteOne({'id': req.params.customerId}));
    } catch (error) {
        res.staus(500).json({message: error});
    }
}

//*********************************************************** 
// Update existing item by id

exports.updateCustomer = async (req, res) => {
    try {
        res.status(201).json(await Customer.updateOne(
            {
                $set: 
                {
                    customerName: req.body.customerName
                }
            }
        ));
        
    } catch (error) {
        res.status(400).json({message: error});
    }
}