patient_portal.controller('ProfileCtrl', function($location,$scope,$http, AuthFactory){
   $('.tooltipped').tooltip({delay: 50});
   $scope.goTo = () => {
    $location.url( '/form' );
   };
  $scope.active_portal = "";

  $scope.activePortalButton = (id) =>{
    $scope.active_portal = id
    console.log("$scope.active_portal",typeof $scope.active_portal);
  }
   $scope.currentUser = AuthFactory.getCurrentPatient()

   // $scope.currentUser.dob = $scope.currentUser.dob[0].DOB.split("T",2)
   console.log("$scope.currentUser", $scope.currentUser);
   $(function() {
    Materialize.updateTextFields();
  });
if($scope.currentUser.id) {
  // $scope.currentUser.dob = $scope.currentUser.dob.split("T",2)[0]
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
    console.log("$scope.patientInsurance",$scope.patientInsurance);;
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
    $scope.personal = () =>{
      $scope.currentUser.dob = JSON.stringify($scope.currentUser.dob)
      $scope.currentUser.dob = $scope.currentUser.dob.split("T",2)[0].slice(1)
    $http.patch(`http://localhost:3000/api/v1/patient/${$scope.currentUser.id}`,{
      firstname: $scope.currentUser.firstname,
      lastname: $scope.currentUser.lastname,
      dob: $scope.currentUser.dob,
      ethnicity: $scope.currentUser.ethnicity,
      address: $scope.currentUser.address,
      phonenumber: $scope.currentUser.phonenumber
    })
    .then((data) =>{
      Materialize.toast("Updated personal Information successfully",2000)
    })
  }

} else {
  $location.url("/")
}

})
