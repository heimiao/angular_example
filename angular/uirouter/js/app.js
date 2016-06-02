//声明模块
var myApp = angular.module("myApp", ['ui.router']);

//配置路由
myApp.config(function($stateProvider, $urlRouterProvider) {
	//设置默认的加载模块
	$urlRouterProvider.otherwise('/list');
	$stateProvider.state('list', {
		url: '/list',
		controller:"test",
		templateUrl: 'home.html'
	}).state('list.form', {
		url: '/form',
		templateUrl: 'home/form.html'
	}).state('list.table', {
		url: '/table',
		templateUrl: 'home/table.html'
	}).state('list.list', {
		url: '/list',
		templateUrl: 'home/list.html'
	}).state('about', {
		url: '/about',
		views: {
			'': {
				templateUrl: 'about.html'
			},
			'list@about': {
				templateUrl: 'about/list.html'
			},
			'form@about': {
				templateUrl: 'about/form.html'
			}
		}
	})
});
myApp.controller("test",function($scope){
})