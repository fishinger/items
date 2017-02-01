angular.module('app')
.factory('itemFactory', ['baseUrl', '$resource', function(baseUrl, $resource) {
    var service = {},
        items = $resource(baseUrl + ':id', {id: '@id'});

    service.getItems = function() {
        return items.query();
    }
    service.create = function(item) {
        /*
         * new items(item) - добавляет объекту спец. свойства resource ($save, $delete и т.д.)
         */
        return new items(item).$save();
    }
    service.delete = function(item) {
        return item.$delete();
    }
    service.update = function(item) {
        return item.$save();
    }
    return service;
}]);