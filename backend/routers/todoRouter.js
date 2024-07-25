const express = require('express');
const { getTodos, addTask, deleteTask } = require('../controllers/todoController.js');
const  { authMiddleware } = require('../middleware/middleware');
const router = express.Router();



router.post("/Addtodo",authMiddleware, addTask);
router.post("/removeTodo",authMiddleware,  deleteTask);
router.get("/getTodos",authMiddleware, getTodos);

module.exports = router;