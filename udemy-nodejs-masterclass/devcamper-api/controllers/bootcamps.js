const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc   Get all bootcamps
// @routes GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = asyncHandler (async (req, res, next) => {
    const bootcampsList = await Bootcamp.find();

    res.status(200).json({ success: true, count: bootcampsList.length, data: bootcampsList })

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
    const bootcampToUpdate = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
  
    if(!bootcampToUpdate) return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
  
    res.status(200).json({ success: true, data: bootcampToUpdate });
});

// @desc   Delete a bootcamp
// @routes DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
    const deletedBootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if(!deletedBootcamp) return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));

    res.status(200).json({ success: true, data: `Delete bootcamp ${req.params.id}` })
});