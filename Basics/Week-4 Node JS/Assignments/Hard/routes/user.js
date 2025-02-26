const { Router } = require("express");
const router = Router();
const {signup, login, logout, getUser, deleteUser} = require("../controllers/userController");
const userMiddleware = require("../middleware/authMiddleware");

// User Routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', userMiddleware, logout);
router.get('/:id', userMiddleware, getUser);
router.post('/delete', userMiddleware, deleteUser);

module.exports = router