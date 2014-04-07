var module = angular.module('myApp', []);

module.controller('CartController', function($scope) {

    $scope.items = [
        {title: 'Paint pots', quantity: 8, price: 3.95},
        {title: 'Polka dots', quantity: 17, price: 12.95},
        {title: 'Pebbles', quantity: 5, price: 6.95}
    ];
    $scope.remove = function(index) { 
        $scope.items.splice(index, 1);
    }

});


module.controller('HelloController', function($scope) {
    $scope.greeting = { text: 'Hello' };
    console.log($scope);
});

