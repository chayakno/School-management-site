const express = require('express');
const mongoose = require('mongoose');
const app = express();

// קישור למאגר הנתונים
const mongoURI = 'mongodb://127.0.0.1:27017/School-management'; // החלף בשם מאגר הנתונים שלך
mongoose.connect(mongoURI).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

// הגדרת השרת
app.listen(5000, function() {
    console.log('Server running on port 5000');
});

app.get('/', function(req, res) {
    res.send('Hello');
});

const User = require('./models/user.Schema');
// const Student = require('./models/student');

// דוגמא ליצירת משתמש וסטודנט
app.post('/create-user', async (req, res) => {
    const newUser = new User({
        userId: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '1234567890'
    });
    await newUser.save();
    res.send('User created');
});