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
            TodosService.getTodos().then(function done(response) {
      				_self.todos = response;
      			}, function fail(error) {
      				console.log(error);
      			});
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
            console.log("pase por el ctrl1 componenet");
            TodosService.addTodo(label).then(function successCallback(response) {
                console.log("pase por el ctrl2");
                _self.todos = response;
            }, function errorCallback(error) {
                console.log(error);
            });
        };
	}

})();
