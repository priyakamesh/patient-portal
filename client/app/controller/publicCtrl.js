patient_portal.controller('PublicCtrl', function($scope, AuthFactory){
  $scope.login = () => {
     if (($scope.email === undefined)&&($scope.password === undefined)){
      Materialize.toast("Please enter the email and password",2000)
    }
  AuthFactory.setter($scope.email,$scope.password)
  .then((data) =>{
    console.log("data",data);
  })
  }
})
