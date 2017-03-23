(function(){
	'use strinct';

	angular
		.module('todos')
		.component('todoForm',{
			controller: TodoFormController,
			bindings:{
				onAdd:'&'
			},
			template:"todos/todo-form/todo-form.html"
		});


	TodoFormController.$inject = []; /*VER ESTO*/

	function TodoFormController(){

		this.$onInit = function(){

		};

		this.submit = function(label){
			this.onAdd({
				$event: {label: this.label}
			});
			this.label = '';
		};

		this.$postLink = function (){

		};

		this.$onChange = function(){

		};

		this.$onDestroy = function(){
			
		};
	};
});