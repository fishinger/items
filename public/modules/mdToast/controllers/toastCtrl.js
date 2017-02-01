angular.module('app')
.controller('toastCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.toastMessage = $rootScope.toastMessage;
}]);