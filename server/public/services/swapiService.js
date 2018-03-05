app.service('swapiService', ['$http',function($http){
    console.log('swapiService');
    let self = this;

    self.cardArray = {list: ['corn', 'potato', 'bacon', 'salad']};
}])