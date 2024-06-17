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

const Student=require('./src/models/student.Schema');


// דוגמא ליצירת משתמש וסטודנט
app.post('/create-Student', async (req, res) => {
    const newUser = new Student({
        userId: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '1234567890',
        subjects: ['flute', 'piano'], 
        age: 20,
        status: 'pending', 
        user: 2, 
        chats: [1], 
        weeklySchedule: [2] 

    });
    await newUser.save()

    .then(savedStudent => {
        console.log('Student saved successfully:', savedStudent);
    })
    .catch(error => {
        console.error('Error saving student:', error);
    })
});
