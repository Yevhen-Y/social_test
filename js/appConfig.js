// route settings
app.config(function($locationProvider) {

    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode({
        enabled: false,
        requireBase: true
    });
});

app.config(function($routeProvider) {
    $routeProvider

        .when('/dashboard', {
        templateUrl: 'template/dashboard.html',
        controller: 'dashboardCtrl'
    })

    .when('/campaigns/:itemId', {
        templateUrl: 'template/campaigns.html',
        controller: 'campaignsCtrl'
    })

    .otherwise({
        redirectTo: '/dashboard'
    });

});