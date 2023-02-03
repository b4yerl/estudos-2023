const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const geocoder = require('../utils/geocoder');
const path = require('path');
const { isBuffer } = require('util');

// @desc   Get all bootcamps
// @routes GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = asyncHandler (async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc   Get a single bootcamp
// @routes GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = asyncHandler (async (req, res, next) => {
  const foundBootcamp = await Bootcamp.findById(req.params.id);

  if(!foundBootcamp) return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));

  res.status(200).json({ success: true, data: foundBootcamp });
});

// @desc   Create a new bootcamp
// @routes POST /api/v1/bootcamps/
// @access Private
exports.createBootcamp = asyncHandler (async (req, res, next) => {
  // Add user to req.body
  req.body.user = req.user.id;

  // Check for published bootcamp
  const publishedBootcamp = await Bootcamp.findOne({ user: req.user.id })

  if(publishedBootcamp && req.user.role !== 'admin') {
    return next(new ErrorResponse(`User with id ${req.user.id} has already published a bootcamp`, 400));
  }
  
  const newBootcamp = await Bootcamp.create(req.body);

  res.status(201).json({
    success: true,
    data: newBootcamp
  });
});

// @desc   Update a bootcamp
// @routes PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = asyncHandler (async (req, res, next) => {
  let bootcampToUpdate = await Bootcamp.findById(req.params.id);
  
  if(!bootcampToUpdate) return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));

  // Make sure user is the bootcamp owner
  if (bootcampToUpdate.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new ErrorResponse(`User ${req.user.id} is not authorized to update this bootcamp`, 401))
  }

  // Update
  bootcampToUpdate = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })

  res.status(200).json({ success: true, data: bootcampToUpdate });
});

// @desc   Delete a bootcamp
// @routes DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);

  if(!bootcamp) return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
  if(bootcamp.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new ErrorResponse(`User ${req.user.id} is not authorized to delete this bootcamp`, 401));
  }

  bootcamp.remove();
  
  res.status(200).json({ success: true, data: `Delete bootcamp ${req.params.id}` })
});

// @desc   Get bootcamps within a radius
// @routes GET /api/v1/bootcamps/radius/:zipcode/:distance
// @access Public
exports.getBootcampsInRadius = asyncHandler(async (req, res, next) => {
  const { zipcode, distance } = req.params;

  // Get latitude and longitude from geocoder
  const location = await geocoder.geocode(zipcode);
  const latitude = location[0].latitude;
  const longitude = location[0].longitude;

  // Calc radius using radians
  // Divide dist by earth radius (6378km)
  const radius = distance / 6378;

  const bootcamps = await Bootcamp.find({
      location: {
          $geoWithin: {
              $centerSphere: [ [ longitude, latitude ], radius ]
          }
      }
  });

  res.status(200).json({
      success: true,
      count: bootcamps.length,
      data: bootcamps
  });
});

// @desc   Upload photo for bootcamp
// @routes PUT /api/v1/bootcamps/:id/photo
// @access Private
exports.bootcampPhotoUpload= asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);

  if(!bootcamp) return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
  if(bootcamp.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new ErrorResponse(`User ${req.user.id} is not authorized to update this bootcamp`, 401));
  }
  if(!req.files) return next(new ErrorResponse(`Please upload a file`, 400)); 

  const file = req.files.file;

  // Validate photo
  if(!file.mimetype.startsWith('image')) return next(new ErrorResponse(`Please upload an image file`, 400)); 
  if(file.size > process.env.FILE_SIZE_LIMIT) return next(new ErrorResponse(`Please upload a file with less than ${Math.floor(process.env.FILE_SIZE_LIMIT / (100 ** 3))}mb`, 400)); 

  // Custom file name
  file.name = `photo_${bootcamp._id}${path.extname(file.name)}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
    if(err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`, 500)); 
    }

    await Bootcamp.findByIdAndUpdate(req.params.id, { photo: file.name });

    res.status(200).json({ success: true, data: file.name })
  })
});