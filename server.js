const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');                   // npm i mongoose
dotenv.config({path:'./config/config.env'});
const cookieParser = require('cookie-parser');              // npm i cookie-parser
                                                            // npm i jsonwebtoken bcryptjs


// Security
const mongoSanitize = require('express-mongo-sanitize');    // (middleware) npm i express-mongo-sanitize
const helmet = require('helmet');                           // (middleware) npm i helmet
const xss = require('xss-clean');                           // (middleware) npm i xss-clean
const rateLimit = require('express-rate-limit');            // (middleware) npm i express-rate-limit
const hpp = require('hpp');                                 // (middleware) npm i hpp
const cors = require('cors');                               // (middleware) npm i cors

connectDB();

//Route files
const app = express();
const auth = require('./routes/auth');
const bookings = require('./routes/bookings');
const companies = require('./routes/companies');
const limiter = rateLimit({
    windowsMs: 10*60*1000,
    max: 100
});