(function(){
	'use strict';

	angular
		.module('todos')
		.service('TodosService', TodosService);

	TodosService.$inject = [];

	function TodosService(){
		this.getTodos = getTodos;
		this.addTodo = addTodo;
		this.onComplete = onComplete;
		this.onDelete = onDelete;
		
		this.listTodo = [{
            label:'estudiar',
            id:0,
            complete: false
        }, {
            label:'comer',
            id: 1,
            complete: true
        }, {
            label:'dormir',
            id:3,
            complete: false
        }];

		function getTodos (){
			return this.listTodo;
		}
		
		function addTodo(label) {
           this.listTodo.push({label: label, id: this.listTodo.length + 1});
           return this.listTodo;
        }

        function onComplete(todo) {
            return this.listTodo = this.listTodo.map(function(item){
                return item.id === todo.id ? Object.assign({}, item, {complete: true}) : item
            });
        }
        
        function onDelete(id) {
            this.listTodo = this.listTodo.filter(function(item){
                return id !== item.id;
            });
            return this.listTodo;
        }
	}
})();