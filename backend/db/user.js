const mongoose = require("mongoose");
const zod = require('zod')
const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, require:true},
    name:{type: String},

})

const userModel = mongoose.model("User", userSchema);

export default userModel;