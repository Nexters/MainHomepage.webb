var app = angular
  .module("app",['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
          .when('/',{
              templateUrl: './templates/About/About.html'
          })
          .when('/Activities', {
              templateUrl: './templates/Activities/asd.html'
          })
          .when('/Contact', {
              templateUrl: './templates/Activities/asd.html'
          })
          .when('/Membership', {
              templateUrl: './templates/Activities/asd.html'
          })
          .otherwise('/');
    }]);
