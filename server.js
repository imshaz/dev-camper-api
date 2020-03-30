const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bootcamps = require("./routes/bootcamps");
var colors = require('colors');
// load middleware
const morgan = require("morgan");
const logger = morgan("dev");

// const logger = require('./middleware/logger')

const app = express();
app.use(logger);

app.use(express.json())
//load env variables
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5000;
connectDB();

// nount routers
app.use("/api/v1/bootcamps", bootcamps);

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
