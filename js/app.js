angular.module("app", ["ngRoute"])
	.config(["$routeProvider", function($routeProvider) {
	    $routeProvider
	      .when('/home', {
	          templateUrl: 'home.html'
	      })
	      .when('/about-us', {
	          templateUrl: 'about-us.html'
	      })
	      .when('/service', {
	          templateUrl: 'service.html'
	      })
	      .when('/team', {
	          templateUrl: 'team.html'
	      })
	      .when('/contact', {
	          templateUrl: 'contact.html'
	      })
	      .otherwise({
	          templateUrl: 'home.html'
	      });
	}]);