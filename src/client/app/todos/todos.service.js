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
            return $http.put('/todos',event.todo)
                .then(function(response){
                    return response.data;
                });
        }

        function onDelete(event) {
            return $http.delete(`/todos?label=${event.todo.label}`)
                .then(function(response){
                    return response.data;
                });
        }
	}
})();
