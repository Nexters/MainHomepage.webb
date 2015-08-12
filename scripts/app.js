var app = angular
  .module("app",['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
          .when('/',{
              templateUrl: './templates/home/home.html'
          })
          .when('/asd', {
              templateUrl: './templates/Activities/asd.html'
          });
    }]);
