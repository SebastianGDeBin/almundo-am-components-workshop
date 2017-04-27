'use strict';
const TodosService = require('./todos-services');


class TodosController{

  static getTodos(req, res, next) {

      TodosService.get()
          .then(function(todos){
              res.json(todos);
          })
  }

  static addTodo (req, res, next){

      TodosService.add(req.body.label)
          .then(function (todos) {
              res.json(todos);
          });
  }

  static onComplete(req, res, next){
      TodosService.complete(req.body.label)
          .then(function(todos){
              res.json(todos);
          })
  }

  static onDelete(req, res, next){
      TodosService.delete(req.query.label)
          .then(function (todos) {
              res.json(todos);
          })
  }
}

module.exports = TodosController;
