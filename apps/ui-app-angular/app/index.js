import angular from "angular";

angular.module("AngularComponentDemo", [])
    .controller('sampleController', function($scope){
        $scope.message = "Hello world";
    });