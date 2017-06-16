angular.module('seApp.controllers')
 	.controller('aboutUsController', function($scope){
 		$scope.ourTeam=[
 		{name: 'PETER SINT',
 		 designation: 'Managing Director',
 		 image: 'src/images/ourTeam-1.jpg',
 		 facebook:'',
 		 twitter: ''
 		},{name: 'SONYA READONE',
 		 designation: 'Outdoor Director',
 		 image: 'src/images/ourTeam-2.jpg',
 		 facebook:'',
 		 twitter: ''
 		},{name: 'JIMMIE LUCKFACE',
 		 designation: 'Creative Director',
 		 image: 'src/images/ourTeam-3.jpg',
 		 facebook:'',
 		 twitter: ''}]

 	$scope.canvasChart= function(){
 		    var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
        text: "Our Yearly Growth Statistics"
      },
      axisY: {
        title: "Our Growth in ₹ "
      },
      height: 300,
      data: [

      {
        dataPoints: [
        { x: 2010, y: 100000, label: "Year 2010"},
        { x: 2011, y: 200000,  label: "Year 2011" },
        { x: 2012, y: 300000,  label: "Year 2012"},
        { x: 2013, y: 400000,  label: "Year 2013"},
        { x: 2014, y: 500000,  label: "Year 2014"},
        { x: 2015, y: 600000, label: "Year 2015"},
        { x: 2016, y: 700000,  label: "Year 2016"},
        { x: 2017, y: 800000,  label: "Year 2017"}
        ]
      }
      ]
    });

    chart.render();
 	}
 $scope.canvasChart();
 	});