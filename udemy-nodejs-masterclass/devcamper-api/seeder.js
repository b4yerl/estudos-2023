const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Load models
const Bootcamp = require('./models/Bootcamp');
const Course = require('./models/Course');

// Connect to db
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI);

// Read JSON files
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'));
const courses = JSON.parse(fs.readFileSync(`${__dirname}/_data/courses.json`, 'utf-8'));

// Import into DB

const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
    await Course.create(courses);

    console.log('Data Imported'.green.inverse);
    process.exit();
  } catch (err) {
    console.log(`Error: ${err.message}`.red)
  }
}

// Delete ALL Data

const deletAllData = async () => {
  try {
    await Bootcamp.deleteMany();
    await Course.deleteMany();

    console.log('Data Destroyed'.red.inverse);
    process.exit();
  } catch (err) {
    console.log(`Error: ${err.message}`.red)
  }
}

if(process.argv[2] === '--import') {
  importData();
}
else if(process.argv[2] === '--destroy') {
  deletAllData();
}