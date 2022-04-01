const express = require('express')
const router = express.Router()

// routes
const { protect, authorize } = require('../middleware/auth')
const {
  getCompanies,
  getCompany,
  createCompany,
  updateCompany,
  deleteCompany
} = require('../controllers/companies')

// routes detail
router
  .route('/:id')
  .get(getCompany)
  .put(protect, authorize('admin'), updateCompany)
  .delete(protect, authorize('admin'), deleteCompany)
router.route('/').get(getCompanies).post(protect, authorize('admin'), createCompany) // ต้องอยู่บรรทัดล่างสุดเสมอ เพราะครอบคลุมกว้างมาก

// re-route into other resource routers
const bookingRouter = require('./bookings')
router.use('/:companyId/bookings/', bookingRouter)

module.exports = router
