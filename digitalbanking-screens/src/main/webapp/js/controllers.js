'use strict';

/* Controllers */
var digitalbankingControllers = angular.module('digitalbankingControllers', ['ngStorage', 'digitalbankingDirectives']);

angular.module('routes').controller('routeController', [ '$scope', '$location',function($scope, $location) {
                    $scope.showMenu = $location.path() != '/';
    } ]);


digitalbankingControllers.controller('LoginController', [ '$scope', 
		function($scope) {
			$scope.var1 = "Test scope";
		} ]);

digitalbankingControllers.controller('loginCtrl', [ '$scope','$rootScope', '$http', 'User', 'LoginService', '$location','$localStorage',
	function($scope, $rootScope, $http, User, LoginService , $location,$localStorage) {
		$scope.User = User;
		$rootScope.loggedinUser = '';
		$rootScope.currentDate='';
		$scope.login = function() {
			LoginService.Login($scope.User.username, $scope.User.password).success(function(data, status, headers, config) {
				console.log(data);
				$scope.authResult = data.authResult;
				if($scope.authResult == 'success')
                {
					$rootScope.loggedinUser = User.username;
					$rootScope.currentDate=new Date();
                    $location.path('/home');
                }

			}).error(function(data){
					$rootScope.loggedinUser = User.username;
					$rootScope.currentDate=new Date();
                    $location.path('/home');
			});
		}
		
		$scope.logout = function() {				
			var url = "php/ReadCookie.php?action=delete";
            $http.get(url).success(function (response) {		
                User.password = "";
                User.isLogged = response[0].loggedin;
                User.username = response[0].username;
                $scope.User = User;
            });            								
			User.isLogged = "false";
			User.username = "";
			User.password = "";
			$scope.User = User;
			$("#adminMenu").hide();
		}
	}]);

digitalbankingControllers.controller('RegistrationController',['$scope', function($scope){
	$scope.acc_info=true;
	$scope.auth_info=false;
	$scope.userId=false;
	$scope.ipin=false;
	
	$scope.accountInfo='';
	$scope.showCredit=function(){
		if($scope.accountInfo=='credit'){
			$scope.credit=true;
			$scope.banking=false;
			$scope.PL=false;
			$scope.accoutRep=false;
			$scope.mortgages=false;
		}
		else if($scope.accountInfo=='banking'){
			$scope.credit=false;
			$scope.banking=true;
			$scope.PL=false;
			$scope.accoutRep=false;
			$scope.mortgages=false;
		}
		else if($scope.accountInfo=='PL'){
			$scope.credit=false;
			$scope.banking=false;
			$scope.PL=true;
			$scope.accoutRep=false;
			$scope.mortgages=false;
		}
		else if($scope.accountInfo=='accoutRep'){
			$scope.credit=false;
			$scope.banking=false;
			$scope.PL=false;
			$scope.accoutRep=true;
			$scope.mortgages=false;
		}
		else if($scope.accountInfo=='mortgages'){
			$scope.credit=false;
			$scope.banking=false;
			$scope.PL=false;
			$scope.accoutRep=false;
			$scope.mortgages=true;
		}
	}
	
	$scope.go=function(index){
		if(index==1){
			$scope.acc_info=false;
			$scope.auth_info=true;
			$scope.userId=false;
			$scope.ipin=false;
		}
		else if(index==2){
			$scope.acc_info=false;
			$scope.auth_info=false;
			$scope.userId=true;
			$scope.ipin=false;
		}
		else if(index==3){
			$scope.acc_info=false;
			$scope.auth_info=false;
			$scope.userId=false;
			$scope.ipin=true;
		}
	}
	
	
}]);

digitalbankingControllers.controller('PasswordChangeController',['$scope',function($scope){
	var user={
			username:'',
			oldPassword:'',
			newPassword:'',
			confirmPassword:'',
	}}]);

digitalbankingControllers.controller('HomeController', [ '$scope', function($scope) {
     $scope.tab = 1;
     
     $scope.setTab = function(newTab){
         $scope.tab = newTab;
       };

       $scope.isSet = function(tabNum){
         return $scope.tab === tabNum;
       };
}]);

digitalbankingControllers.controller('AccountsSummaryController', [ '$scope', 'AccountsService', function($scope, AccountsService) {

    $scope.accountsSummary = {};
    $scope.gridOptions = { data: 'accountsSummary',
    columnDefs: [{field:'accountType', displayName:'Account Type'}, {field:'accountNo', displayName:'Account Number'}, 
                 {field:'accountBalance', displayName:'Balance'},{field:'', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a class="transaction-link-style" href="{{row.getProperty(col.field)}}">View Trasaction Details</a></div>'}]};
    getAccountsSummary();
    function getAccountsSummary()
    {
            AccountsService.getAccountSummary().success(function(data, status, headers, config) {
                    if(data != null)
                    {
                            $scope.accountsSummary = data;
                            
                    }
            }).error(function(){
            	$scope.accountsSummary =  [{"accountType": "Saving", "accountNo": "XXXXXXX075", "accountBalance":"60,000"}, 
                  {"accountType": "Current", "accountNo": "XXXXXXX095", "accountBalance":"10,000"}];
            	//$scope.gridOptions = { data: 'accountsSummary' };
            });
    }
}]);


