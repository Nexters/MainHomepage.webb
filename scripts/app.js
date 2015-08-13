var app = angular
  .module("app",[
    'ngRoute',
    'membershipController',
    'activitesController',
    'contactController'
  ]).config(['$routeProvider', function ($routeProvider) {
        $routeProvider
          .when('/',{
              templateUrl: './templates/About/About.html'
          })
          .when('/Activities', {
              templateUrl: './templates/Activities/Activities.html',
              controller: 'activitesController'
          })
          .when('/Contact', {
              templateUrl: './templates/Activities/Activities.html',
              controller: 'contactController'
          })
          .when('/Membership', {
              templateUrl: './templates/Activities/Activities.html',
              controller: 'membershipController'
          })
          .otherwise('/');
    }]);
