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
	 //$locationProvider.html5Mode({
	 //	enabled: true,
	 //	requireBase: false
	 //});
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/views/main.html'
		})
		.state('rest', {
			url: '/rest',
			templateUrl: 'app/views/rest.html'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'app/views/login.html'
		})
        .state('reg', {
            url: '/reg',
            templateUrl: 'app/views/reg.html'
        })
		.state('date', {
			url: '/date',
			templateUrl: 'app/views/date.html'
		})
		.state('edit', {
			url: '/edit',
			templateUrl: 'app/views/edit.html',
			controller: function($scope) {
				$scope.items = ['item1', 'item2', 'item3'];
			}
		})
		.state('edit.item', {
			url: '/:item',
			templateUrl: 'app/views/edit.item.html',
			controller: function($scope, $stateParams) {
				$scope.name = $stateParams.item;
			}
		})
})

app.controller('mainCtrl', ["$scope", '$timeout', '$mdToast', function($scope, $timeout, $mdToast){
	$scope.statusAside = false;
	$scope.toggleAside = function() {
		$scope.statusAside = !$scope.statusAside;
	}
	$scope.closeAside = function() {
		if($scope.statusAside) {
			$scope.statusAside = false;
		}
	}
	$scope.day = new Date();
	$scope.showInfo = function(date) {
        $scope.getInfo = getActiveUser(date, date.getDate());
    }
	$scope.showInfo($scope.day);
	$scope.logout = function () {
		dpd.users.logout();
	}
}]);

app.controller('toastCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.toastMessage = $rootScope.toastMessage;
}]);

app.controller('loginCtrl', ['$scope', '$rootScope', '$mdToast', '$location', function($scope, $rootScope, $mdToast, $location) {
	$scope.login = function (user, valid) {
        if(valid) {
            console.log(dpd.users.me(console.log))
            dpd.users.login({
                username: user.username,
                password: ''+user.password
            }, function(res, err) {
                if(err) {
                    $rootScope.toastMessage = 'Неверный логин или пароль';
                    $mdToast.show({
                        hideDelay   : 3000,
                        position    : 'top right',
                        templateUrl : 'app/views/toast.html',
                        toastClass: 'toast--error',
                        controller: 'toastCtrl'
                    });
                    return false;
                }
                $rootScope.toastMessage = 'Вы авторизовались';
                $mdToast.show({
                    hideDelay   : 3000,
                    position    : 'top right',
                    templateUrl : 'app/views/toast.html',
                    toastClass: 'toast--success',
                    controller: 'toastCtrl'
                });
                $location.url('rest');
            })
        }
	}
}]);
app.controller('regCtrl', ['$scope', '$rootScope', '$mdToast', '$location', '$resource', 'usersUrl', function($scope, $rootScope, $mdToast, $location, $resource, usersUrl) {
    $scope.reg = function (user, valid) {
        if(valid) {
            $scope.itemResource = $resource(usersUrl + ':id', {id: '@id'});

            new $scope.itemResource(user).$save().then(function(data) {
                $rootScope.toastMessage = 'Регистрация прошла успешно';
                $mdToast.show({
                    hideDelay   : 3000,
                    position    : 'top right',
                    templateUrl : 'app/views/toast.html',
                    toastClass: 'toast--success',
                    controller: 'toastCtrl'
                });
                $location.url('login');
            }, function(data) {
                console.log(data)
            });
        }
    }
}]);
function getActiveUser(date, day) {
	var dayUser = {},
		dayActive = date ? date : new Date(),
		dayStart = new Date(2016, 11, 12);

	if(day % 2) {
		dayUser.name = 'Павел';
	} else {
		dayUser.name = 'Ксения';
	}
	if(day == 1) {
		dayUser.name = 'Ксения';
		dayUser.number = 20;
		return dayUser;
	}

	if(day > 1 && day < 7) {
		dayStart = new Date(2017, 0, 1);
		if(day % 2) {
			dayUser.name = 'Ксения';
		} else {
			dayUser.name = 'Павел';
		}
	}
	dayUser.number = dayActive.getDate() - dayStart.getDate();
	return dayUser;
}

//Controller
app.controller('baseCtrl', ['$scope', function($scope) {
	$scope.message = '-----';
	$scope.getMessage = function() {
		$scope.message = 'time ' + new Date().toLocaleTimeString();
	}
}]);
app.controller('childCtrl', ['$scope', function($scope) {
	$scope.getMessage1 = function() {
		$scope.message = 'time ' + new Date().toLocaleTimeString();
	}
}])

app.controller('baseCtrl2', ['$scope', function($scope) {
	$scope.message = {time: '-----'}
	$scope.getMessage = function() {
		$scope.message.time = 'time ' + new Date().toLocaleTimeString();
	}
}]);
app.controller('childCtrl2', ['$scope', function($scope) {
	$scope.getMessage1 = function() {
		$scope.message.time = 'time ' + new Date().toLocaleTimeString();
	}
}])

app.controller('senderCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
	$scope.sendMessage = function() {
		$rootScope.$broadcast('updateInfo', {
			info: $scope.valInput
		})
	}
}])

app.controller('receverCtrl', ['$scope', function($scope) {
	$scope.$on('updateInfo', function(event, data) {
		$scope.info = data.info
	})
}])
app.controller('emitCtrl', ['$scope', function($scope) {
	$scope.$on('updateInfo', function(event, data) {
		//event.stopPropagation(); // остановить распространение события
		$scope.info = data.info
	})
	$scope.updateMessage = function() {
		$scope.$emit('updateInfo', {
			info: $scope.valInput
		})
	}
}])