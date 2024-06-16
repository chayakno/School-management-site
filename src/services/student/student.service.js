const Student = require('../../models/student.Schema');
const getAllStudents = async () => {
    try {
        return await Student.find();
    } catch (error) {
        throw error;
    }
};


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
