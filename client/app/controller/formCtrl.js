patient_portal.controller('FormCtrl', function($scope, AuthFactory,$location, $http){
  $scope.currentUser = AuthFactory.getCurrentPatient()
  console.log("$scope.currentUser.id",$scope.currentUser.id);
if($scope.currentUser.id) {
  $http.get('http://localhost:3000/api/v1/doctors')
  .then((data) =>{
    $scope.doctorname = data.data.doctors
  })
  $scope.keydown = ()=>{
    console.log("$scope.first_name",$scope.currentUser.firstname);
  }
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
      console.log("data",data);
    })
    // $http.post(`http://localhost:3000/api/v1/addPatientDoctor/${$scope.currentUser.id}/${$scope.doctorid}`)
    // .then((data) =>{
    //   console.log("data",data);
    // })
    // .catch((data) =>{
    //   console.log("data from catch",data);
    // })
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
 }
 else {
  $location.path("/")
 }
})
