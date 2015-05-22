(function () {

	angular
		.module('app', [])
			.controller('Ctrl101_1',
				[
					'$rootScope',
					function ($rootScope) {
						$rootScope.setMessage = function (msg) {
							$rootScope.message = msg;
						};
						$rootScope.getMessage = function () {
							return $rootScope.message;
						}
					}
				])
			.controller('Ctrl101_2',
				[
					'$scope',
					function ($scope) {
						$scope.msg;
					}
				])
			;

})();
