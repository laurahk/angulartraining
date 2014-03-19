describe("checkout controller", function() {
    var controller;

    beforeEach(function() {
        controller = new CheckoutCtrl();
    });

    it("increase total on click of add", function() {
        controller.add("kiwi");
        expect(controller.checkout.total()).toEqual(50);
    });
});
