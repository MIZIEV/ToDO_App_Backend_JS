require("dotenv").config();
const express = require("express");
const taskRouter = require("./api/router/task.router.js");

const app = express();


app.use(express.json());
app.use("/api/task", taskRouter);



app.listen(process.env.APP_PORT, () => {
    console.log("Server is running in port - " + process.env.APP_PORT);
})