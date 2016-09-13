angular.module("app", ["ngRoute"])
	.config(["$routeProvider", function($routeProvider) {
    $routeProvider.
      when('#team', {
          templateUrl: 'a.html',
          controller: 'ListController'
      }).
      when('/items/:itemId', {
          templateUrl: 'details.html',
          controller: 'DetailsController'
      }).
      otherwise({
          redirectTo: '/'
      });
}]);