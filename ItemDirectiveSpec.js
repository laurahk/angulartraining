describe("item directive", function() {
    var element;

    // include angular in jasmine scope
    beforeEach(module("CheckoutModule"));
    beforeEach(inject(function($compile, $rootScope) {
        element = angular.element("<item name='Apple' action='doSometing(item)'>Test</item>");
        // compile(element) returns a function, then call it will the scope
        // adds the element
        $compile(element)($rootScope);
    }));

    it("has a button (got from angular)", function() {
        expect(element.html()).toContain("<button");
    });
});
