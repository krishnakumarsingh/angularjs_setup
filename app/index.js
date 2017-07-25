import angular from 'angular';
import uirouter from 'angular-ui-router';
import { Router } from './router';

angular.module('angularWebpack', [uirouter])
	.config(Router)
	.controller('HeaderCtrl', function($scope){
		$scope.name = "Krishna";
	})
	.controller('FooterCtrl', function($scope){
		$scope.name = "Kumar";
	})
	.controller('HomeCtrl', function($scope){
		$scope.name = "Singh";
	})
	.controller('ShopCtrl', function($scope){
		$scope.name = "L";
	})