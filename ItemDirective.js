CheckoutModule.directive("item", function() {
    return {
        restrict: 'E',
        template: '<button>{{fruit}}</button>',
        link: function(scope, element, attrs) {
            scope.fruit = attrs.name;
        }
    };
});
