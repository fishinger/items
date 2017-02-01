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
        dayUser.name = '�����';
    } else {
        dayUser.name = '������';
    }
    if(day == 1) {
        dayUser.name = '������';
        dayUser.number = 20;
        return dayUser;
    }

    if(day > 1 && day < 7) {
        dayStart = new Date(2017, 0, 1);
        if(day % 2) {
            dayUser.name = '������';
        } else {
            dayUser.name = '�����';
        }
    }
    dayUser.number = dayActive.getDate() - dayStart.getDate();
    return dayUser;
}