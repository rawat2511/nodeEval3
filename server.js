const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8001;
const DB = process.env.DB || "mongodb+srv://masai:masaischool@cluster0.ggxsc.mongodb.net/details?retryWrites=true&w=majority";

const bookController = require('./controllers/book.controller');
const userController = require('./controllers/user.controller');

app.use('/books', bookController);
app.use('/users', userController);

app.listen(PORT, async () => {
    console.log("Listening to port ", PORT);
    try {
        await mongoose.connect(DB);
        console.log("Connected to DB");
    }
    catch(err) {
        console.log(err.message);
    }
})
