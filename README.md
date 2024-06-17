# School-management-site

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const studRauter = require("./src/routes/student.rout");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/students", studRauter);

const PORT =  5000;
mongoose.connect('mongodb://127.0.0.1:27017/School-management',{}).then(
    ()=>app.listen(PORT,()=>console.log(`server runing on port ${PORT}`)))
    .catch((error)=>console.log(error.message));

    
