angular.module('expedia.service', [])

.factory('expediaService', function ($http) {
	
	var getAll = function(){
		return $http({
			method: 'GET',
			url: '/api/expedia',
		}).then(function (resp) {
			return resp.data;
		});
	};
	return {
		getAll :getAll
	}
});