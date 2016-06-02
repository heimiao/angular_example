/**
 */
var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
	//设置默认路由转发地址
	$urlRouterProvider.otherwise('/home'); 
	$stateProvider.state('home', { 
		url: '/home',
		templateUrl: 'partial-home.html'
	}).state('home.list', {
		url: '/list',
		templateUrl: 'partial-home-list.html',
		controller: function($scope) {
			$scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
		} 
	}).state('home.paragraph', {
		url: '/paragraph',
		template: 'I could sure use a drink right now.'
		
	}).state('about', { 
		url: '/about',
		views: {
			'': {
				templateUrl: 'partial-about.html'
			},
			"columnOne@about": {
				template: 'Look i am a column one'
			},
			'columnTwo@about': {
				templateUrl: 'table-data.html',
				controller: 'scotchController'
			}
		}
	});
}); 

routerApp.controller('scotchController', function($scope) {
	$scope.message = 'test';
	$scope.scotches = [{
		name: 'Macallan 12',
		price: 50
	}, {
		name: 'Chivas Regal Royal Salute',
		price: 10000
	}, {
		name: 'Glenfiddich 1937',
		price: 20000
	}];
});

