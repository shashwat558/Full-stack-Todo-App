const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const port = 3000;
app.use(cors());
app.use(express.json());

app.listen(port, () => {
     console.log(`listening on the port ${port}`)
})

mongoose.connect()
