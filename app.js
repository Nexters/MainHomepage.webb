var app = angular
.module("app",[
  'Activites.productController',
  'Activites.memberController',
  'ui.router',
  'productFactory',
  'memberFactory',
  'ui.bootstrap',
  'carousel'
]).config(['$urlRouterProvider','$stateProvider', function ($urlRouterProvider,$stateProvider) {
  $stateProvider
  //About
  .state('About',{
    url:'/',
    templateUrl: "templates/About/About.html"
  })
  .state('Test',{
    url:'/test',
    templateUrl: "templates/test.html"
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

  //Contact
  .state('Contact',{
    url:'/contact',
    templateUrl: "templates/Contact/Contact.html",
  })
  .state('Contact.sendTo',{
    url:'/sendTo',
    templateUrl: "templates/Contact/Contact.sendTo.html",
  })
  //Contact end


  //Membership
  .state('Membership',{
    url:'/membership',
    templateUrl: "templates/Membership/Membership.html",
  })


  $urlRouterProvider.otherwise('/');
}])
.value('environment',{
  domain: "http://localhost:8080/NextersHomepage/"
})
.controller('navControler',function ($scope,$location,$anchorScroll) {
  $scope.gotoTop = function (){
    // set the location.hash to the id of
    // the element you wish to scroll to.
    $location.hash('top');

    // call $anchorScroll()
    $anchorScroll();
  };
})
