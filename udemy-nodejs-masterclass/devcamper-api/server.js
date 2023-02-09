const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const fileUploader = require('express-fileupload');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

//Route Files
const bootcamps = require('./routes/bootcamps')
const courses = require('./routes/courses')
const auth = require('./routes/auth')
const users = require('./routes/users');
const reviews = require('./routes/reviews');

const app = express();

// Body Parser
app.use(express.json());

// Enable cookie-parser to access req.cookies
app.use(cookieParser());

// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// File uploading
app.use(fileUploader());

app.use(express.static(path.join(__dirname, 'public')));

// Mount Routers
app.use('/api/v1/bootcamps', bootcamps)
app.use('/api/v1/courses', courses)
app.use('/api/v1/auth', auth)
app.use('/api/v1/users', users)
app.use('/api/v1/reviews', reviews)

// Error handler
app.use(errorHandler)

const PORT = process.env.PORT || 5000
const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
})