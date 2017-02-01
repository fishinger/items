var app = angular.module('app');
app.controller('psCtrl', ["$scope", function($scope){
    $scope.day = new Date();
    $scope.showInfo = function(date) {
        $scope.getInfo = getActiveUser(date, date.getDate());
    }
    $scope.showInfo($scope.day);
}]);
function getActiveUser(date, day) {
    var dayUser = {},
        dayActive = date ? date : new Date(),
        dayStart = new Date(2016, 11, 12);

    if(day % 2) {
        dayUser.name = 'Ïàâåë';
    } else {
        dayUser.name = 'Êñåíèÿ';
    }
    if(day == 1) {
        dayUser.name = 'Êñåíèÿ';
        dayUser.number = 20;
        return dayUser;
    }

    if(day > 1 && day < 7) {
        dayStart = new Date(2017, 0, 1);
        if(day % 2) {
            dayUser.name = 'Êñåíèÿ';
        } else {
            dayUser.name = 'Ïàâåë';
        }
    }
    dayUser.number = dayActive.getDate() - dayStart.getDate();
    return dayUser;
}