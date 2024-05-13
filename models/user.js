const mongoose=require('mongoose')

const userSchema=mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"User"
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    },
},{
    timestamps:true
})

const usermodel=mongoose.model('User',userSchema)
module.exports=usermodel