const express = require('express');
const { getTodos, addTask, deleteTask } = require('../controllers/todoController.js');
const  authMiddleware = require('../middleware/middleware');
const router = express.Router();



router.post("/Addtodo", addTask);
router.post("/removeTodo",  deleteTask);
router.get("/getTodos", getTodos);

module.exports = router;