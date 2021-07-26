//bring in dependencies to use
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// bring mongoDB config to use
const db = require('./config/keys').mongoURI;
//connect to mongoDB
mongoose
    //connect
    .connect(db)
    //put in a call back using the => funtion if works
    .then(() => console.log('MongoDB Connected.'))
    //if connection doesnt work, log error
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));