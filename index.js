const express = require('express');
const mongoose = require('mongoose');
const app = express();

const config=require('dotenv').config();
const mongoURI = 'mongodb://127.0.0.1:27017/School-management';
mongoose.connect(mongoURI).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});


app.listen(5000, function () {
    console.log('Server running on port 5000');
});
studentRouter = require('./src/routes/student.rout'); 
 app.use('/students', studentRouter);

app.get('/', function (req, res) {
    res.send('Hello');
});

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
