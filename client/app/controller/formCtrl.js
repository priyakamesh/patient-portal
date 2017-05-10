patient_portal.controller('FormCtrl', function($scope, AuthFactory,$location){
  $scope.currentUser = AuthFactory.getCurrentPatient()
  console.log("$scope.currentUser",$scope.currentUser);
})
