

const studentService = require('../../services/student/student.service');

async function addStudent(req, res, next) {
    const studentData = req.body;
    console.log(req.body);
    try {
        const newStudent = await studentService.addStudent(studentData);
        res.status(201).json(newStudent);
    } catch (err) {
        next(err);
    }
}

const getAllStudents = async (req, res) => {
    try {
        const students = await studentService.getAllStudents();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = {
    addStudent,getAllStudents
};
