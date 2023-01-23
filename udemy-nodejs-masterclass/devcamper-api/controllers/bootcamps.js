const Bootcamp = require('../models/Bootcamp')

// @desc   Get all bootcamps
// @routes GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcampsList = await Bootcamp.find();

    res.status(200).send({ success: true, count: bootcampsList.length, data: bootcampsList })
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

// @desc   Get a single bootcamp
// @routes GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const foundBootcamp = await Bootcamp.findById(req.params.id);

    if(!foundBootcamp) return res.status(400).json({ success: false });

    res.status(200).send({ success: true, data: foundBootcamp });
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

// @desc   Create a new bootcamp
// @routes POST /api/v1/bootcamps/
// @access Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const newBootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
      success: true,
      data: newBootcamp
    });
  } catch (err) {
    res.status(400).json({
      success: false
    })
  }
}

// @desc   Update a bootcamp
// @routes PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcampToUpdate = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
  
    if(!bootcampToUpdate) return res.status(400).json({ success: false });
  
    res.status(200).json({ success: true, data: bootcampToUpdate });
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

// @desc   Delete a bootcamp
// @routes DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const deletedBootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if(!deletedBootcamp) return res.status(400).json({ success: false });

    res.status(200).send({ success: true, data: `Delete bootcamp ${req.params.id}` })
  } catch (err) {
    res.status(400).json({ success: false })
  }
}