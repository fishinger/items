angular.module('app')
.constant('baseUrl', 'https://items-fishinger.c9users.io:8081/items/')
.controller('restCtrl', ['$scope', '$http', 'baseUrl', '$resource', function($scope, $http, baseUrl, $resource) {
	$scope.view = 'table';
	$scope.itemResource = $resource(baseUrl + ':id', {id: '@id'});
	$scope.refresh = function() {
		$scope.items = $scope.itemResource.query();
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
		item.$save().then(function(data) {
			for(var i = 0; i < $scope.items.length; i++) {
				if(data.id == $scope.items[i].id) {
					$scope.items[i] = data;
					break;
				}
			}
			$scope.view = 'table';
		});
	}
	$scope.create = function(item) {
		/*
		* new $scope.itemResource(item) - добавляет объекту спец. свойства resource ($save, $delete и т.д.)
		*/
		new $scope.itemResource(item).$save().then(function(data) {
			$scope.items.push(data);
			$scope.view = 'table';
			console.log(data);
		})
	}

	$scope.delete = function(item) {
		item.$delete().then(function() {
			_.pull($scope.items, item);
		})
	}

	$scope.cansel = function() {
		$scope.editItem = '';
		$scope.view = 'table';
	}


	$scope.refresh();
}])