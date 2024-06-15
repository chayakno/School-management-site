const mongoose = require('mongoose');
const userScheme=require('./user.Schema');
const MessageScheme=require('./messageSchema.Schema')
const ChatSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message'
        }
    ]
});

module.exports = mongoose.model('Chat', ChatSchema);
