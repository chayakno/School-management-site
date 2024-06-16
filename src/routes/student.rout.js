
const express = require('express');
const router = express.Router();
const {addStudent,getAllStudents} = require('../controllers/student/student.controller');


router.post('/add', addStudent);
router.get('/getAllStudents', getAllStudents);


module.exports = router;
