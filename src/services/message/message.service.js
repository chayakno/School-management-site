const Message = require('../../models/messageSchema.Schema');
const { error, messages } = require('../../models/studentValidation');
const { User } = require('../../models/user.Schema');
const {Chat}=require('../../models/chatSchema.Schema');



const leaveroom= async(data)=>{
    try{
        //userID,room
        const  chat= await Chat.findOne({roomName:data.room})
        console.log(chat);
      const chatRoomUsers=await chat.find({_id:data.userID})
        return chatRoomUsers.filter((user) => user._id != userID);
      }
      catch(err){
        console.error(err)
        throw err;
      }
}


const get100LastMessage = async () => {
    try {
        const message = await Message.find().limit(100);
        return message;
    } catch (error) {
        console.error('Error fetching recent messages:', error);
        throw error;
    }
};



async function addMessage(data) {

    try {

        let chatRoom= await Chat.findOne({roomName:data.room})
        if(!chatRoom){
            chatRoom=new Chat({
                roomName:data.room,
                participants:[],
                messages:[],
            })
            
        }
        console.log(data);

        let user = await User.findOne({ name: data.sender })
        console.log(user)
        let messageData = {
            sender: user._id,
            content: data.content,
            timestamp: data.timestamp
        }
        
        const newMessage = new Message(messageData);
    
      
        chatRoom.messages.push(newMessage._id);
        const saveMessage = await newMessage.save();
        const newChat = await chatRoom.save();
        return saveMessage;
    } catch (err) {
        console.error(err)    
    }
}


module.exports = {
    addMessage,
    get100LastMessage,
    leaveroom

};




