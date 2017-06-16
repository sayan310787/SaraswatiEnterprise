angular.module('seApp.controllers')
  .controller('contactUsController', function($scope, $mdDialog, $window){
//Google map code ---- begins
   	 var myLatlng = new google.maps.LatLng(22.603532,88.407290);
	 var mapOptions = {
	  zoom: 14,
	  center: myLatlng
	 };
	 var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	 var marker = new google.maps.Marker({
    				position: myLatlng,
    				title:"Saraswati Enterprise"
		});
	 marker.setMap(map);
//Google map code ---- ends
	$scope.openMeetUs = function(event){
		$mdDialog.show({
	      controller: MeetUsDialogController,
	      templateUrl: 'src/modules/contactUs/meetUsDialog.html',
	      parent: angular.element(document.body),
	      targetEvent: event,
	      clickOutsideToClose:true,
	    });/*
	    .openFrom('#right')*/
	}

	$scope.openContactUs = function(event){
		$mdDialog.show({
		  controller: ContactDialogController,
	      templateUrl: 'src/modules/contactUs/contact-us-dialog.html',
	      parent: angular.element(document.body),
	      targetEvent: event,
	      clickOutsideToClose:true,
	    });
/*	    .openFrom('#left')*/
	}

	function ContactDialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  	$scope.contactTypes = [
  	{type: 'call',
  	 icon: 'call',
  	 subHeading: 'Call Us At:',
  	 details: '+91-123456789 / +91-123456789',
  	},
  	{type: 'email',
  	 icon: 'mail_outline',
  	 subHeading: 'E-Mail Us At:',
  	 details: 'example@example.com',
  	 },
  	 {type: 'address',
  	  icon: 'location_on',
  	  subHeading: 'Meet us At:',
  	  details: '1/1, Example lane, Lorem Ipsum, Lorem Ipsum City, Kolkata - 700000'
  	 }]
  }

  	function MeetUsDialogController($scope, $mdDialog) {
  		var email = 'sayanr_87@yahoo.co.in'
  		$scope.mail = {name:'',
  					   mobileNumber: '',
  						email: '',
  						todayDate: new Date(),
  						subject: 'Want to schedule a meeting'}
    	$scope.hide = function() {
      		$mdDialog.hide();
    	};

    	$scope.cancel = function() {
      		$mdDialog.cancel();
    	};

    	$scope.sendMail = function(data){
    		if(data.$valid){
    			var mailBody = 'Name : ' + $scope.mail.name + "%0D%0A" +
    							'Mobile Number : ' + $scope.mail.mobileNumber + "%0D%0A" +
    							'Email : ' +  $scope.mail.email + "%0D%0A" +
    							'Meeting Date : ' +  $scope.mail.todayDate + "%0D%0A";
    		 $window.open("mailto:"+ email + "?subject=" + $scope.mail.subject + "&body=" + mailBody,"_self");
    		 $mdDialog.cancel();
    	}
    	}
  }
});