patient_portal.controller('FormCtrl', function($scope, AuthFactory,$location, $http){
  $scope.currentUser = AuthFactory.getCurrentPatient()
  console.log("$scope.currentUser.id",$scope.currentUser.id);
if($scope.currentUser.id) {
  $http.get('http://localhost:3000/api/v1/doctors')
  .then((data) =>{
    $scope.doctorname = data.data.doctors
  })

  $http.get(`http://localhost:3000/api/v1/patient/${$scope.currentUser.id}/doctor`)
  .then((data) =>{
    $scope.patientDoctor = data.data.doctor[0]
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
  $scope.personal = () =>{
      console.log("$scope.fdob",$scope.dob);
    $http.patch(`http://localhost:3000/api/v1/patient/${$scope.currentUser.id}`,{
      firstname: $scope.currentUser.firstname,
      lastname: $scope.currentUser.lastname,
      dob: $scope.currentUser.dob,
      ethnicity: $scope.currentUser.ethnicity,
      address: $scope.currentUser.address,
      phonenumber: $scope.currentUser.phonenumber
    })
    .then((data) =>{
      console.log("updated in patients table")
    })
  }

  $scope.facility = (id) =>{
    // console.log("$scope.doctorname.fullname",$scope.doctorname.fullname);
    // $http.post(`http://localhost:3000/api/v1/doctors/new`, {
    //   fullname: $scope.doctorname.fullname,
    //   speciality: $scope.doctorname.speciality,
    //   address: $scope.doctorname.address,
    //   phonenumber: $scope.doctorname.phonenumber
    // })
    // .then((data) =>{
    //   $http.post(`http://localhost:3000/api/v1/doctors/check`, {
    //     fullname: $scope.doctorname.fullname,
    //     speciality: $scope.doctorname.speciality,
    //     address: $scope.doctorname.address,
    //     phonenumber: $scope.doctorname.phonenumber
    //   })
    //     .then((data) =>{
    //       console.log("data",data.data);
    //     })
    // })
    $scope.doctorfullname = $('#full_name').val();
    console.log("$scope.doctorfullname",$scope.doctorfullname);
    $http.get(`http://localhost:3000/api/v1/doctors/check/${$scope.doctorfullname}`)
    .then((data) =>{
      $scope.doctorid = data.data.doctor[0].id
      console.log("$scope.doctorid",$scope.doctorid);
    $http.post(`http://localhost:3000/api/v1/addPatientDoctor/${$scope.currentUser.id}/${$scope.doctorid}`,{
      patient_id: $scope.currentUser.id,
      doctor_id: $scope.doctorid
    })
    .then((data) =>{
      console.log("data",data);
      Materialize.toast(`${$scope.doctorfullname} is added to your Facility Information`)
    })
    .catch((data) =>{
      console.log("data from catch",data);
      Materialize.toast(`${$scope.doctorfullname} is already in your profile`,2000)
    })
    })
    // .catch((data) =>{
    //   console.log("im in catch");
    //   $http.get(`http://localhost:3000/api/v1/patient/${$scope.currentUser.id}/doctor`)
    //   .then((data) =>{
    //     if(data.data.doctor.length === 0){
    //       console.log("$scope.doctorname",$scope.id);
    //     }
    //   })
    // })
  }

  $scope.insurance = () =>{
    $scope.insuranceType = $('#insuranceType').val();
    console.log("$scope.insurance",$scope.insurance);
    console.log("$scope.insuranceprovider",$scope.patientInsurance.insurance_type);
    if ($scope.insuranceType === 'Primary'){
      $scope.patientInsurance.insurance_type_id = 1

    }
    else {
      $scope.patientInsurance.insurance_type_id = 2
    }
    $http.post(`http://localhost:3000/api/v1/insurance/${$scope.currentUser.id}`,{
      insuranceprovider: $scope.patientInsurance.insuranceprovider,
      groupid: $scope.patientInsurance.groupid,
      subscriberid: $scope.patientInsurance.subscriberid,
      insurance_type_id: $scope.patientInsurance.insurance_type_id,
      patient_id: $scope.currentUser.id
    })
    .then(() => {
      Materialize.toast("insurance details added successfully")
    })
    .catch((err) =>{
      console.log("err",err);
    })
  }

  $scope.release = () =>{
    $http.post(`http://localhost:3000/api/v1/patient/${$scope.currentUser.id}/release_med_info/new`,{
      fullname: $scope.releasePerson.fullname,
      relation: $scope.releasePerson.relation,
      phonenumber: $scope.releasePerson.phone,
      patient_id: $scope.currentUser.id
    })
    .then(() =>{
      Materialize.toast( `${$scope.releasePerson.fullname} added as your release person`, 2000)
    })
    .catch((err) =>{
      Materialize.toast(`${$scope.releasePerson.fullname} is already in your account`,2000)
    })
  }
 }
 else {
  $location.path("/")
 }
})
