patient_portal.controller('FormCtrl', function($scope, AuthFactory,$location, $http){
  $scope.currentUser = AuthFactory.getCurrentPatient()
  console.log("$scope.currentUser.id",$scope.currentUser.id);
  if($scope.currentUser.id) {
    $scope.date = new Date()
    $(function() {
      Materialize.updateTextFields();
  });
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
    $scope.keydown = () =>{
        $scope.doctorfullname = $('#full_name').val();
        console.log("$scope.doctorfullname",$scope.doctorfullname);
        $http.get(`http://localhost:3000/api/v1/doctors/check/${$scope.doctorfullname}`)
        .then((data) =>{
          console.log("doctor fullname",data);
          $scope.doctorSpeciality = data.data.doctor[0].speciality
          $scope.doctorAddress = data.data.doctor[0].address
          $scope.doctorPhonenumber = data.data.doctor[0].phonenumber
          $(function() {
              Materialize.updateTextFields();
          });
        })
        .catch((err) =>{
          console.log("err",err);
        })
  }
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


   $scope.finish = () =>{
    $http.patch(`http://localhost:3000/api/v1/patient/${$scope.currentUser.id}`,{
        firstname: $scope.currentUser.firstname,
        lastname: $scope.currentUser.lastname,
        dob: $scope.currentUser.dob,
        ethnicity: $scope.currentUser.ethnicity,
        address: $scope.currentUser.address,
        phonenumber: $scope.currentUser.phonenumber
      })
      $scope.doctorfullname = $('#full_name').val();
      $http.get(`http://localhost:3000/api/v1/doctors/check/${$scope.doctorfullname}`)
      .then((data) =>{
        $scope.doctorid = data.data.doctor[0].id
      $http.post(`http://localhost:3000/api/v1/addPatientDoctor/${$scope.currentUser.id}/${$scope.doctorid}`,{
        patient_id: $scope.currentUser.id,
        doctor_id: $scope.doctorid
      })
      .catch((data) =>{
        console.log("data from catch",data);
        Materialize.toast(`${$scope.doctorfullname} is already in your profile`,2000)
      })
      })
    $scope.insuranceType = $('#insuranceType').val();
      if ($scope.insuranceType === 'Primary'){
        $scope.patientInsurance.insurance_type_id = 1

      }
      else {
        $scope.patientInsurance.insurance_type_id = 2
      }
      if($scope.patientInsurance.insuranceprovider !== null) {
        $http.post(`http://localhost:3000/api/v1/insurance/${$scope.currentUser.id}`,{
          insuranceprovider: $scope.patientInsurance.insuranceprovider,
          groupid: $scope.patientInsurance.groupid,
          subscriberid: $scope.patientInsurance.subscriberid,
          insurance_type_id: $scope.patientInsurance.insurance_type_id,
          patient_id: $scope.currentUser.id
        })
        .catch((err) =>{
          console.log("err",err);
        })
      }
      if($scope.releasePerson.fullname !== null) {
        $http.post(`http://localhost:3000/api/v1/patient/${$scope.currentUser.id}/release_med_info/new`,{
            fullname: $scope.releasePerson.fullname,
            relation: $scope.releasePerson.relation,
            phonenumber: $scope.releasePerson.phone,
            patient_id: $scope.currentUser.id
          })
          .catch((err) =>{
            Materialize.toast(`${$scope.releasePerson.fullname} is already in your account`,2000)
          })
      }
      else{
        console.log("no releasePerson found");
      }
    $scope.patientAllergys = [];
      $('input[name="foodallergys"]:checked').map(function() {
                  $scope.patientAllergys.push($(this).val());
      });
      $('input[name="drugallergys"]:checked').map(function() {
                  $scope.patientAllergys.push($(this).val());
      });
      if($scope.patientAllergys.length >0){
        $http.post(`http://localhost:3000/api/v1/patient/${$scope.currentUser.id}/allergy`,{
          allergy_id : $scope.patientAllergys
        })
        .catch((err) =>{
          console.log("err",err);
        })
      }
       $scope.patientHistory = [];

      $('input[name="familyHistories"]:checked').map(function() {
                  $scope.patientHistory.push($(this).val());
      });
      $('input[name="socialHistories"]:checked').map(function() {
                  $scope.patientHistory.push($(this).val());
      });

      if($scope.patientHistory.length > 0){
        $http.post(`http://localhost:3000/api/v1/patient/${$scope.currentUser.id}/history`,{
          history_id : $scope.patientHistory
        })
        .catch((err) =>{
          console.log("err",err);
        })
      }
     $scope.medications.route = $("#route").val()
      if ($scope.medications.medication_type === 'Current') {
        $scope.medications.medication_type_id = 1
      } else {
        $scope.medications.medication_type_id = 2
      }

      if($scope.medications.medication_type_id === 1 ) {
        $http.post(`http://localhost:3000/api/v1/patients/${$scope.currentUser.id}/currentmedication/new`,{
          brandname: $scope.medications.brandname,
          drugname: $scope.medications.drugname,
          dosage: $scope.medications.dosage,
          route: $scope.medications.route,
          medication_type_id: $scope.medications.medication_type_id,
          patient_id: $scope.currentUser.id
        })
        .catch((err) =>{
          console.log("err",err);
        })
      }
      else {
        $http.post(`http://localhost:3000/api/v1/patients/${$scope.currentUser.id}/dismedication/new`,{
            brandname: $scope.medications.brandname,
            drugname: $scope.medications.drugname,
            dosage: $scope.medications.dosage,
            route: $scope.medications.route,
            medication_type_id: $scope.medications.medication_type_id,
            patient_id: $scope.currentUser.id
          })
          .catch((err) =>{
            console.log("err",err);
          })
      }
    $location.url('/profile')
   }
   }
   else {
    $location.path("/")
   }
})
