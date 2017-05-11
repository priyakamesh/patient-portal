patient_portal.controller('ProfileCtrl', function($location,$scope,$http){
   $scope.currentUser = AuthFactory.getCurrentPatient()
  console.log("$scope.currentUser.id",$scope.currentUser.id);
if($scope.currentUser.id) {
  $http.get('http://localhost:3000/api/v1/doctors')
  .then((data) =>{
    $scope.doctorname = data.data.doctors
  })

  $http.get(`http://localhost:3000/api/v1/patient/${$scope.currentUser.id}/doctor`)
  .then((data) =>{
    $scope.patientDoctor = data.data.doctor
    console.log("$scope.patientDoctor",$scope.patientDoctor);
  })
  .catch((err) =>{
    console.log("err",err);
  })

  $http.get(`http://localhost:3000/api/v1/insurance/${$scope.currentUser.id}`)
  .then((data) =>{
    console.log("data",data);
    $scope.patientInsurance = data.data.insurance
  })
  .catch((err) =>{
    console.log("err",err);
  })

  $http.get(`http://localhost:3000/api/v1/patient/${$scope.currentUser.id}/release_med_info`)
  .then((data) =>{
    $scope.releasePerson = data.data
    console.log("$scope.releasePerson",$scope.releasePerson);
  })
  .catch((err) =>{
    console.log("err",err);
  })

  $http.get(`http://localhost:3000/api/v1/foodallergy`)
  .then((data)=>{
    console.log("allergy",data.data.food_allergy);
    $scope.foodallergys = data.data.food_allergy
  })
  $http.get(`http://localhost:3000/api/v1/drugallergy`)
  .then((data)=>{
    console.log("allergy",data.data.drug_allergy);
    $scope.drugallergys = data.data.drug_allergy
  })
  $http.get(`http://localhost:3000/api/v1/patient/${$scope.currentUser.id}/allergy`)
  .then((allergy) =>{
    console.log("allergy",allergy);
    $scope.allergys = allergy.data.allergy
  })
  .catch((err) =>{
    console.log("err",err);
  })

  $http.get(`http://localhost:3000/api/v1/socialhistory`)
  .then((data) =>{
    $scope.socialHistories = data.data.social_history
    console.log("$socialHistories",$scope.socialHistories);
  })
  $http.get(`http://localhost:3000/api/v1/familyhistory`)
  .then((data) =>{
    $scope.familyHistories = data.data.family_history
    console.log("$familyHistories",$scope.familyHistories);
  })

  $http.get(`http://localhost:3000/api/v1/patient/${$scope.currentUser.id}/history`)
  .then((history) =>{
    console.log("history",history);
    $scope.histories = history.data.history
    console.log("$scope.histories",$scope.histories);
  })
  .catch((err) =>{
    console.log("err",err);
  })

  $http.get(`http://localhost:3000/api/v1/patients/${$scope.currentUser.id}/medication`)
  .then((data) =>{
    console.log("data.data",data.data.medications);
    $scope.medications = data.data.medications
  })
  .catch((err) =>{
    console.log("err",err);
  })
} else {
  $location("/")
}

})