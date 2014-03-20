describe("item directive", function() {
    var element;
    var $scope;

    // include angular in jasmine scope
    beforeEach(module("CheckoutModule"));
    // can call this with _$rootScope_
    // and angular will still find it. And you can assign in to
    // $rootScope instead of $scope.
    beforeEach(inject(function($compile, $rootScope) {
        $scope = $rootScope;
        $scope.doSometing = jasmine.createSpy();
        element = angular.element("<item name='Apple' action='doSometing(item)'>Test</item>");
        // compile(element) returns a function, then call it will the scope
        // adds the element
        $compile(element)($rootScope);
    }));

    it("has a button (got from angular)", function() {
        expect(element.html()).toContain("<button");
    });

    it("calls the action with correct value on click", function() {
        element.find("button").triggerHandler("click");
        expect($scope.doSometing).toHaveBeenCalledWith("Apple");
    });
});
