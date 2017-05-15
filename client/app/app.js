const patient_portal = angular.module("patientPortal",["ngRoute",'mgo-angular-wizard','webStorageModule'])
patient_portal.config(($routeProvider,$locationProvider) =>{
  $locationProvider.hashPrefix("")
  $routeProvider
  .when("/",{
    controller: "PublicCtrl",
    templateUrl: "/partials/public.html"
  })
  .when("/register", {
    controller: "RegisterCtrl",
    templateUrl: "/partials/register.html"
  })
  .when("/form", {
    controller: "FormCtrl",
    templateUrl: "/partials/form.html"
  })
  .when("/profile", {
    controller: "ProfileCtrl",
    templateUrl: '/partials/profile.html'
  })
  .when("/logout", {
    controller: "LogoutCtrl",
    templateUrl: '/partials/logout.html'
  })
  .otherwise('/')
})
