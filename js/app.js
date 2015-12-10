var quizApp = angular.module('quizApp',[]);
quizApp.controller('GameCtrl',['$scope',function($scope){
	var vm = $scope;
	vm.welcomemsg = "Welcome to Testing Quiz";
}]);
