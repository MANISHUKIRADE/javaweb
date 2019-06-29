angular.module("colorchange", [])
.controller("colourChangeController",['$rootScope','$scope',function($rootScope,$scope){
    $scope.color="red"

    $scope.changeFunction = function(){
    $rootScope.pageStyle={
        "background-color" : $scope.color,
    }
}
}]);