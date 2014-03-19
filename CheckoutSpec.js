 describe("cart total", function() {
    var checkout;
    var priceList;

    beforeEach(function() {
        // var priceList = {
        //     priceFor: function(item) {
        //         return 25;
        //     }
        // };
        priceList = jasmine.createSpyObj("priceList", ['priceFor']);
        priceList.priceFor.andReturn(25);

        checkout = new Checkout(priceList);
        // could provide test data
        // checkout.priceList.prices = {
        //     "kiwi": 25
        // }
    });

    it("should return 0 when nothing has been scanned", function() {
        expect(checkout.total()).toEqual(0);
    });

    it("is 50 with 1 kiwi", function() {
        checkout.scan("kiwi");
        expect(checkout.total()).toEqual(25);
    });

    it("is 100 with 2 kiwis", function() {
        checkout.scan("kiwi");
        checkout.scan("kiwi");
        expect(checkout.total()).toEqual(50);
    });

    it("is 75 when Bananas are scanned", function() {
        checkout.scan("banana");
        expect(checkout.total()).toEqual(25);
    });

    it("passes the correct item though to priceList", function() {
        checkout.scan("kiwi");
        checkout.total();
        expect(priceList.priceFor).toHaveBeenCalledWith("kiwi");
    });
});
