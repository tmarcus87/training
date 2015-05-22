(function () {

	angular
		.module('app', [])
			.controller('Ctrl102',
				[
					'$scope',
					function ($scope) {
						$scope.$on('MyEvent', function (e, data) {
							$scope.upperMessage = data;
						});
					}
				])
			.controller('Ctrl102_0',
				[
					'$scope',
					function ($scope) {
						$scope.emitMessage = function () {
							$scope.$emit('MyEvent', $scope.inputText + ' by emit.');
						};
						$scope.broadcastMessage = function () {
							$scope.$broadcast('MyEvent', $scope.inputText + ' by broadcast.');
						};
					}
				])
			.controller('Ctrl102_0_0',
				[
					'$scope',
					function ($scope) {
						$scope.$on('MyEvent', function (e, data) {
							$scope.lowerMessage1 = data;
						});
					}
				])
			.controller('Ctrl102_0_1',
				[
					'$scope',
					function ($scope) {
						$scope.$on('MyEvent', function (e, data) {
							e.preventDefault();
							$scope.lowerMessage2 = data;
						});
					}
				])
			
			;

})();
