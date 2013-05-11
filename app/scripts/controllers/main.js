'use strict';

var app = angular.module('PortfolioTrackerApp');

app.controller('MainCtrl', function($scope, Portfolio) {

	$scope.portfolioName = "My Portfolio";

	$scope.stockList = Portfolio.query();

	$scope.totalMarketValue = function() {
		var total = 0;
		for (var m = 0; m < $scope.stockList.length; m++) {
			total += $scope.stockList[m].shares * $scope.stockList[m].lastPrice;
		}
		return total;
	};
	
	$scope.addStock = function(newStock){
		$scope.stockList.push(newStock);
	};
	$scope.reset = function(){
		$scope.newStock = {};
	}

});

app.controller('DetailsCtrl', function($scope, $routeParams) {

	$scope.name = $routeParams.symbol;

});

