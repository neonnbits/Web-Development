const Todo = require("../models/Todo");


exports.createTodo = async (req, res) => {
    try {
        console.log("Authenticated User:", req.user); // Debugging

        const { title, status, priority } = req.body;
        const userId = req.user.userId; // Fix here

        if (!userId) {
            return res.status(400).json({ message: "User ID is missing from token." });
        }

        const newTodo = new Todo({ title, status, priority, user: userId });
        await newTodo.save();
        
        res.status(200).json({ message: "Todo added successfully." });
    } catch (error) {
        res.status(500).json({ message: "Error creating todo", error: error.message });
    }
};

exports.getTodos = async (req, res) => {
    try{
        const userId = req.user.userId;
        const todos = await Todo.find({user: userId});
        res.status(200).json(todos);
    } catch(error){
        res.status(500).json({ message: "Error fetching todos", error: error.message });
    }
}

exports.getTodoById = async (req, res) => {
    try{
        const todo = await Todo.findById({_id: req.params.id, user: req.user.userId});
        if(!todo) return res.status(404).json({message: "Todo not found."});
        res.status(200).json(todo);
    }
    catch(error){
        res.status(500).json({ message: "Error fetching todos", error: error.message });
    }
}

exports.updateTodo = async (req, res) => {
    try {
        const userId = req.user.userId; // Get logged-in user ID
        const todoId = req.params.id;

        // Ensure the todo belongs to the logged-in user
        const existingTodo = await Todo.findOne({ _id: todoId, user: userId });
        if (!existingTodo) {
            return res.status(404).json({ message: "Todo not found or unauthorized to update." });
        }

        // Update the todo with new data
        const updatedTodo = await Todo.findByIdAndUpdate(
            todoId,
            { $set: req.body }, // Apply only provided fields
            { new: true, runValidators: true } // Return updated document & validate changes
        );

        res.status(200).json({ message: "Todo updated successfully.", updatedTodo });
    } catch (error) {
        res.status(500).json({ message: "Error updating todo", error: error.message });
    }
};

exports.deleteTodo = async (req, res) => {
    try{
        const deletedTodo = await Todo.findOneAndDelete({_id: req.params.id, user: req.user.userId});
        if(!deletedTodo) return res.status(404).json({message: "Todo not found."});
        res.status(200).json({message: "Todo deleted successfully."});
    }
    catch(error){
        res.status(500).json({ message: "Error deleting todo", error: error.message });
    }
}

exports.deleteAllTodos = async (req, res) => {
    try{
        const deletedTodos = await Todo.deleteMany({userId: req.user.userId});
        if(deletedTodos.deletedCount === 0) return res.status(404).json({message: "No todos found."});
        res.status(200).json({message: "All todos deleted successfully.", deletedTodos});
    }
    catch(error){
        res.status(500).json({ message: "Error deleting all todos", error: error.message });
    }
}