'use strict';

// Declare app level module which depends on filters, and services
angular.module('seApp.controllers', []);
angular.module('seApp.core', []);
angular.module('seApp', [
  'ngMaterial',
  'ngMessages',
  'ui.router',
  'ngMdIcons',
  'seApp.core',
  'seApp.controllers'
])
  .controller('appController', function($scope, $mdSidenav, $state, $location, $window){
    var vm = this;
    $scope.sideNavIcon = 'menu';
    $scope.isOpacity = false;
    if($location.$$url){
    $scope.currentState = $location.$$url;
  } else {
     $scope.currentState = '/Home'
  }
    $scope.openLeftMenu = function() {
    if($scope.sideNavIcon == 'menu'){
      $scope.sideNavIcon = 'apps';
      $scope.isOpacity = true;
    } else {
      $scope.sideNavIcon = 'menu';
      $scope.isOpacity = false;
    }
    $mdSidenav('left').toggle();
  };

  $scope.stateChange = function(state){
    $state.go(state);
    $scope.currentState = state;
  };
})

 .config(function($stateProvider, $urlRouterProvider)
    {
      $stateProvider
        .state('/Home',{
          url: "/Home",
          templateUrl: 'src/modules/home/home.html',
          controller: 'homeController as vm'
        })
        .state('/AboutUs',{
          url: "/AboutUs",
          templateUrl: 'src/modules/aboutUs/aboutUs.html',
          controller: 'aboutUsController as vm'
        })
        .state('/Services',{
          url: "/Services",
          templateUrl: 'src/modules/services/services.html',
          controller: 'servicesController'
        })
        .state('/Gallery',{
          url: "/Gallery",
          templateUrl: 'src/modules/gallery/gallery.html',
          controller: 'galleryController'
        })
        .state('/OurAssociations',{
          url: "/OurAssociations",
          templateUrl: 'src/modules/associations/associations.html',
          controller: 'associationsController'
        })
        .state('/ContactUs',{
          url: "/ContactUs",
          templateUrl: 'src/modules/contactUs/contactUs.html',
          controller: 'contactUsController'
        });
      $urlRouterProvider.otherwise('/Home');
    });
