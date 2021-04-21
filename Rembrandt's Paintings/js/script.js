var app = angular.module("RembrandtApp", []);
app.controller("PaintingController", function ($scope) {
$scope.paintingsCount = 0;

    $scope.paintings = [
        "images/1.jfif", "images/2.jfif", "images/3.jfif", "images/4.jfif", "images/5.jfif","images/6.jfif","images/7.jfif","images/8.jfif","images/9.jfif"

    ]

    $scope.previous = function(){
        $scope.paintingsCount = $scope.paintingsCount - 1;
    }

    $scope.next = function(){
        $scope.paintingsCount = $scope.paintingsCount + 1;
    }
});