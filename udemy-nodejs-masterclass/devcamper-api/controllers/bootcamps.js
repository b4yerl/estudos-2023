// @desc   Get all bootcamps
// @routes GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).send({ success: true, msg: 'Show all bootcamps' })
}

// @desc   Get a single bootcamp
// @routes GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).send({ success: true, msg: 'Show a single bootcamp' })
}

// @desc   Create a new bootcamp
// @routes POST /api/v1/bootcamps/
// @access Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).send({ success: true, msg: 'Create new bootcamp' })
}

// @desc   Update a bootcamp
// @routes PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).send({ success: true, msg: `Update bootcamp ${req.params.id}` })
}

// @desc   Delete a bootcamp
// @routes DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).send({ success: true, msg: `Delete bootcamp ${req.params.id}` })
}