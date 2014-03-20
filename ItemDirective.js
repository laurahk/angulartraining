// matches the item tag
CheckoutModule.directive("item", function() {
    return {
        restrict: 'E', // match a tag (element), not an attribute
        //scope: {}, // otherwise gets it's scope from the controller (CheckoutCtrl so you can call scan etc)
        scope: {
            action: '&' // call the thing that's being passed in
        },
        //template: '<button>{{fruit}}</button>', // sticks this html inside the element. Can also set to replace the element if you want.
        template: '<button ng-click="action({item:fruit})">{{fruit}}</button>',
        link: function(scope, element, attrs) {
            scope.fruit = attrs.name; // name of the item element
            // set this on the scope, so the template function can access it
        }
    };
});
