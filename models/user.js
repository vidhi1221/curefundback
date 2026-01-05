const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    phone_no:Number,
    email: {
        type: String,
        required: 'Email address is required',
        unique: true,
        lowercase: true
    },
    address : {
        type: String
    },
    dateOfBirth : {
        type : Date,
        require : true
    },
    emergencyContact : {
        type: Number
    },
    medicalHistory : {
        type:String
    },
    password: String,
    confirmPassword : String,
    role:{
        type:String,
        enum:["patient", "doctor", "auditor", "admin"]
    },
    verified: {
        type: Boolean,
        default: false,
    },

    userCode: {
        type: String,
        unique: true,
        required: true,
    },
    is_delete: {
        type: Boolean,
        default: false
    },
    otp:String,
    
    },
    
    { timestamps: true });

var userModel = mongoose.model("user",userSchema);

module.exports = userModel;