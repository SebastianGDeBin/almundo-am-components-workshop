(function(){
	angular
		.module('todos')
		.component('todosRoot',{
			controller: TodosController,
			require:{

			},

			templateUrl:'todos/todos-root.html'
		});
	TodosController.$inject = ['TodosService'];

	function TodosController(TodosService){

		var _self = this;

		this.onComplete = function($event){
			var todo = $event.todo;
			_self.todos = TodosService.onComplete(todo);
		};

		this.onDelete = function($event){
			var id = $event.todo.id;
			_self.todos = TodosService.onDelete(id);
			// var id = $event.todo.id
			// TodosService.onDelete(id);
			// _self.todos = _self.todos.filter(function (item) {return id !== item.id  });

			// var id = $event.id;
			// TodosService.removeTodo(id);
			// volver a pedir los todo con el getTodos 
			// o de la lista que tengo aca buscar el id y borrarlo con un filter
			// var idx = _self.todos. find ((todo) => todo.id === id);
			// this.todos.splice(idx,1);
		};

		this.addTodo = function($event){
			var label = $event.label;
			_self.todos = TodosService.addTodo(label);
		};

		this.$onInit = function(){
            _self.todos = TodosService.getTodos();
        };

	}

})();