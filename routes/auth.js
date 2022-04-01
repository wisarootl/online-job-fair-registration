const express = require('express')
const router = express.Router()

// routes
const { protect } = require('../middleware/auth')
const { register, login, getMe, logout } = require('../controllers/auth')

// routes detail
router.post('/register', register)
router.post('/login', login)
router.get('/me', protect, getMe)
router.get('/logout', logout)

module.exports = router
