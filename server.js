const express = require('express') // npm init
const dotenv = require('dotenv') // npm i express dotenv
const connectDB = require('./config/db') // npm i mongoose
dotenv.config({ path: './config/config.env' }) // config.env
const cookieParser = require('cookie-parser') // npm i cookie-parser

// connect to database
connectDB() // npm install mysql

// security
const mongoSanitize = require('express-mongo-sanitize') // (middleware) npm i express-mongo-sanitize
const helmet = require('helmet') // (middleware) npm i helmet
const xss = require('xss-clean') // (middleware) npm i xss-clean
const rateLimit = require('express-rate-limit') // (middleware) npm i express-rate-limit
const hpp = require('hpp') // (middleware) npm i hpp
const cors = require('cors') // (middleware) npm i cors

// route files
const auth = require('./routes/auth')
const bookings = require('./routes/bookings')
const companies = require('./routes/companies')
const limiter = rateLimit({
  windowsMs: 10 * 60 * 1000,
  max: 100
})

// app
const app = express()
app.use(express.json()) // body parser
app.use(cookieParser()) // cookie parser
// security
app.use(mongoSanitize()) // sanitize data
app.use(helmet()) // set security headers
app.use(xss()) // prevent XSS attacks
app.use(limiter) // rate Limiting
app.use(hpp()) // prevent http param pollutions
app.use(cors()) // ennable CORS

// mount router
app.use('/api/v1/auth', auth)
app.use('/api/v1/bookings', bookings)
app.use('/api/v1/companies', companies)

// port
const PORT = process.env.PORT || 5000
const server = app.listen(
  PORT,
  console.log('Server running in ', process.env.NODE_ENV, 'mode on port ', PORT)
)

// handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error:${err.message}`)
  // close server & exit process
  server.close(() => process.exit(1))
})
