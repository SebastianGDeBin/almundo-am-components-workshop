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

        this.$onInit = function(){
            _self.todos = TodosService.getTodos();
        };

		this.onComplete = function($event){
			var todo = $event.todo;
			_self.todos = TodosService.onComplete(todo);
		};

		this.onDelete = function($event){
			var id = $event.todo.id;
			_self.todos = TodosService.onDelete(id);
		};

		this.addTodo = function($event){
			var label = $event.label;
			_self.todos = TodosService.addTodo(label);
		};
	}

})();