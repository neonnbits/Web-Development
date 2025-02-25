const { Router } = require("express");
const {User, Todo} = require("../config/db")
const adminMiddleware = require("../middleware/authMiddleware");
const router = Router();

// todo Routes
router.post('/', (req, res) => {
    
});

router.put('/', adminMiddleware, (req, res) => {
    // Implement update todo  logic
});

router.delete('/', adminMiddleware, (req, res) => {
    // Implement delete todo logic
});

router.delete('/:id', adminMiddleware, (req, res) => {
    // Implement delete todo by id logic
});


router.get('/', adminMiddleware, (req, res) => {
    // Implement fetching all todo logic
});

router.get('/:id', adminMiddleware, (req, res) => {
    // Implement fetching todo by id logic
});

module.exports = router;