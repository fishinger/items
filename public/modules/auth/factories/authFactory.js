angular.module('app')
.factory('authFactory', ['$resource', 'usersUrl', function($resource, usersUrl) {
    var service = {},
        items = $resource(usersUrl + ':id', {id: '@id'});

    service.regUser = function(user) {
        return new items(user).$save();
    }
    return service;
}]);