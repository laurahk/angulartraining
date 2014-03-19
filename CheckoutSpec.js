 describe("cart total", function() {
    var checkout;

    beforeEach(function() {
        checkout = new Checkout();
    });

    it("should return 0 when nothing has been scanned", function() {
        expect(checkout.total()).toEqual(0);
    });

    it("is 50 with 1 kiwi", function() {
        checkout.scan("kiwi");
        expect(checkout.total()).toEqual(50);
    });

    it("is 100 with 2 kiwis", function() {
        checkout.scan("kiwi");
        checkout.scan("kiwi");
        expect(checkout.total()).toEqual(100);
    });

    it("is 75 when Bananas are scanned", function() {
        checkout.scan("banana");
        expect(checkout.total()).toEqual(75);
    });
});
