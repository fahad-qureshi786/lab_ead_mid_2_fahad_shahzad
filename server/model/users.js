//defining schema
const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    image: {
      type: String,
      required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    zipCode:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model("User", userSchema);