require("dotenv").config();
const express = require("express");

const app = express();







app.listen(process.env.APP_PORT, () => {
    console.log("Server is running in port - " + process.env.APP_PORT);
})