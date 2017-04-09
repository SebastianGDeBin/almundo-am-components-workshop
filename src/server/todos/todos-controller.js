'use strict';
const TodosService = require('./todos-services');


class TodosController{

  static getTodos(req, res, next) {

      const todosPromise =  TodosService.get();

      todosPromise.then (function (todos) {
        res.json(todos);
      });
  }

  static addTodo (req, res, next){
      console.log("mostrar el label" + req.body.label);
      TodosService.add(req.body.label)
          .then(function (todos) {
              console.log("pase por el ctrl1");
              res.json(todos);
              console.log("pase por el ctrl2");
          });

  }
}

module.exports = TodosController;
