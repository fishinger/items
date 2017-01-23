angular.module('app')
.controller('restCtrl', ['$scope', '$rootScope', '$http', 'baseUrl', '$resource', 'itemFactory', '$mdToast', function($scope, $rootScope, $http, baseUrl, $resource, itemFactory, $mdToast) {
	$scope.view = 'table';
	$scope.itemResource = $resource(baseUrl + ':id', {id: '@id'});
	$scope.refresh = function() {
		$scope.items = itemFactory.getItems();
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
		itemFactory.update(item).then(function(data) {
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
		itemFactory.create(item).then(function(data) {
			$scope.items.push(data);
			$scope.view = 'table';

            $rootScope.toastMessage = 'Элемент добавлен';
            $mdToast.show({
                hideDelay   : 3000,
                position    : 'top right',
                templateUrl : 'modules/views/toast.html',
                toastClass: 'toast--success',
                controller: 'toastCtrl'
            });
        }, function(data) {
            console.log(data)
        })
	}

	$scope.delete = function(item) {
		itemFactory.delete(item).then(function() {
			_.pull($scope.items, item);
            $rootScope.toastMessage = 'Элемент удален';
            $mdToast.show({
                hideDelay   : 3000,
                position    : 'top right',
                templateUrl : 'modules/views/toast.html',
                toastClass: 'toast--success',
                controller: 'toastCtrl'
            });
		})
	}

	$scope.cansel = function() {
		$scope.editItem = '';
		$scope.view = 'table';
	}


	$scope.refresh();
    globalItem = 'item';

	dpd.items.on('create', function(message) {
		console.log('create!!!!!!!!!');
		$scope.refresh();
	});
	dpd.items.on('changed', function(message) {
		console.log('changed!!!!!!!!!');
		$scope.refresh();
	});
	dpd.items.on('delete', function(message) {
		console.log('delete!!!!!!!!!');
		$scope.refresh();
	});
}])