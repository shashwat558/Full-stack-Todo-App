const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routers/userRouter");
const todoRouter = require("./routers/todoRouter");

const app = express();

const port = 3000;
app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/ap/todo', todoRouter)

app.listen(port, () => {
     console.log(`listening on the port ${port}`)
})

mongoose.connect("mongodb+srv://tumbaktuhere:vgi7wrAoH0FVbvwq@cluster0.cwu3xg3.mongodb.net/")
