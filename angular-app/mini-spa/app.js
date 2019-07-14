
        angular.module("minispa", ['ngRoute'])
            .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/', {
                    templateUrl: "fragments/home.html",
                    controller: "homeController"
                })
                .when('/contact',{
                    templateUrl: "fragments/contact.html",
                    controller: "contactController"
                })
                .when('/aboutus',{
                    templateUrl:"fragments/aboutus.html",
                    controller:"aboutusController"
                })
            }])
            .controller("homeController", function ($scope) {
                $scope.data = "Home"
            })
            .controller("contactController",function($scope){
                $scope.data="Contact"
            })
            .controller("aboutusController",function($scope){
                $scope.data="About Us"
            })

