describe("checkout controller", function() {
    var controller;
    var checkout;

    beforeEach(function() {
        checkout = jasmine.createSpyObj("Checkout", ['scan']);
        controller = new CheckoutCtrl(checkout);
    });

    // it("increase total on click of add", function() {
    //     controller.add("kiwi");
    //     expect(controller.checkout.total()).toEqual(controller.checkout.priceList.priceFor("kiwi"));
    // });

    it("scan is being called", function() {
        controller.add("kiwi");
        expect(checkout.scan).toHaveBeenCalledWith("kiwi");
    });


});
