const express = require('express')
const dotenv = require('dotenv')

//Route files
const bootcamps = require('./routes/bootcamps')
const app = express()

//load env variables
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5000

app.use('/api/v1/bootcamps', bootcamps)

app.listen(PORT, console.log(`server running on port ${PORT} and is in ${process.env.NODE_ENV}`))
