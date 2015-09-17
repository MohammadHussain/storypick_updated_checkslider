var ladduz = angular.module('ladduz',[]);


ladduz.directive('categoryMenu', function () {
    return {
        restrict: 'E',

        transclude: true,
        templateUrl: 'CategoryMenu.html'
    };
});



ladduz.directive('sliderTemplate', function () {
    return {
        restrict: 'E',
        transclude: 'true',
        templateUrl: 'slidertemplate.html'
    }
});


