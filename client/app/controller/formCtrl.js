patient_portal.controller('FormCtrl', function($scope, AuthFactory,$location, $http){
  $scope.currentUser = AuthFactory.getCurrentPatient()
  $scope.keydown = ()=>{
    console.log("$scope.first_name",$scope.currentUser.firstname);
  }
  $scope.personal = () =>{
      console.log("$scope.fdob",$scope.dob);
    $http.patch(`http://localhost:3000/api/v1/patient/${$scope.currentUser.id}`,{
      firstname: $scope.currentUser.firstname,
      lastname: $scope.currentUser.last_name,
      dob: $scope.currentUser.dob,
      ethnicity: $scope.currentUser.ethnicity,
      address: $scope.currentUser.address,
      phonenumber: $scope.currentUser.phone
    })
    .then((data) =>{
      console.log("updated in patients table")
    })
  }
})
