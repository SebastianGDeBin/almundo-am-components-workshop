(function(){
	'use strict';

	angular
		.module('todos')
		.service('TodosService', TodosService);

	TodosService.$inject = ['$http'];

	function TodosService($http){
		this.getTodos = getTodos;
		this.addTodo = addTodo;
		this.onComplete = onComplete;
		this.onDelete = onDelete;


		function getTodos (){
			return $http.get('/todos')
                .then(function (response) {
                    return response.data;
                });
		}

		function addTodo(todo) {
           return $http.post('/todos', todo)
               .then(function (response) {
                   return response.data;
               });
        }

        function onComplete(event) {
            console.log("todosservice");
            console.log(event);
            console.log(event.todo);
            return $http.put('/todos',event.todo)
                .then(function(response){
                    return response.data;
                });
        }

        function onDelete(event) {
            console.log("todosservice");
            console.log(event);
            console.log(event.todo);

            return $http.delete('/todos',event.todo)
                .then(function(response){
                    return response.data;
                });
        }
	}
})();
