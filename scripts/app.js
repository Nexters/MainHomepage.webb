var app = angular
  .module("app",[
    'Activites.productController',
    'Activites.memberController',
    'ui.router',
    'productFactory',
    'memberFactory'
  ]).config(['$urlRouterProvider','$stateProvider', function ($urlRouterProvider,$stateProvider) {
      $stateProvider
        //About
        .state('About',{
          url:'/',
          templateUrl: "templates/About/About.html"
        })
        //----------Activities start----------------
        .state('Activities',{
          url:'/Activities',
          templateUrl: "templates/Activities/Activities.html",

        })
        .state('Activities.member',{
          url:'/member',
          templateUrl: "templates/Activities/Activities.member.html",
          controller: 'Activites.memberController'
        })
        .state('Activities.product',{
          url:'/product',
          templateUrl: "templates/Activities/Activities.product.html",
          controller: 'Activites.productController'
        })
        //Activities-product end


        $urlRouterProvider.otherwise('/');
}])
.value('environment',{
  domain: "http://localhost:8080/NextersHomepage/"
})
