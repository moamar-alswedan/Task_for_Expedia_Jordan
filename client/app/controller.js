var controller = angular.module('expedia.controller', [])

controller.controller('expediaController', function ($scope,expediaService) {
	$scope.hotels = [];
	$scope.getAll = function () {
		expediaService.getAll ().then(function (data) {
			$scope.hotels = data.offers.Hotel;
		});
	};
});

