'use strict';
var digitalbankingDirectives = angular.module('digitalbankingDirectives', []).config( [
'$compileProvider',
function( $compileProvider )
{ 
$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile):|data:image\//);
}
]);

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
