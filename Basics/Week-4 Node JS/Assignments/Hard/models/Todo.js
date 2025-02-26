const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: {type: String, required: true},
    status: {type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending'},
    priority: {type: String, enum: ['low', 'medium', 'high', 'unset'], default: 'unset'},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
}, {timestamps: true});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;