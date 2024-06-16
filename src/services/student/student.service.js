

const Student = require('../../models/student.Schema');


async function addStudent(studentData) {
    const newStudent = new Student(studentData);
    console.log(studentData);
    try {
        const savedStudent = await newStudent.save();
        return savedStudent;
    } catch (err) {
        throw err;
    }
}






module.exports = {
    addStudent,getAllStudents
};
