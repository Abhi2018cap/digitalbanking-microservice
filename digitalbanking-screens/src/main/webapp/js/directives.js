'use strict';
var digitalbankingDirectives = angular.module('digitalbankingDirectives', []).config( [
'$compileProvider',
function( $compileProvider )
{ 
$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile):|data:image\//);
}
]);

digitalbankingDirectives.directive("limitTo", [function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            var limit = parseInt(attrs.limitTo);
            var exclude = /Backspace|Enter/;
            angular.element(elem).on("keydown", function(e) {
                if (event.keyCode > 47 && event.keyCode < 58) {
                    if (this.value.length == limit) e.preventDefault();
                } else if (!exclude.test(event.key)) {
                    e.preventDefault();
                }
            });
        }
    }
}]);

digitalbankingDirectives.directive('menuDirective',  function(){
	return {
		restrict:'E',
		templateUrl: 'includes/menu.html'
	}
});

digitalbankingDirectives.directive('accountSummaryDirective',  function(){
	return {
		restrict:'E',
		templateUrl: 'includes/AccountsSummary.html',
		controller: 'AccountsSummaryController'
	}
});

digitalbankingDirectives.directive('loanSummaryDirective',  function(){
	return {
		restrict:'E',
		templateUrl: 'includes/LoansSummary.html',
		controller: 'LoansSummaryController'
	}
});

digitalbankingDirectives.directive('cardSummaryDirective',  function(){
	return {
		restrict:'E',
		templateUrl: 'includes/CardsSummary.html',
		controller: 'CardsSummaryController'
	}
});

digitalbankingDirectives.directive('investmentSummaryDirective',  function(){
	return {
		restrict:'E',
		templateUrl: 'includes/InvestmentsSummary.html',
		controller: 'InvestmentsSummaryController'
	}
});

digitalbankingDirectives.directive('transactionSummaryDirective',  function(){
	return {
		restrict:'E',
		templateUrl: 'includes/TransactionDetails.html',
		controller: 'TransactionsSummaryController'
	}
});

digitalbankingDirectives.directive('payeeListDirective',  function(){
	return {
		restrict:'E',
		templateUrl: 'includes/PayeeList.html',
		controller: 'PayeeListController'
	}
});
