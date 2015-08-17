var activitesController = angular.module('activitesController', [

]);
activitesController.controller('activitesController',function ($scope,product) {
  // body...
  //console.log(product);

  //good !!!!
  product.test1().then(product.test2).then(function (data) {
    console.log(data);
  })
  //$scope.data=product;
})
