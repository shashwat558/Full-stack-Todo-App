const { todoModel } = require("../db/todo");
const { default: userModel } = require("../db/user");





const addTask = async (req, res) => {
    const {title, description} = req.body;
    const completed = false;
    const userId = req.user.id;
    const user = await userModel.findOne({_id:userId});
    const newTask = new todoModel({title, description, completed});
    newTask.save() 
     .then((saveTodo) => {
        res.status(201).json({saveTodo})
     })
     .catch((err) => {
        res.status(500).json({message: "Failed to create a new todo"})        
     })    
     

}

const deleteTask = (req, res) => {
    const {todoId} = req.params;
    todoModel.findByIdAndDelete({_id:todoId})
    .then(() => {
        res.status(200).json({message: "Task deleted succesfully"})
    })
    .catch((err) => res.status(500).json({message: "Error with deleting todo"}));
}


const getTodos = (req, res) => {
    const userId = req.headers[userId];
    todoModel.find({userId})
    .then((todos) => {
        res.status(200).json({todos})
    })
    .catch((err) => res.status(500).json({message: "Error while retrieving data"}))
}

module.exports = {
    addTask,
    deleteTask,
    getTodos
};