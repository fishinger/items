angular.module('app')
.controller('regCtrl', ['$scope', '$rootScope', '$mdToast', '$location', 'authFactory', function($scope, $rootScope, $mdToast, $location, authFactory) {
    $scope.reg = function (user, valid) {
        if(valid) {
            authFactory.regUser(user).then(function(data) {
                $rootScope.toastMessage = 'Регистрация прошла успешно';
                $mdToast.show({
                    hideDelay   : 3000,
                    position    : 'top right',
                    templateUrl : 'modules/mdToast/views/toast.html',
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