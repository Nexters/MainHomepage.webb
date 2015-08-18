var app = angular
  .module("app",[
    'Activites-productController',
    'ui.router',
    'productFactory'
  ]).config(['$urlRouterProvider','$stateProvider', function ($urlRouterProvider,$stateProvider) {
      $stateProvider
        //About
        .state('About',{
          url:'/',
          templateUrl: "templates/About/About.html"
        })
        //----------Activities start----------------

        //Activities-product start
        .state('Activities-product',{
          url:'/Activities-product',
          templateUrl: "templates/Activities/product.html",
          controller: 'Activites-productController'
        })
        //Activities-product end

        
        $urlRouterProvider.otherwise('/');
}]);
