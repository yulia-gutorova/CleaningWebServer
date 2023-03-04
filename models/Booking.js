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
        default: 'Basic'
    },

    date: {
        type: Date,
        default:Date.now,
        //required: true
    },

    time: {
        type: String,
        required: true
    },

    status: {
        type: Boolean,
        default: false
    },

}, { versionKey: false })

module.exports = mongoose.model('bookings', BookingsSchema); 
