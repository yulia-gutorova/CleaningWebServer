var mongoose = require('mongoose');
//var uuid = require('node-uuid');

const BookingsSchema = mongoose.Schema({ 
/*     id: { type: String, default: function genUUID() {
         return uuid.v1()
    }},   */
                
    customerName: {
        type: String,
        required: true
    },

    cleanerName: {
        type: String,
        required: true
    },

    level: {
        type: String,
        enum: ['Basic', 'Top', 'Diamond', 'Windows'],
        required: true,
    },

    date: {
        type: Date,
        required: true
    },

    time: {
        type: String,
        required: true
    },

    status: {
        type: Boolean,
        required: true
    },

}, { versionKey: false })

module.exports = mongoose.model('bookings', BookingsSchema); 
