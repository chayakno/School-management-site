
const express = require('express');
const router = express.Router();
const {addStudent} = require('../controllers/student/student.controller');


router.post('/add', addStudent);


module.exports = router;