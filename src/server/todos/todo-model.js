//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    label           :String,
    complete        :Boolean
});


module.exports = mongoose.model('Todos', TodoSchema);