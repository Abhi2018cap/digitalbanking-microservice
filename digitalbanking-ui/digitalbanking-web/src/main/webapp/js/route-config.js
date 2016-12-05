(function(){
	angular.module('routes',['ngRoute'])
	.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'includes/login.html',
		controller : 'LoginController'
	});

	$routeProvider.otherwise({
		redirectTo : '/'
	});
} ])
})();