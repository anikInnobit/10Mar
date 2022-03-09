app
    .controller('dashboard-controller', function($scope, $http) {
        $http.get("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then(function (response) {$scope.names = response.data;});

    
});



