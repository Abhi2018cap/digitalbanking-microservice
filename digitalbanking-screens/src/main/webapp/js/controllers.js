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

digitalbankingControllers.controller('RegistrationController',['$scope', '$location',function($scope,$location){
	$scope.acc_infotab=true;
	$scope.auth_infotab=false;
	$scope.userIdtab=false;
	$scope.passwordtab=false;
	
	$scope.creditCardNum='';
	$scope.cvvNum = '';
	$scope.pincode='';
	$scope.CreditExpDate='';
	$scope.dob='';
	$scope.debitCardNum='';
	$scope.userId='';
	$scope.userPassword='';
	$scope.confirmPassword='';
	
	$scope.isMatch=false;
	$scope.isValidPassword=false;
	$scope.comparePasswords=function(){
		if($scope.userPassword==$scope.confirmPassword){
			$scope.isMatch=false;
			$location.path('/');
		}
		else{
			$scope.isMatch=true;
		}
	}
	$scope.validatePassword=function(value){
		var strongRegEx=new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
		if($scope.strongRegEx==$scope.value){
			$scope.isValidPassword=true;
		}
		else{
			$scope.isValidPassword=false;
		}
		console.log($scope.isValidPassword);
	}
	
	$scope.accountInfo='';
	$scope.showCredit=function(){
		if($scope.accountInfo=='credit'){
			$scope.credit=true;
			$scope.banking=false;
		}
		else if($scope.accountInfo=='banking'){
			$scope.credit=false;
			$scope.banking=true;
		}
		else
		{
			$scope.credit=false;
			$scope.banking=false;
		}
	}
	
	$scope.go=function(index){
		if(index==1){
			$scope.acc_infotab=false;
			$scope.auth_infotab=true;
			$scope.userIdtab=false;
			$scope.passwordtab=false;
		}
		else if(index==2){
			$scope.acc_infotab=false;
			$scope.auth_infotab=false;
			$scope.userIdtab=true;
			$scope.passwordtab=false;
		}
		else if(index==3){
			$scope.acc_infotab=false;
			$scope.auth_infotab=false;
			$scope.userIdtab=false;
			$scope.passwordtab=true;
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
    $scope.accGridOptions = { data: 'accountsSummary',
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

digitalbankingControllers.controller('LoansSummaryController', [ '$scope', 'LoanService', function($scope, LoanService) {

    $scope.loanSummary = {};
    $scope.loanGridOptions = { data: 'loanSummary',
    columnDefs: [{field:'loanType', displayName:'Loan Type'}, {field:'loanAmount', displayName:'Loan Amount'}, 
                 {field:'amountPaid', displayName:'Amount Paid'},{field:'loanBalance', displayName:'Loan Balance'}, 
                 {field:'', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a class="transaction-link-style" href="{{row.getProperty(col.field)}}">View Trasaction Details</a></div>'}]};
    getLoanSummary();
    function getLoanSummary()
    {
    	    LoanService.getLoanSummary().success(function(data, status, headers, config) {
                    if(data != null)
                    {
                            $scope.loanSummary = data;
                            
                    }
            }).error(function(){
            	$scope.loanSummary =  [{"loanType": "Personal", "loanAmount": "700000", "amountPaid":"200000", "loanBalance": "500000"}, 
            	                       {"loanType": "Home", "loanAmount": "700000", "amountPaid":"200000", "loanBalance": "500000"}];
            	//$scope.gridOptions = { data: 'accountsSummary' };
            });
    }
}]);

digitalbankingControllers.controller('CardsSummaryController', [ '$scope', function($scope) {

}]);

digitalbankingControllers.controller('InvestmentsSummaryController', [ '$scope', function($scope) {

}]);

digitalbankingControllers.controller('TransactionsSummaryController', [ '$scope', 'TransactionService', function($scope, TransactionService) {

    $scope.transactionDetails = {};
    $scope.transactionGridOptions = { data: 'transactionDetails',
    columnDefs: [{field:'transactionTo', displayName:''}, {field:'Amount', displayName:'Amount'}, {field:'DebitCredit', displayName:''}]};
    getTransactionDetails();
    function getTransactionDetails()
    {
    	TransactionService.getTransactionDetails().success(function(data, status, headers, config) {
                    if(data != null)
                    {
                            $scope.transactionDetails = data;
                            
                    }
            }).error(function(){
            	$scope.transactionDetails =  [{"transactionTo": "PayTM mobile solutions", "Amount": "1000", "DebitCredit":"Dr"}, 
            	                              {"transactionTo": "techProcess solutions", "Amount": "300", "DebitCredit":"Dr"},
            	                              {"transactionTo": "PayTM mobile solutions", "Amount": "1000", "DebitCredit":"Dr"},
            	                              {"transactionTo": "Life insurance solutions", "Amount": "5000", "DebitCredit":"Dr"},
            	 							  {"transactionTo": "9110120345678", "Amount": "1500", "DebitCredit":"Cr"}];
            	//$scope.gridOptions = { data: 'accountsSummary' };
            });
    }
}]);

digitalbankingControllers.controller('PayeeListController', [ '$scope', 'PayeeService', function($scope, PayeeService) {

    $scope.payeeList = {};
    $scope.payeeGridOptions = { data: 'payeeList',
    columnDefs: [{field:'payeeName', displayName:'Payee Name'}, {field:'bank', displayName:'Bank'}, {field:'type', displayName:'Type'}]};
    getPayeeList();
    function getPayeeList()
    {
    	PayeeService.getPayeeList().success(function(data, status, headers, config) {
                    if(data != null)
                    {
                            $scope.payeeList = data;
                            
                    }
            }).error(function(){
            	$scope.payeeList =  [{"payeeName": "Mike", "bank": "Axis", "type":"NEFT"}, 
            	                     {"payeeName": "John", "bank": "Citi", "type":"IMPS"},
            	                     {"payeeName": "Meera", "bank": "ICICI", "type":"NEFT"},
            	                     {"payeeName": "Chandler", "bank": "Barclays", "type":"IMPS"},
            	                     {"payeeName": "Joe", "bank": "SBI", "type":"NEFT"}];
            });
    }
}]);


