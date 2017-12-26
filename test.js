var app = angular.module('myApp', []);
app.controller('myCtrl', ['$scope', function($scope) {
	console.log("test.js !!!! in controller");
    
	$scope.dataList = [
		{
			title: "test1",
			subArrays: [
				{
					row: 1,
					a: "aa",
					b: "bb",
					c: "cc",
					d: "dd"
				},
				{
					row: 1,
					a: "aa",
					b: "bb",
					c: "cc",
					d: "dd"
				},
				{
					row: 1,
					a: "aa",
					b: "bb",
					c: "cc",
					d: "dd"
				}
			]
		},
		{
			title: "test2",
			subArrays: [
				{
					row: 1,
					a: "aa2",
					b: "bb2",
					c: "cc2",
					d: "dd2"
				},
				{
					row: 1,
					a: "aa2",
					b: "bb2",
					c: "cc2",
					d: "dd2"
				},
				{
					row: 1,
					a: "aa2",
					b: "bb2",
					c: "cc2",
					d: "dd2"
				}
			]
		},
		{
			title: "test3",
			subArrays: [
				{
					row: 1,
					a: "aa3",
					b: "bb3",
					c: "cc3",
					d: "dd3"
				},
				{
					row: 1,
					a: "aa3",
					b: "bb3",
					c: "cc3",
					d: "dd3"
				},
				{
					row: 1,
					a: "aa3",
					b: "bb3",
					c: "cc3",
					d: "dd3"
				}
			]
		}

	];
	$scope.dog = "dogasdfasdfasdf";
	console.log("$scope.dataList is ", $scope.dataList);
	console.log("$scope.dog is ", $scope.dog);

}]);

