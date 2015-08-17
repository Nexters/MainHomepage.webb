var app = angular
  .module("app",[
    'membershipController',
    'activitesController',
    'contactController',
    'ui.router',
    'productFactory'
  ]).config(['$urlRouterProvider','$stateProvider', function ($urlRouterProvider,$stateProvider) {
      $stateProvider
        //About
        .state('About',{
          url:'/',
          templateUrl: "templates/About/About.html"
        })
        //Activities
        .state('Activities-product',{
          url:'/Activities-product',
          templateUrl: "templates/Activities/product.html",
          controller: 'activitesController'
        })
        .state('Activities-member',{
          url:'/Activities-member',
          templateUrl: "templates/Activities/member.html"
        })
        .state('Activities-notice',{
          url:'/Activities-notice',
          templateUrl: "templates/Activities/notice.html"
        })
        .state('Activities-media',{
          url:'/Activities-media',
          templateUrl: "templates/Activities/media.html"
        })
        .state('Activities-memories',{
          url:'/Activities-memories',
          templateUrl: "templates/Activities/memories.html"
        })
        //Contact
        .state('Contact',{
          url:'/Contact',
          templateUrl: "templates/Activities/Activities.html"
        })

        $urlRouterProvider.otherwise('/');
}]);
