const TodoModel = require('./todo-model');

class TodoService{

    //Get All Todos
    static get(){

        return TodoModel.find();

    }

    // Add new Todo
    static add(label){

        var newTodo = new TodoModel();
        newTodo.label = label;
        newTodo.complete = false;

        TodoModel.collection.save(newTodo);
        return TodoModel.find();

    }

    static complete(label){

        TodoModel.collection
            .update({"label" :label }, {$set:{"complete": true}});
        return TodoModel.find();

    }

    static delete(label){
        console.log("todos service mongo");
        TodoModel.collection.remove({"label": label});
        return TodoModel.find();
    }
}

module.exports = TodoService;