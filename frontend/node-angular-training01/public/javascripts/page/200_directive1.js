(function () {

	angular
		.module('app', [])
			.directive('myDirective',
				function () {
					return {
						compile: function compile(tElement, tAttrs, tTransclude) {
							tElement.text('This is my fav directive.');
							return function link(scope, iElement, iAttrs, controller, iTransclude) {
								scope.$watch('message', function (newVal) {
									tElement.text(newVal);
								})
							};
						}
					};
				})
			.directive('myDirectiveA',
				function () {
					return {
						restrict: 'A',
						template: '<pre>This is A.</pre>'
					};
				})
			.directive('myDirectiveE',
				function () {
					return {
						restrict: 'E',
						template: '<pre>This is E.</pre>'
					};
				})
			.directive('myDirectiveC',
				function () {
					return {
						restrict: 'C',
						template: '<pre>This is C.</pre>'
					};
				})
			.directive('myDirectiveM',
				function () {
					return {
						restrict: 'M',
						replace: true,
						template: '<pre>This is M.</pre>'
					};
				})
			.controller('Ctrl01',
				[
					function () {}
				])
			;

})();
