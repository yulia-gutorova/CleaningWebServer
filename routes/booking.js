const express = require('express');
const router = express.Router();
const cors = require('cors')
const controller = require('../controllers/bookingController');

//*********************************************************** 
// Return all bookings
router.get('/', cors(),  controller.getAllBookings);

//*********************************************************** 
// Get a specific booking by id
router.get('/:bokingId', controller.getBookingById);

//*********************************************************** 
// Create a new booking
router.post('/', controller.createBooking);

//*********************************************************** 
// Delete a specific booking
router.delete('/:bokingId', controller.deleteBooking);

//*********************************************************** 
// Update existing booking
router.patch('/:bokingId', controller.updateBooking);

module.exports = router;