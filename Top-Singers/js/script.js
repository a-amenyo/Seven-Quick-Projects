let app = angular.module("SingersApp", []);
app.controller("SingerController",function($scope){
    $scope.singers = [
        {"pic": "images/jcole.jpg", "name": "J.Cole", "gender": "male", "quality": "images/like.jpg"},
        {"pic": "images/kwesi.jpg", "name": "Kwesi Arthur", "gender": "male", "quality": "images/dislike.jpg"},
        {"pic": "images/dreezy.png", "name": "Dreezy ", "gender": "female", "quality": "images/like.jpg"},
        {"pic": "images/4.jfif", "name": "Nicki", "gender": "female", "quality": "images/like.jpg"},
        {"pic": "images/yawtog.jpg", "name": "Yaw Tog", "gender": "male", "quality": "images/dislike.jpg"},
        {"pic": "images/flo.jpg", "name": "Flo Mili", "gender": "female", "quality": "images/dislike.jpg"},
        {"pic": "images/7.jpg", "name": "Rihanna", "gender": "female", "quality": "images/dislike.jpg"},
        {"pic": "images/mole.jpg", "name": "Kofi Mole", "gender": "male", "quality": "images/like.jpg"},
    ];
});