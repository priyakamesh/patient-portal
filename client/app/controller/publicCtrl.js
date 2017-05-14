patient_portal.controller('PublicCtrl', function($scope, AuthFactory,$location, webStorage){
   $('.tooltipped').tooltip({delay: 50});

  $scope.login = () => {
     if (($scope.email === undefined)&&($scope.password === undefined)){
      Materialize.toast("Please enter the email and password",2000)
    }
    console.log("$scope.email",$scope.email);
   AuthFactory.setter($scope.email,$scope.password)
    .then((data)=>{
      if(!data.message){
          Materialize.toast("logged in", 1000)
          $location.url("/profile")
      }
      else {
        Materialize.toast("Login email/password not found",2000)
      }

  })
}
})
