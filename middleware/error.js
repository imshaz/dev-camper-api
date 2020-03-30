
const errorHandler = (err, req, res, next)=>{
    console.log('somthign weewwewe')

    res.status(err.statusCode || 500).json({success:false, msg : err.message})
    next()
}


module.exports = errorHandler