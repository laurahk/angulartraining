describe("checkout controller", function() {
    var controller;
    var checkout;

    var priceList;

    beforeEach(inject(function($q) {
        checkout = jasmine.createSpyObj("Checkout", ['scan']);
        priceList = jasmine.createSpyObj("priceList", ['priceFor']);

        var d = $q.defer();
        d.resolve(25);
        priceList.priceFor.andReturn(d.promise);


        controller = new CheckoutCtrl(checkout, priceList);
    }));

    // it("increase total on click of add", function() {
    //     controller.add("kiwi");
    //     expect(controller.checkout.total()).toEqual(controller.checkout.priceList.priceFor("kiwi"));
    // });

    it("scan is being called", function() {
        controller.add("kiwi");
        expect(checkout.scan).toHaveBeenCalledWith("kiwi");
    });

    it("checks the price and sets checkedPrice", inject(function($rootScope) {
       controller.priceCheck("Kiwi");
       $rootScope.$apply();
       expect(controller.checkedPrice).toEqual(25);
    }));


});
