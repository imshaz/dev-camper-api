// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: "show list of boot-camps" })
}

// @desc    Get a bootcamp with id
// @route   GET /api/v1/bootcamps/:id
// @access  public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `show single bootcamp with id  ${req.params.id}` })
}


// @desc    Create a new  bootcamp 
// @route   POST /api/v1/bootcamps
// @access  private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `create a bootcamp with id  ${req.params.id}` })

}


// @desc    Update a bootcamp with id
// @route   POST /api/v1/bootcamps/:id
// @access  private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `update a bootcamp with id  ${req.params.id}` })
}

// @desc    delete a bootcamp with id
// @route   DELETE /api/v1/bootcamps/:id
// @access  private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `delete a bootcamp with id  ${req.params.id}` })
}

