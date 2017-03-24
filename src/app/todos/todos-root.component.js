(function(){
	angular
		.module('todos')
		.component('todosRoot',{
			controller: TodosController,

			templateUrl:'todos/todo-root.html'
		});
	TodosController.$inject = ['TodosService'];

	function TodosController(TodosService){

		var _self = this;

		this.completeTodo = function($event){
			var todo = $event.todo;

			_self.todos = _self.todos.map(function(item){
				return item.id === todo.id ? Object.assign({}, item, {complete: true}) : item
			});
		};

		this.removeTodo = function($event){
			var todo = $event.todo;

			_self.todos = _self.todos.filter(function(item){
				return todo.id !=== item.id;
			});
		};

		this.addTodo = function($event){
			var label = $event.label;

			_self.todos.push({label, id: _self.todos.length + 1});
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