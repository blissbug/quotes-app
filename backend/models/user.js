import mongoose from 'mongoose';

const userModel = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Quote:{
        type:String,
        required:true
    },
})

const User = mongoose.model("User",userModel);

export default User;