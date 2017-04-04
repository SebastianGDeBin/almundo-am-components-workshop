'use strict';

class TodosController{

  static getTodos(req, res, next) {
    const todos = [{
            label:'estudiar',
            id:0,
            complete: false
        }, {
            label:'comer',
            id: 1,
            complete: true
        }, {
            label:'dormir',
            id:3,
            complete: false
        }];
    res.json(todos);
  }
  // static addTodo(req, res, next){
  //     todos.push({label: req.label, id: this.todos.length + 1});
  //     res.json(todos);
  // }

}

module.exports = TodosController;
