app.controller('dashboardCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('dashboard.json').then(function(response) {
        $scope.campaigns = response.data.campaigns;

    });

    $scope.hideCard = function($index) {
        $scope.campaigns.splice($index, 1);
    }
}]);