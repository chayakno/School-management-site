const Student = require('../../models/student.Schema');

const getAllStudents = async () => {
    try {
        return await Student.find();
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllStudents
};
