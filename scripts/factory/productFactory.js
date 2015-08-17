
var productFactory = angular.module('productFactory', [

]);
productFactory.factory('product',function ($http,$q) {
  var product = {};

  product.test1 = function () {
    var deferred = $q.defer();
    setTimeout(function () {
      deferred.resolve("success resolve");
    },2000)
    return deferred.promise;
  }

  product.test2 = function (data) {
    var deferred = $q.defer();
    setTimeout(function () {
      deferred.resolve(data+"success resolve");
    },1000)
    return deferred.promise;
  }


  return product;
})
