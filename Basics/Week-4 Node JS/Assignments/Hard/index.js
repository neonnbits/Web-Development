const express = require("express");
const todoRoutes = require('./routes/todo');
const userRoutes = require('./routes/user');
const connectDB = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
connectDB();
app.use('/todo', todoRoutes);
app.use('/user', userRoutes);

app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`));