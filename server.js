const express = require('express');                         // npm init
const dotenv = require('dotenv');                           // npm i express dotenv
const connectDB = require('./config/db');                   // npm i mongoose
dotenv.config({path:'./config/config.env'});                // config.env
connectDB();                                                // db.js    // config.env MONGO_URI)
const cookieParser = require('cookie-parser');              // npm i cookie-parser
// npm install mysql

// Security
const mongoSanitize = require('express-mongo-sanitize');    // (middleware) npm i express-mongo-sanitize
const helmet = require('helmet');                           // (middleware) npm i helmet
const xss = require('xss-clean');                           // (middleware) npm i xss-clean
const rateLimit = require('express-rate-limit');            // (middleware) npm i express-rate-limit
const hpp = require('hpp');                                 // (middleware) npm i hpp
const cors = require('cors');                               // (middleware) npm i cors

//Route files
const auth = require('./routes/auth');
const bookings = require('./routes/bookings');
const companies = require('./routes/companies');
const limiter = rateLimit({
    windowsMs: 10*60*1000,
    max: 100
});

// Mount
// Security
const app = express();
app.use(mongoSanitize());       // Sanitize data
app.use(helmet());              // Set security headers
app.use(xss());                 // Prevent XSS attacks
app.use(limiter);               // Rate Limiting
app.use(hpp());                 // Prevent http param pollutions
app.use(cors());                // Enable CORS
// App
app.use(express.json());        //Body parser
app.use(cookieParser());        //Cookie parser
// Router
app.use('/api/v1/auth',auth);
app.use('/api/v1/bookings',bookings);
app.use('/api/v1/companies',companies);

// Port
const PORT=process.env.PORT||5000;
const server=app.listen(PORT,console.log('Server running in ', process.env.NODE_ENV,'mode on port ',PORT));
process.on('unhandledRejection',(err,promise)=>{    //Handle unhandled promise rejections
    console.log(`Error:${err.message}`);
    server.close(()=>process.exit(1));              //Close server & exit process
});