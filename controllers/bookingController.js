const Booking = require('../models/Booking');


//*********************************************************** 
// Return all bookings

exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        if(!bookings){
            res.status(404).json({message: 'No bookings exist'});
        }
        else{
            res.status(200).json(bookings);
            
        }
    } catch (error) {
        res.status(500).json({message: error});
    }
}

//*********************************************************** 
// Get a specific bookings by id

exports.getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById({'_id': req.params.bookingId});
            res.status(200).json(booking);             
    } catch (error) {
        res.status(404).json({message: error});
    }
}

//*********************************************************** 
// Create a new booking

exports.createBooking = async (req, res) => { 
    try {
        const booking = new Booking({
            id:req.body.id,
            customerName: req.body.customerName,
            cleanerName: req.body.cleanerName,
            level: req.body.level,
            time: req.body.time,
        })

        res.status(201).json(await booking.save());
    } catch (error) {
        res.status(500).json({message: error});
    }
}

//*********************************************************** 
// Delete booking by ID

exports.deleteBooking = async (req, res) => {
    try {
        res.status(200).json(await Booking.deleteOne({'_id': req.params.bookingId}));
    } catch (error) {
        res.staus(500).json({message: error});
    }
}

//*********************************************************** 
// Update existing booking by id

exports.updateBooking = async (req, res) => {
    try {
        res.status(201).json(await Booking.updateOne(
            {
                $set: {
                    customerName: req.body.customerName,
                    cleanerName: req.body.cleanerName,
                    level: req.body.level,
                    time: req.body.time,
                }
            }
        ));
        
    } catch (error) {
        res.status(400).json({message: error});
    }
}