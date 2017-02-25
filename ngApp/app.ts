namespace live {

    angular.module('live', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: live.Controllers.HomeController,
                controllerAs: 'vm'
            })
            .state('add', {
                url: '/add-movie',
                templateUrl: '/ngApp/views/addMovie.html',
                controller: live.Controllers.AddController,
                controllerAs: 'vm'
            })
            .state('edit', {
                url: '/edit-movie/:id',
                templateUrl: '/ngApp/views/editMovie.html',
                controller: live.Controllers.EditController,
                controllerAs: 'vm'
            })

            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
