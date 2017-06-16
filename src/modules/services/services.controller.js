angular.module('seApp.controllers')
	.controller('servicesController', function($scope, $mdDialog){
		$scope.openMeetUs = function(event){
			$mdDialog.show({
				controller: servicesReadMore,
				templateUrl: 'src/modules/services/readMoreDialog.html',
				parent: angular.element(document.body),
				targetEvent: event,
				clickOutsideToClose:true,
			});/*
			 .openFrom('#right')*/
		}
});
