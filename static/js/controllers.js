// setup app Angular instance:
var module = angular.module('myApp', []);


var messages = {};
messages.moo = 'moo cows go Mo0o0o';

var sundries = [
    {title: 'Moo cows', quantity: .5, price: 3.95},
    {title: 'Hippopotamuses', quantity: 200, price: 12.95},
    {title: 'Cats', quantity: 6*6, price: 6.95}
];

var students = [
    {name:'Mary Contrary', id:'1'}, 
    {name:'Jack Sprat', id:'2'}, 
    {name:'Jill Hill', id:'3'}
];

var album = [
    {name:'Southwest Serenade', duration: '2:34'}, 
    {name:'Northern Light Waltz', duration: '3:21'},
    {name:'Eastern Tango', duration: '17:45'}
];

module.controller('VariousController', function($scope) {

    console.log($scope);

    $scope.items = [
        {title: 'Paint pots', quantity: 8, price: 3.95},
        {title: 'Polka dots', quantity: 17, price: 12.95},
        {title: 'Pebbles', quantity: 5, price: 6.95}
    ];

    $scope.sundries = sundries;

    $scope.remove = function(index) { 
        $scope.items.splice(index, 1);
    }

    $scope.sundryRemove = function(index) { 
        $scope.sundries.splice(index, 1);
    }


    $scope.messages = messages;

    $scope.students = students;

    $scope.insertTom = function () {
        $scope.students.splice(1, 0, {name:'Tom Thumb', id:'4'});
    };

    $scope.album = album;

    $scope.menuState = { show: true };

    $scope.toggleMenu = function() { 
        $scope.menuState.show = !$scope.menuState.show;
    };



    $scope.isDisabled = false;

    $scope.stun = function() {
        // stun the target, then disable menu to allow regeneration 
        $scope.isDisabled = 'true';
    };

    $scope.isError = false; 
    $scope.isWarning = false;
    
    $scope.showError = function() { 
        $scope.messageText = 'This is an error!'; 
        $scope.isError = true;
        $scope.isWarning = false;
    };

    $scope.showWarning = function() {
        $scope.messageText = 'Just a warning. Please carry on.'; 
        $scope.isWarning = true;
        $scope.isError = false;
    };

});


module.controller('HelloController', function($scope) {
    $scope.greeting = { text: 'Hello' };
    console.log($scope);
});


