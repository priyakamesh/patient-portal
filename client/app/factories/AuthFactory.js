patient_portal.factory("AuthFactory", function($scope) {
  return {
  setter: (email,password) =>{
    return $http.post(`http://localhost:3000/api/v1/patient/check/.json`,{
      email: $scope.email,
      password: $scope.password
    })
    .then((data) =>{
      console.log("data",data);
    })
  }
}
})
