(function(){
	'use strinct';

	angular
		.module('todos')
		.component('todoList',{
			bindings:{
				todos:'<',
				onComplete:'&',
				onDelete:'&'
			},
			template:"todos/todo-list/todo-list.html"
		});
		
});