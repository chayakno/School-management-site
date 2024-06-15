const mongoose = require('mongoose')

const UsersSchema=new mongoose.Schema({
    userId:Number,
    name:String,
    email:String,
    phone:String

})

module.exports=mongoose.model('User',UsersSchema)
