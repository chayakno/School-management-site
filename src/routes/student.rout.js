const express = require('express');
const { getAllStudents } = require('../controllers/student/student.controller');
const router = express.Router();

router.get('/getAllStudents', getAllStudents);

module.exports = router;
