app.controller('favoritesController',['swapiService', '$scope', function(swapiService, $scope){
    console.log('favoritesController');
    let self = this;
    $scope.header = 'Favorites Page!';
}]);