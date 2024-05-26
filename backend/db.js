const mongoose = require('mongoose');
const { string }  = require('zod');

mongoose.connect('mongodb+srv://jainshashwat528:hkpA2mIPJlN7aHg1@cluster0.wqqmjx3.mongodb.net/');
const userSchema = new mongoose.schema({

    username:{
        type: string,
        require: true,
        unique: true,
        trim: true,
        lowercase: true,
        maxLength: 20        
    },
    password: {
        type: String,
        require: true,
        minLength: 8 
    },
    firstName: {
        type: String,
        require: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        require: true,
        trim: true,
        maxLength: 50
    }
})

const User = mongoose.model("User", userSchema);

module.export = {
    User
}