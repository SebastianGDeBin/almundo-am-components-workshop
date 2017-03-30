(function(){
	'use strict';

	angular
		.module('todos')
		.service('TodosService', TodosService);

	TodosService.$inject = [];

	function TodosService(){
		this.getTodos = getTodos;

		function getTodos (){
			return [{
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
		}
	}
})();