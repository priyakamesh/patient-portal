patient_portal.controller('RegisterCtrl', function($scope, AuthFactory,$location, webStorage){
  $scope.register = () =>{
    if($scope.user_password === $scope.user_confirmPassword) {
       AuthFactory.getter($scope.user_email,$scope.user_password,$scope.user_confirmPassword)
       .then((data) =>{
        $scope.uid = data.data.patient.id
         Materialize.toast("registered successfully", 2000)
        $location.path(`/form`)
       })
    }
  }
})
