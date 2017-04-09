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

		function addTodo(label) {
            console.log("pase por el todo.service");
            console.log("mostrar el label" + label);
           return $http.post('/todos', label).
               then(function (response) {
               console.log("pase por el todo.service adentro del then");
              return response.data;
           });
        }

        function onComplete(todo) {
            this.listTodo = this.listTodo.map(function(item){
                return item.id === todo.id ? Object.assign({}, item, {complete: true}) : item
            });
            return this.listTodo;
        }

        function onDelete(id) {
            this.listTodo = this.listTodo.filter(function(item){
                return id !== item.id;
            });
            return this.listTodo;
        }
	}
})();
