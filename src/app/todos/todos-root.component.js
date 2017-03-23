(function(){
	angular
		.module('todos')
		.component('todosRoot',{
			controller: TodosController,

			template:'todos/todo-root.html'
		});
	TodosController.$inject = ['TodosService'];

	function TodosController(TodosService){

		this.completeTodo = function($event){

		};

		this.removeTodo = function($event){

		};

		this.addTodo = function($event){
			
		};

		this.$onInit = function(){

		};

		this.$onChanges = function(){

		};

		this.$postLink = function(){

		};

		this.$onDestroy = function(){

		};

	}

})();