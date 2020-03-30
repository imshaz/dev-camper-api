
const errorHandler = (err, req, res, next)=>{
    console.log('somthign weewwewe')

    res.status(500).json({success:false, msg : "something went wrong"})
    next()
}


module.exports = errorHandler