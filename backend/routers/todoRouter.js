const express = require('express');
import { getTodos, addTask, deleteTask } from '../controllers/todoController';
import authMiddleware from '../middleware/middleware';
const router = express.Router();

router.use(authMiddleware)

router.post("/Addtodo",  addTask);
router.post("/removeTodo", deleteTask);
router.get("/getTodos", getTodos);

module.exports = router;