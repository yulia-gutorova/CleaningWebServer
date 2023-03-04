var mongoose = require('mongoose');
//var uuid = require('node-uuid');

const MembersSchema = mongoose.Schema({

/*     id: { type: String, default: function genUUID() {
         return uuid.v1()
    }}, */

    name: {
        type: String,
        required: true
    },
    isCustomer: {
        type: Boolean,
        required: true
    },
    bookings :{
        type: Array,
        required: false
    }

}, { versionKey: false })

module.exports = mongoose.model('members', MembersSchema); 
