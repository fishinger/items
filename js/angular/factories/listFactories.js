angular.module('app')
.factory('listFactory', function(){
	var service = {},
		lists = [
			{
				id: 1,
				name: 'Angular'
			},
			{
				id: 2,
				name: 'Developers'
			},
			{
				id: 3,
				name: 'Projects'
			},
			{
				id: 4,
				name: 'Today'
			}
		]
	service.getLists = function(){
		return lists;
	}
	service.addList = function(name){
		lists.push({
			id: _.uniqueId(),
			name: name
		})
	}
	service.removeList = function(list){
		_.pull(lists, list)
	}
	return service;
})