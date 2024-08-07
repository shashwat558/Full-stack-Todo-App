const { todoModel } = require("../db/todo");
const { default: userModel } = require("../db/user");





const addTask = async (req, res) => {
    const {title, description} = req.body;
    const completed = false;
    const userId = req.headers["userid"];
    const newTask = new todoModel({title, description, completed, userId});
    

    try {
        
        const saveTodo = await newTask.save();
        res.status(201).json({ todo: saveTodo }); // Return as { todo } to match frontend expectation
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
     

}

const deleteTask = (req, res) => {
    const {todoId} = req.body;
    todoModel.findByIdAndDelete({_id:todoId})
    .then(() => {
        res.status(200).json({message: "Task deleted succesfully"})
    })
    .catch((err) => res.status(500).json({message: "Error with deleting todo"}));
}


const getTodos = (req, res) => {
    const userId = req.headers["userid"];
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