var activitesController = angular.module('activitesController', []);

activitesController.controller('activitesController','User',function ($scope,User) {
  // body...
  $scope.data="activities";
})

.factory('User',['$http','$q',function($http,$q){

}])
