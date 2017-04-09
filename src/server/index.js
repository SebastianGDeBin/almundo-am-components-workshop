/**
 * Created by sebastiandebin on 31/03/17.
 */
const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

//Connect to Database
mongoose.connect("mongodb://localhost/test");

//Get the default connection
const db = mongoose.connection;

db.on('connected',()=>{console.log('Mongoose default connection open to mongodb://localhost/todos');});
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'mongoDB connection error:'));

//db.on('error', function () {
//    throw Error();
//});

// API routes Async
app.use('/static', express.static('./build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/todos', require('./todos/todos-routes'));

//App Routes
app.use('/',function (req, res, next) {
    res.sendFile(path.join(__dirname + '/../../build/index.html'));
});


app.listen(PORT, ()=>{
   console.log("Server running on " + PORT);
})
