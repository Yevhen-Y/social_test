app.controller('campaignsCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    $scope.item = $routeParams.itemId;

    $http.get('dashboard.json').then(function(response) {
        $scope.campaign = response.data.campaigns[$scope.item];
    });
    $scope.load = function() {
        $http.get('feed.json').then(function(response) {
            $scope.media = response.data.media;
            for (var i = 0; i < $scope.media.length; i++) {
                $scope.media[i]['status'] = 'pending'
            }
            $scope.myVar1 = false;
            $scope.myVar2 = true;
        });
    }

    $scope.sortBySocial = function($event) {

        $scope.social = $event.target.id;

        $scope.myVar1 = !$scope.myVar1;
        $scope.myVar2 = !$scope.myVar2;
    }

    $scope.rejectedCards = [];
    $scope.moveToReject = function($event) {

        if ($event.target.name == 'media') {

            for (var i = 0; i < $scope.media.length; i++) {
                if ($scope.media[i].id == $event.target.id) {
                    $scope.rejectedCards.push($scope.media[i])
                        // $scope.media[i]['status'] = 'approved'
                    $scope.media.splice(i, 1);
                }
            }
        } else if ($event.target.name == 'approved') {

            for (var i = 0; i < $scope.approvedCards.length; i++) {
                if ($scope.approvedCards[i].id == $event.target.id) {
                    $scope.rejectedCards.push($scope.approvedCards[i])
                    $scope.approvedCards.splice(i, 1);
                }
            }
        }

    }

    $scope.approvedCards = []
    $scope.moveToApproved = function($event) {
        for (var i = 0; i < $scope.media.length; i++) {
            if ($scope.media[i].id == $event.target.id) {
                $scope.approvedCards.push($scope.media[i])
                $scope.media.splice(i, 1);
            }
        }

    }

}]);