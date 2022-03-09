app
    .controller('login-controller', function($scope,  $http) {
        
        $scope.user = null;
        $scope.password = null;
      
        
        $scope.postdata = function (user, password) {
            $http.post("https://jsonplaceholder.typicode.com/posts",{'userId': user,'password': password})
            .then(function(response) {$scope.usersData = response.users;});
        };

        
});




