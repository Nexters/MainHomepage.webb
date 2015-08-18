
var productFactory = angular.module('productFactory', [

]);
productFactory.factory('product',function ($http,$q) {
  var product = {};


  product.getProductList = function () {

    var deferred = $q.defer();

    $http.post('/asd.do', {msg:'hello word!'}).
    then(function(response) {
      // this callback will be called asynchronously
      // when the response is available
      deferred.resolve(response.data);
    }, function(response) {
      //deferred.rejec
      console.log("err"+ response);
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    })
    return deferred.promise;
  }

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
