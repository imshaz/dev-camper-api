// desc: log console output of each req 
// for testing only - use morgan instead 

const logger = (req, res, next) => {
    console.log(`${req.method} - ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next()
}

module.exports = logger