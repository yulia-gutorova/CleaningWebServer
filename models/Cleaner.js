var mongoose = require('mongoose');
//var uuid = require('node-uuid');

const CleanerSchema = mongoose.Schema({

    id: { type: String, default: function genUUID() {
         return uuid.v1()
    }},

    cleanerName: {
        type: String,
        required: true
    },

}, { versionKey: false })

module.exports = mongoose.model('cleaners', CleanerSchema); 
