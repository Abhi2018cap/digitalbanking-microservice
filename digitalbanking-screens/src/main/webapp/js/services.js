'use strict';

/* Services */
var digitalbankingServices = angular.module('digitalbankingServices', [ 'ngResource' ]);

digitalbankingServices.factory('LoginService',['$http','$location','$rootScope', function($http, $location, $rootScope) {
	var service = {};
	service.Login = function(username, password) {
		return $http.post('webapi/security/authenticate', {
			userName : username,
			password : password
		});
	};
	service.isLoggedIn = function() {		
		$http.defaults.headers.common.authToken = sessionStorage.authToken;
		return $http.post('webapi/security/isLoggedIn');
	};
	return service;
}]);

digitalbankingServices.factory('User', [function() {
	var sdo = {
		isLogged: false,
		username: '',
		password: ''
	};
	return sdo;
}]);

digitalbankingServices.factory('AccountsService',['$http','$location','$rootScope', '$q', function($http, $location, $rootScope) {

    var service = {};
    service.getAccountSummary = function() {  
    	 return $http.get('http://localhost:8090/accservices/556677/accounts');
    };

    return service;
}]);



/*digitalbankingServices.factory('userService',['$rootScope',function($rootScope){
	var service={
			model:{
				firstName:'',
				lastName:'',
				username:'',
				password:'',
				confirmPassword:''
			},
			
			SaveData:function(){
				if(password==confirmPassword){
					sessionStorage.userService=angular.toJson(service.model);
				}
				else
					{
						console.log('Password doesnot match');
					}
			},
			RestoreData:function(){
				service.model=angular.formJson(sessionStorage.userService);
			},
			ResetData:function(){
				
			}
		}
	
		$rootScope.$on('savedata',service.SaveData);
		$rootScope.$on('restoredata',service.RestoreData);
		
		return service;
}]);

digitalbankingServices.factory('passwordChangeService',['$rootScope',function($rootScope){
	
}]);
*/