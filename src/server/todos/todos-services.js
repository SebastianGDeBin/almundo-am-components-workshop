const TodoModel = require('./todo-model');

class TodoService{

    //Get All Todos
    static get(){
        return TodoModel.find();
    }
}

module.exports = TodoService;