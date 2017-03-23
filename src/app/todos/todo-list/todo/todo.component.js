(function () {
	'use strict';

	angular
		.module('todos')
		.component('todo',{
			bindings: {
				item: '<',
				onChange:'&',
				onRemove: '&'
			},
			template:"todos/todo-list/todo/todo.html"
		}
			);
		}
})();