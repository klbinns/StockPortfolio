'use strict'

var services = angular.module('PortfolioTrackerServices', ['ngResource']);


services.factory('Portfolio', function($resource){
  return $resource('data/portfolio.json');
});