angular.module('app')
.controller('loginCtrl', ['$scope', '$rootScope', '$mdToast', '$location', function($scope, $rootScope, $mdToast, $location) {
    $scope.login = function (user, valid) {
        if(valid) {
            console.log(dpd.users.me(console.log))
            dpd.users.login({
                username: user.username,
                password: ''+user.password
            }, function(res, err) {
                if(err) {
                    $rootScope.toastMessage = 'Неправильный логин или пароль';
                    $mdToast.show({
                        hideDelay   : 3000,
                        position    : 'top right',
                        templateUrl : 'modules/mdToast/views/toast.html',
                        toastClass: 'toast--error',
                        controller: 'toastCtrl'
                    });
                    return false;
                }
                $rootScope.toastMessage = 'Вы авторизовались';
                $mdToast.show({
                    hideDelay   : 3000,
                    position    : 'top right',
                    templateUrl : 'modules/mdToast/views/toast.html',
                    toastClass: 'toast--success',
                    controller: 'toastCtrl'
                });
                $location.url('rest');
            })
        }
    }
}]);