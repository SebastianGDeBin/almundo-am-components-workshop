const TodoModel = require('./todo-model');

class TodoService{

    //Get All Todos
    static get(){
        return TodoModel.find();
    }

    static add(label){
        var newTodo = new TodoModel();

        newTodo.label = label;
        newTodo.complete = false;

        TodoModel.insert(newTodo);
        console.log("pase por el service antes de devolver la lista");
        return TodoModel.find();
    }
}

module.exports = TodoService;