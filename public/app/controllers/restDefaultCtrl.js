angular.module('app')
.constant('baseUrl', 'http://localhost:2403/items/')
.controller('restCtrl', ['$scope', '$http', 'baseUrl', function($scope, $http, baseUrl) {
	$scope.view = 'table';
	$scope.refresh = function() {
		$http.get(baseUrl).success(function(data) {
			$scope.items = data;
		});
	}

	$scope.editOrCreate = function(item) {
		$scope.editItem = item ? angular.copy(item) : {};
		$scope.view = 'edit';
	}

	$scope.saveOrEdit = function(item) {
		if(angular.isDefined(item.id)) {
			$scope.update(item);
		} else {
			$scope.create(item);
		}
	}

	$scope.update = function(item) {
		$http({
			url: baseUrl + item.id,
			method: 'PUT',
			data: item
		}).success(function(data) {
			for(var i = 0; i < $scope.items.length; i++) {
				if(data.id == $scope.items[i].id) {
					$scope.items[i] = data;
					break;
				}
			}
			$scope.view = 'table';
		})
	}
	$scope.create = function(item) {
		$http.post(baseUrl, item).success(function(data) {
			$scope.items.push(data);
			$scope.view = 'table';
		})
	}

	$scope.delete = function(item) {
		$http({
			method: 'DELETE',
			url: baseUrl + item.id
		}).success(function(){
			$scope.items.splice($scope.items.indexOf(item), 1);
		})
	}

	$scope.cansel = function() {
		$scope.editItem = '';
		$scope.view = 'table';
	}

	$scope.refresh();
}])