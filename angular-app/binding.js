angular.module("bindingApp", [])
.controller("bindingcontroller", ['$rootScope','$scope',function ( $rootScope, $scope) {
    $scope.student = {
        fname: "Manish",
        lname: "Ukirde",
        CGPA: 6.54,
        picture: "IMG-20190214-WA0123.jpg",
    }

}]);