var karen = angular.module('karen', []);

karen.controller('userController', function userController($scope) {
    $scope.users = [
        {
            name: 'Dylan Dunn'
        },
        {
            name: 'Other User'
        }
    ];
});

karen.controller('karenController', function karenController($scope) {
    
});