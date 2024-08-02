const express = require('express');
const { getTodos, addTask, deleteTask } = require('../controllers/todoController.js');
const  { authMiddleware } = require('../middleware/middleware');
const router = express.Router();



router.post("/Addtodos",authMiddleware, addTask);
router.post("/Removetodos",authMiddleware,  deleteTask);
router.get("/todos",authMiddleware, getTodos);

module.exports = router;