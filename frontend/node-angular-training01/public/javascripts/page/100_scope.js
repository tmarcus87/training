(function () {

	angular
		.module('app', [])
			.controller('Ctrl100',
				[
					function () {}
				])
			.controller('Ctrl100_0',
				[
					'$scope',
					function ($scope) {
						$scope.v = 'parent';
						$scope.getUpperV = function () { return angular.uppercase($scope.v); };
					}
				])
			.controller('Ctrl100_0_0',
				[
					'$scope',
					function ($scope) {
						$scope.v2 = 'child';
					}
				])
			.controller('Ctrl100_1',
				[
					'$scope',
					function ($scope) {
						$scope.v = 128;
						$scope.inc = function () {
							this.v++;
						}
					}
				])
			.controller('Ctrl100_1_0',
				[
					'$scope',
					function ($scope) {
						$scope.decr = function () {
							this.v--;
						}
						$scope.decrParent = function () {
							$scope.$parent.v--;
						}
					}
				])
			.controller('Ctrl100_2',
				[
					function () {
						this.value = 'hoge';
						this.getUpperValue = function () {
							return angular.uppercase(this.value);
						}
					}
				])
			;

})();
