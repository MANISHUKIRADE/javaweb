
angular.module("mainapp", ["moduleA", "moduleB"])
    .controller("maincontroller",[ '$scope','$rootScope', function ($scope, $rootScope) {
        $rootScope.company = "Nexsales";
        $scope.messg = "Inside Main";
        console.log("main module created");
    }]);
angular.module("moduleA", []);
angular.module("moduleA")
    .controller("controllerA",['$scope','$rootScope', function ($scope, $rootScope) {
        console.log($rootScope.company);
        $scope.messga = "inside Controller A";
        console.log("inside A");
    }]);
angular.module("moduleB", []);
angular.module("moduleB")
    .controller("controllerB", ['$scope','$rootScope',function ($scope, $rootScope) {
        console.log($rootScope.company);
        $scope.messga = "inside Controller B";
        console.log("inside B")
    }]);