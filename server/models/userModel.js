import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    name: {type: String, required:true},
    email: {type:String, required:true, unique:true},
    password:{type:String, required},
    creditBalance:{type:Number, default:5},
})

const useModel =mongoose.models.user || mongoose.model("user", userSchema);
//existing model where name is user , if not available: it will create a new 
//user model with userSchema

export default userModel;