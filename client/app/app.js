const patient_portal = angular.module("patientPortal",["ngRoute",'mgo-angular-wizard'])
patient_portal.config(($routeProvider,$locationProvider) =>{
  $locationProvider.hashPrefix("")
  $routeProvider
  .when("/",{
    controller: "PublicCtrl",
    templateUrl: "/partials/public.html"
  })
})
