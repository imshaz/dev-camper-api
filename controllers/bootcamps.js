const Bootcamp = require('../models/Bootcamp')

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  public
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        if (!bootcamps) {
            res.status(400).json({ success: false })
        }
        res.status(201).json({ success: true, data: bootcamps })
    } catch (error) {
        res.status(400).json({ success: false })
    }
}

// @desc    Get a bootcamp with id
// @route   GET /api/v1/bootcamps/:id
// @access  public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findOne({ _id: req.params.id })
        if(!bootcamp){
            throw new Error('BROKEN')
        }
        res.status(200).json({ success: true, data: bootcamp })
    } catch (error) {
        // console.log('eeeee', error)
        next(error)
        // res.status(400).json({ success: false })
    }
}

// @desc    Create a new  bootcamp 
// @route   POST /api/v1/bootcamps
// @access  private
exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
        if (!bootcamp) {
            return res.status(400).json({ success: false })
        }
        res.status(201).json({ success: true, data: bootcamp })

    } catch (error) {
        console.log('error', error)
        res.status(400).json({ success: false })
    }
}

// @desc    Update a bootcamp with id
// @route   POST /api/v1/bootcamps/:id
// @access  private
exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findOneAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!bootcamp) {
            return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: bootcamp })
    } catch (error) {
        res.status(400).json({ success: false })
    }
}

// @desc    delete a bootcamp with id
// @route   DELETE /api/v1/bootcamps/:id
// @access  private
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
        res.status(201).json({ success: true, data: bootcamp })
    } catch (error) {
        res.status(400).json({ success: false, data: error })
    }
}

