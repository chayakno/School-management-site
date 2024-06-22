const Student = require('../../models/student.Schema');

const { User } = require('../../models/user.Schema');
const getAllStudents = async () => {
    try {
        return await Student.find();
    } catch (error) {
        throw error;
    }
};


async function addStudent(studentData) {
    let user = await User.findOne({ email: studentData.email });
    
    try {
        studentData = {
            subjects: studentData.subjects,
            age: studentData.age,
            weeklySchedule: [],
            hours: studentData.hours,
            status: "pending",
            user: user._id,
            chats: studentData.chats
        }
        const newStudent = new Student(studentData);
        const savedStudent = await newStudent.save();
        return savedStudent;
    } catch (err) {
        throw err;
    }
};





module.exports = {
    addStudent, getAllStudents
};
