const { Router } = require("express");
const Todo = require("../models/Todo")
const User = require("../models/User")
const { createTodo, getTodos,
    getTodoById,
    updateTodo,
    deleteTodo,
    deleteAllTodos
} = require("../controllers/todoController");
const adminMiddleware = require("../middleware/authMiddleware");
const router = Router();

// todo Routes
router.post('/', adminMiddleware, createTodo);
router.put('/:id', adminMiddleware, updateTodo);
router.delete('/', adminMiddleware, deleteAllTodos);
router.delete('/:id', adminMiddleware, deleteTodo);
router.get('/', adminMiddleware, getTodos);
router.get('/:id', adminMiddleware, getTodoById);

module.exports = router;