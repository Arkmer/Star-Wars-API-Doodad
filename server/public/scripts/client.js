const app = angular.module('routesApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/search.html',
        controller: 'searchController as sc'
    }).when('/favorites', {
        templateUrl: 'views/favorites.html',
        controller: 'favoritesController as fc'
    }).otherwise({redirectTo: '/'});
});
