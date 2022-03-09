var app = angular.module("root-app", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            // templateUrl: "/src/app/app.html",
            templateUrl : "/src/app/components/login/login.html",
            controller: "login-controller",
            css: 'src/app/components/login/login.css'
        })
        .when("/login", {
            templateUrl : "/src/app/components/login/login.html",
            css: 'src/app/components/login/login.css'
        })
        .when("/dashboard", {
            templateUrl : "/src/app/components/dashboard/dashboard.html",
            css: 'src/app/components/dashboard/dashboard.css'
        })
        .otherwise({
            redirectTo: "/"
        })
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});