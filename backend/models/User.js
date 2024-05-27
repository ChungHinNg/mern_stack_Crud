import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
     Location:{
        type:String,
        required:true
    }, 
       email:{
        type:String,
        required:true
    },
         phone:{
        type:Number,
        required:true
    },
         hour:{
        type:Number,
        required:true
        },
        
        hourlywage:{
            type:Number,
            required:true
        },

        TotalSalary:{
            type:Number,
            required:true
        },



},{timestamps:true})


const usermodel= mongoose.model('user',userSchema)

export default usermodel