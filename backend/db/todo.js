const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title:{type: String, required: true},
    description: {type: String, required: true},
    completed: {type: Boolean, required: true},
    userId: {type:String, required: true}
})

const todoModel = mongoose.model("Tasks", todoSchema);

module.exports = {
    todoModel
}