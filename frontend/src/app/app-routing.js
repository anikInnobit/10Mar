var app = angular.module("root-app", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/src/app/app.html",
            controller: "appController"
        })
        .otherwise({
            redirectTo: "/"
        })
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});