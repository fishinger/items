'use strict';
var app = angular.module('app', [
		'ui.router',
		'ngSanitize',
		'ngResource',
		'ngMaterial',
        'ngMessages'
	]);
app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$urlRouterProvider.otherwise('/');
	 $locationProvider.html5Mode({
	 	enabled: true,
	 	requireBase: false
	 });
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'modules/wedding/views/wedding.html'
		})
		.state('items', {
			url: '/items',
			templateUrl: 'modules/items/views/items.html'
		})
		.state('items.item', {
			url: '/:item',
            views: {
                '@': {
                    templateUrl: 'modules/items/views/items.item.html',
                    controller: function($scope, $stateParams) {
                        $scope.name = $stateParams.item;
                    }
                }
            }
		})
		.state('login', {
			url: '/login',
			templateUrl: 'modules/auth/views/login.html'
		})
        .state('reg', {
            url: '/reg',
            templateUrl: 'modules/auth/views/reg.html'
        })
})

app.controller('mainCtrl', ["$scope", "$mdDialog", function($scope, $mdDialog){
	$scope.statusAside = false;
	$scope.toggleAside = function() {
		$scope.statusAside = !$scope.statusAside;
	}
	$scope.closeAside = function() {
		if($scope.statusAside) {
			$scope.statusAside = false;
		}
	}
	$scope.logout = function () {
		dpd.users.logout();
	}

	$scope.showAlert = function(ev) {
		$mdDialog.show(
			$mdDialog.alert()
				.parent(angular.element(document.querySelector('#popupContainer')))
				.clickOutsideToClose(true)
				.title('This is an alert title')
				.textContent('You can specify some description text in here.')
				.ariaLabel('Alert Dialog Demo')
				.ok('Got it!')
				.targetEvent(ev)
		);
	};
	$scope.showPrerenderedDialog = function(ev) {
		$mdDialog.show({
			contentElement: '#myDialog',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose: true
		});
	};
	$scope.closeDialog = function() {
		$mdDialog.hide();
	};
}]);
