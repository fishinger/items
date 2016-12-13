'use strict';
var app = angular.module('app', [
		'ui.router',
		'ngSanitize',
		'ngResource',
		'ngMaterial'
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
			templateUrl: 'pages/main.html'
		})
		.state('rest', {
			url: '/rest',
			templateUrl: 'pages/rest.html'
		})
		.state('edit', {
			url: '/edit',
			templateUrl: 'pages/edit.html',
			controller: function($scope) {
				$scope.items = ['item1', 'item2', 'item3'];
			}
		})
		.state('edit.item', {
			url: '/:item',
			templateUrl: 'pages/edit.item.html',
			controller: function($scope, $stateParams) {
				$scope.name = $stateParams.item;
			}
		})
})
var course = {
	user: 'Pavel',
	courses: [
		{
			name: 'Php',
			status: 'no',
			check: false,
			id: 10,
			view: 'ul'
		},
		{
			name: 'Html',
			status: 'yes',
			check: true,
			id: 11,
			view: 'ol'
		},
		{
			name: 'Css',
			status: 'no',
			check: false,
			id: 12,
			view: 'table'
		},
		{
			name: 'Js',
			status: 'yes',
			check: true,
			id: 13,
			view: 'table'
		}
	]
}
var users = [
  {
    "_id": "5828953dabee192bf5bebb2c",
    "index": 0,
    "isActive": true,
    "balance": 1931.7,
    "age": 29,
    "eyeColor": "blue",
    "name": "Morales Greer",
    "gender": "male",
    "phone": "+7 (860) 465-3595",
    "registered": "Mon May 19 1975 00:12:19 GMT+0300 (RTZ 2 (зима))",
    "endActive": 28
  },
  {
    "_id": "5828953d9774181b1304ec40",
    "index": 1,
    "isActive": false,
    "balance": 3081.4,
    "age": 21,
    "eyeColor": "green",
    "name": "Mayra Perez",
    "gender": "female",
    "phone": "+7 (931) 551-2108",
    "registered": "Fri Sep 18 1998 18:24:40 GMT+0300 (RTZ 2 (зима))",
    "endActive": 29
  },
  {
    "_id": "5828953db13643dca636b515",
    "index": 2,
    "isActive": false,
    "balance": 2735.2,
    "age": 20,
    "eyeColor": "brown",
    "name": "Weaver Tillman",
    "gender": "male",
    "phone": "+7 (850) 516-3629",
    "registered": "Sat May 07 2005 02:52:30 GMT+0300 (RTZ 2 (зима))",
    "endActive": 27
  },
  {
    "_id": "5828953dce90348e8ee5e2a2",
    "index": 3,
    "isActive": true,
    "balance": 3155.7,
    "age": 35,
    "eyeColor": "blue",
    "name": "Velasquez Mclean",
    "gender": "male",
    "phone": "+7 (997) 430-2430",
    "registered": "Mon May 13 2013 03:15:07 GMT+0300 (RTZ 2 (зима))",
    "endActive": 1
  },
  {
    "_id": "5828953d50810da8e9aed673",
    "index": 4,
    "isActive": false,
    "balance": 2108.1,
    "age": 32,
    "eyeColor": "blue",
    "name": "Ila Mueller",
    "gender": "female",
    "phone": "+7 (893) 441-2058",
    "registered": "Sat Jul 13 2013 15:52:30 GMT+0300 (RTZ 2 (зима))",
    "endActive": 24
  },
  {
    "_id": "5828953dd9945f6e716cdb18",
    "index": 5,
    "isActive": false,
    "balance": 3505.3,
    "age": 39,
    "eyeColor": "brown",
    "name": "Roseann Garcia",
    "gender": "female",
    "phone": "+7 (956) 473-2402",
    "registered": "Wed Aug 16 1995 06:18:44 GMT+0300 (RTZ 2 (зима))",
    "endActive": 12
  },
  {
    "_id": "5828953dadfef78bdb66727b",
    "index": 6,
    "isActive": true,
    "balance": 3702.6,
    "age": 27,
    "eyeColor": "blue",
    "name": "Horne Evans",
    "gender": "male",
    "phone": "+7 (891) 555-3680",
    "registered": "Mon May 30 2005 00:15:27 GMT+0300 (RTZ 2 (зима))",
    "endActive": 11
  },
  {
    "_id": "5828953dcd5c1c19c3e18097",
    "index": 7,
    "isActive": true,
    "balance": 3910.5,
    "age": 36,
    "eyeColor": "green",
    "name": "Barker Baxter",
    "gender": "male",
    "phone": "+7 (944) 567-3972",
    "registered": "Thu Nov 22 2001 18:11:30 GMT+0300 (RTZ 2 (зима))",
    "endActive": 5
  },
  {
    "_id": "5828953d04f8b87f21da27b8",
    "index": 8,
    "isActive": false,
    "balance": 1089.7,
    "age": 39,
    "eyeColor": "green",
    "name": "Watkins Burgess",
    "gender": "male",
    "phone": "+7 (882) 427-2806",
    "registered": "Wed Oct 15 1980 08:26:21 GMT+0300 (RTZ 2 (зима))",
    "endActive": 30
  },
  {
    "_id": "5828953d3a3a21f948d79bec",
    "index": 9,
    "isActive": false,
    "balance": 3552.3,
    "age": 24,
    "eyeColor": "blue",
    "name": "Adams Gould",
    "gender": "male",
    "phone": "+7 (867) 479-2180",
    "registered": "Wed Mar 11 1992 19:33:56 GMT+0300 (RTZ 2 (зима))",
    "endActive": 1
  },
  {
    "_id": "5828953d928fbf7496838dba",
    "index": 10,
    "isActive": false,
    "balance": 1537,
    "age": 24,
    "eyeColor": "green",
    "name": "Geneva Fowler",
    "gender": "female",
    "phone": "+7 (912) 531-3475",
    "registered": "Wed Feb 19 1975 06:40:21 GMT+0300 (RTZ 2 (зима))",
    "endActive": 5
  },
  {
    "_id": "5828953daf7702bd1b9e5ac3",
    "index": 11,
    "isActive": true,
    "balance": 1121.2,
    "age": 34,
    "eyeColor": "green",
    "name": "Pittman Steele",
    "gender": "male",
    "phone": "+7 (988) 463-2798",
    "registered": "Mon Dec 25 1989 06:52:08 GMT+0300 (RTZ 2 (зима))",
    "endActive": 10
  },
  {
    "_id": "5828953d1d2fb0b4011e264b",
    "index": 12,
    "isActive": false,
    "balance": 1074.3,
    "age": 34,
    "eyeColor": "green",
    "name": "Puckett Holder",
    "gender": "male",
    "phone": "+7 (871) 571-2126",
    "registered": "Wed Apr 13 2005 03:38:01 GMT+0300 (RTZ 2 (зима))",
    "endActive": 19
  },
  {
    "_id": "5828953dce1caa8aab1aebac",
    "index": 13,
    "isActive": false,
    "balance": 2451.9,
    "age": 23,
    "eyeColor": "brown",
    "name": "Crystal Hensley",
    "gender": "female",
    "phone": "+7 (818) 461-3412",
    "registered": "Sat Nov 27 2004 16:02:40 GMT+0300 (RTZ 2 (зима))",
    "endActive": 26
  },
  {
    "_id": "5828953df172a5aa9d833a4d",
    "index": 14,
    "isActive": true,
    "balance": 3409.9,
    "age": 33,
    "eyeColor": "green",
    "name": "Oneil Lee",
    "gender": "male",
    "phone": "+7 (878) 406-3532",
    "registered": "Tue Jun 28 2005 22:52:20 GMT+0300 (RTZ 2 (зима))",
    "endActive": 26
  }
]
app.controller('mainCtrl', ["$scope", '$timeout', function($scope, $timeout){
	// $scope.message = model;
	// $scope.update = function() {
	// 	$scope.message = $scope.text;
	// }
	$scope.statusAside = false;
	$scope.toggleAside = function() {
		$scope.statusAside = !$scope.statusAside;
	}
	$scope.closeAside = function() {
		if($scope.statusAside) {
			$scope.statusAside = false;
		}
	}
	$scope.playVideo = function() {
        
	}
}]);
app.controller('coursCtrl', ["$scope", function($scope){
	$scope.data = course;
	$scope.addCourse = function() {
		$scope.data.courses.push({
			name: $scope.newcourse,
			status: 'no',
			check: false
		})
	}
	$scope.setStyle = function(status) {
		return status ? 'color: green;' : 'color: red;'
	}
	$scope.setStatus = function(status) {
		return status ? 'Yes' : 'No'
	}

	$scope.select = course.courses[1];

	$scope.url = 'pages/view-list.html';

	$scope.showList = function() {
		$scope.url = 'pages/view-list.html';
	}
	$scope.showTable = function() {
		$scope.url = 'pages/view-table.html';
	}

	$scope.mod = course.courses[0];
}]);

var user = [
	{name: 'task1', status: true, email: 'sdfsf@dfd.df'},
	{name: 'task2', status: false, email: 'erer@dfd.df'},
	{name: 'task3', status: true, email: 'asaa@dfd.df'},
	{name: 'task4', status: false, email: 'rtrtr@dfd.df'}
]

//Validation
app.controller('validCtrl', ['$scope', function($scope) {
	$scope.data = user;
	$scope.addUser = function(user, invalid) {
		if(invalid) {
			$scope.statusValid = invalid;
		} else {
			$scope.statusValid = true;
		}
		if(angular.isDefined(user) &&
			angular.isDefined(user.name) &&
			angular.isDefined(user.status) &&
			angular.isDefined(user.email)) {
			$scope.data.push({
				name: user.name,
				status: user.status,
				email: user.email
			})
			$scope.newUser = '';
		}
	}
	$scope.getError = function(error) {
		if(angular.isDefined(error)) {
			if(error.email) {
				return 'Заполните email правильно'
			}
			if(error.required) {
				return 'Поле должно быть заполнено'
			}
		}
	}
	$scope.required = true;
	$scope.pattern = new RegExp('[a-z]');
}]);

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
app.controller('digestCtrl', ['$scope', '$interval', function($scope, $interval) {
	$scope.counter = 0;
	$scope.addCount = function(val) {
		$scope.counter += val;
	}
	// $interval(function(){ //каждый раз запускается digest цикл
	// 	$scope.counter++
	// }, 1000)
	// setInterval(function(){
	// 	$scope.counter++;
	// 	$scope.$digest(); //принудительно запускаем digest цикл
	// }, 1000)
	//!НО лучше использовать $apply
	// setInterval(function(){
	// 	$scope.$apply(function(){
	// 		$scope.counter++;
	// 	})
	// }, 1000)
}])

//Интеграция angular с jquery
$(document).ready(function() {
	$(document).on('click', '.add-count', function() {
		angular.element(angularRegion).scope().$apply('counter()');
	})
})
app.controller('watchCtrl', ['$scope', function($scope) {
	$scope.disabled = true;
	$scope.$watch('disabled', function(newData, aldData) {
		$('.add-count').attr('disabled', !newData);
	});
	$scope.count = 0;
	$scope.counter = function() {
		$scope.count++;
	}
}])

/*
Фильтры
*/
app.controller('filterCtrl', ['$scope', function($scope) {
	$scope.users = users;
	$scope.getExpryDate = function(count) {
		var now = new Date();
		return now.setDate(now.getDate() + count);
	}

	$scope.usersRange = [];
	for(var i = (0 - $scope.users.length); i <= $scope.users.length; i++) {
		$scope.usersRange.push(i.toString())
	}
	$scope.valSelect = '5';
	$scope.filterUser = function(item) {
		return item.eyeColor == 'blue' || item.age == 20
	}
	$scope.smallAge = function(value) {
		return value.age < 30 ? 0 : value.balance
	}
}])
app.filter('changeCase', function() {
	return function(value, upper) {
		if(angular.isString(value)) {
			return upper ? value.toUpperCase() : value.toLowerCase()
		} else {
			return value
		}
	}
})
app.filter('skipItem', function() {
	return function(value, count) {
		if(angular.isArray(value) && angular.isNumber(count)) {
			if(count < value.length && count > 1) {
				return value.slice(count);
			} else {
				return value;
			}
		} else {
			return value;
		}
	}
})
app.filter('take', function($filter) {
	return function(value, from, count) {
		var arr = $filter('skipItem')(value, from);
		return $filter('limitTo')(arr, count);
	}
})

/*
Directive
*/
app.controller('directiveCtrl', ['$scope', function($scope) {
	$scope.items = course.courses;

	$scope.plusId = function() {
		for(var i = 0; i < $scope.items.length; i++) {
			$scope.items[i].id++;
		}
	}
}])
app.directive('olList', function(){
	return function(scope, element, attr) {
		var data = scope[attr['olList']],
			val = attr['displayVal'];
		if(angular.isArray(data)) {
			var ol = angular.element('<ol>');
			element.append(ol);
			for(var i = 0; i < data.length; i++) {
				ol.append(angular.element('<li>').text(data[i][val]));
			}
		}
	}
})
app.directive('currencyList', function(){
	return function(scope, element, attr) {
		var data = scope[attr['currencyList']],
			val = attr['displayVal'];
		if(angular.isArray(data)) {
			var ol = angular.element('<ol>');
			element.append(ol);
			for(var i = 0; i < data.length; i++) {
				ol.append(angular.element('<li>').text(scope.$eval(val, data[i])));
			}
		}
	}
})
app.directive('updateDir', function(){
	return function(scope, element, attr) {
		var data = scope[attr['updateDir']],
			val = attr['displayVal'];
		if(angular.isArray(data)) {
			var ol = angular.element('<ol>');
			element.append(ol);
			for(var i = 0; i < data.length; i++) {
				(function() {
					var li = angular.element('<li>')
					ol.append(li);
					var index = i;

					var votchFunc = function(wotcScope) {
						return wotcScope.$eval(val, data[index])
					}
					scope.$watch(votchFunc, function(newVal, oldVal) {
						li.text(newVal)
					})
				}())
					
			}
		}
	}
})

app.controller('sanitazeCtrl', ['$scope', '$sanitaze', function($scope, $sanitaze) {
	$scope.text = '<p ngclick="aleft()">dfdfdfdfdf</p><script>function(){}</script>';
	$scope.$watch('text', function(newVal) {
		$scope.text = $sanitaze(newVal);
	})
}])
// app.config(function ($httpProvider) {
//     $httpProvider.defaults.transformResponse.push(function (response, headers) {
//         var items = [];
//         var elements = angular.element(response.trim()).find("item");
//         for (var i = 0; i < elements.length; i++) {
//             var item = elements.eq(i);
//             items.push({
//                 name: item.attr("name"),
//                 price: item.attr("price")
//             });
//         }
//         return items;
//     })
// })
app.controller('ajaxCtrl', ['$scope', '$http', function($scope, $http) {
	var config = {
		transformResponse: function(data) {
			var items = angular.element(data.trim()).find('item'),
				dataItems = [];
			items.map(function(e) {
				var item = items.eq(e);
				dataItems.push({
					name: item.attr('name'),
					price: item.attr('price')
				})
			})
			return dataItems;
		}
	}
	var configXml = {
		headers: {
			'content-type': 'application/xml'
		},
		transformRequest: function(data) {
			var rootElem = angular.element('<xml>'),
				items = angular.element('<items>');
			data.map(function(e) {
				var item = angular.element('<item>');
				item.attr('name', e.name);
				item.attr('price', e.price);
				items.append(item);
			})
			rootElem.append(items);
			return rootElem.html();
		}
	}
	$scope.getData = function() {
		$http.get('data/data.json').success(function(data) {
			$scope.items = data;
		})
	}
	$scope.getXml = function() {
		$http.get('data/data.xml', config).success(function(data) {
			$scope.xml = data;
		})
	}
	$scope.sendXml = function() {
		$http.post('sdfsdf.html', $scope.xml, configXml);
	}
	// $scope.getXml = function() {
	// 	$http.get('data/data.xml').success(function(data) {
	// 		$scope.defaultxml = data;
	// 	})
	// }
}])
