var quizApp = angular.module('QuizApp',['ngMaterial']);

quizApp.controller('GameCtrl',['$scope',function($scope){
	var vm = $scope;
	vm.welcomemsg = "Welcome to Testing Quiz";
}]);
