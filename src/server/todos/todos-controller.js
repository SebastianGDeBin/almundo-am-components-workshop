'use strict';
const TodosService = require('./todos-services');


class TodosController{

  static getTodos(req, res, next) {

      const todosPromise =  TodosService.get();

      todosPromise.then (function (todos) {
        res.json(todos);
      });

      //Otra forma
      //TodosService.get()
      //    .then (function (todos) {
      //        res.json(todos);
      //    });
  }

  static addTodo (req, res, netx){

      TodosService.addTodo(req.label)
          .then(function (todos) {
              res.json(todos);
          });

  }
}

module.exports = TodosController;
