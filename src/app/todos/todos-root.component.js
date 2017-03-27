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

			_self.todos = _self.todos.map(function(item){
				return item.id === todo.id ? Object.assign({}, item, {complete: true}) : item
			});
		};

		this.onDelete = function($event){
			var todo = $event.todo;

			_self.todos = _self.todos.filter(function(item){
				return todo.id !== item.id;
			});

			// var id = $event.id;
			// TodosService.removeTodo(id);
			// volver a pedir los todo con el getTodos 
			// o de la lista que tengo aca buscar el id y borrarlo con un filter
			// var idx = _self.todos. find ((todo) => todo.id === id);
			// this.todos.splice(idx,1);
		};

		this.addTodo = function($event){
			var label = $event.label;

			_self.todos.push({label: label, id: _self.todos.length + 1});
		};

		this.$onInit = function(){
			_self.todos = TodosService.getTodos();
		};

		this.$onChanges = function(changes){

		};

		this.$postLink = function(){

		};

		this.$onDestroy = function(){

		};

	}

})();