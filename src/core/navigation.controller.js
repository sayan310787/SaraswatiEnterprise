 angular.module('seApp.core')
 	.controller('navigationController', function($scope){
 		var vm = this;
 		vm.modules = [
 		{
 		  icon: 'home',
 		  name: 'Home',
 		  state: '/Home'
 		},
 		{
 		  icon: 'group',
 		  name: 'About Us',
 		  state: '/AboutUs'
 		}, 		
 		{
 		  icon: 'build',
 		  name: 'Services',
 		  state: '/Services'
 		},
 		{
 		  icon: 'wallpaper',
 		  name: 'Gallery',
 		  state: '/Gallery'
 		},
 		{
 		  icon: 'group_work',
 		  name: 'Our Associations',
 		  state: '/OurAssociations'
 		},
 		{
 		  icon: 'contact_mail',
 		  name: 'Contact Us',
 		  state: '/ContactUs'
 		}]
 	});