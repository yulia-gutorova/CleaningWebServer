var mongoose = require('mongoose');
//var uuid = require('node-uuid');

const CustomerSchema = mongoose.Schema({

    id: { type: String, default: function genUUID() {
         return uuid.v1()
    }},

    customerName: {
        type: String,
        required: true
    },
    

}, { versionKey: false })

module.exports = mongoose.model('customers', CustomerSchema); 
