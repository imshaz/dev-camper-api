const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bootcamps = require("./routes/bootcamps");
const errorHandler = require("./middleware/error")
var colors = require('colors');
// load middleware
const morgan = require("morgan");
const logger = morgan("dev");
dotenv.config({ path: "./config/config.env" });

// const logger = require('./middleware/logger')
connectDB();

const app = express();
app.use(logger);

app.use(express.json())
//load env variables
const PORT = process.env.PORT || 5000;

// nount routers
app.use("/api/v1/bootcamps", bootcamps);

app.use(errorHandler)
const server = app.listen(
    PORT,
    console.log(
        `server running on port ${PORT} and is in ${process.env.NODE_ENV}`.blue
    )
);

process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`.red);

    server.close(() => process.exit(1));
});
