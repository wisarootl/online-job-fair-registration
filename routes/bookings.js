const express = require('express')
const router = express.Router({ mergeParams: true })

// Routes
const { protect, authorize } = require('../middleware/auth')
const {
  getBookings,
  getBooking,
  addBooking,
  updateBooking,
  deleteBooking
} = require('../controllers/bookings')

// routes detail
router
  .route('/:id')
  .get(protect, getBooking)
  .put(protect, authorize('admin', 'user'), updateBooking)
  .delete(protect, authorize('admin', 'user'), deleteBooking)
router.route('/').get(protect, getBookings).post(protect, authorize('admin', 'user'), addBooking)

module.exports = router
