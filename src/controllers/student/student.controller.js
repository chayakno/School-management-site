

const studentService = require('../../services/student/student.service');
const userService = require('../../services/user/user.services');

async function addStudent(req, res, next) {
    const studentData = req.body;
    console.log(req.body);
    try {

        const newuser = await userService.addUser(req.body);
         const newstudent=await studentService.addStudent(req.body);
        res.status(201).json(req.body)
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

const getAllPendingStudents = async (req, res) => {
    try {
        const students = await studentService.getAllPendingStudents();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    addStudent, getAllStudents,getAllPendingStudents
};
