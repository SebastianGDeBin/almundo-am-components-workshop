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
            TodosService.getTodos()
				.then(function success(response) {
      				_self.todos = response;
      			}, function error(error) {
      				console.log(error);
      			});
        };

        this.addTodo = function($event){
            TodosService.addTodo($event)
                .then(function success(response) {
                    _self.todos = response;
                }, function error(error) {
                    console.log(error);
                });
        };

		this.onComplete = function($event){
			TodosService.onComplete($event)
				.then(function success(response) {
					_self.todos = response;
				}, function error(error) {
					console.log(error);
				});
		};


		this.onDelete = function($event){
            console.log("ctrl root");
			TodosService.onDelete($event)
				.then(function success(response){
					_self.todos = response;
				}, function error(error){
					console.log(error);
				});
		};

	}

})();
