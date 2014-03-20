// matches the item tag
CheckoutModule.directive("item", function() {
    return {
        restrict: 'E', // match a tag (element), not an attribute
        scope: {}, // otherwise gets it's scope from the controller (CheckoutCtrl so you can call scan etc)
        template: '<button>{{fruit}}</button>', // sticks this html inside the element. Can also set to replace the element if you want.
        link: function(scope, element, attrs) {
            scope.fruit = attrs.name; // name of the item element
            // set this on the scope, so the template function can access it
        }
    };
});
