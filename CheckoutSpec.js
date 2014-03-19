 describe("cart total", function() {
    var co;

    beforeEach(function() {
        co = new Checkout();
    });

    it("should return 0 when nothing has been scanned", function() {
        expect(co.total()).toEqual(0);
    });

    it("is 50 with 1 kiwi", function() {
        co.scan("kiwi");
        expect(co.total()).toEqual(50);
    });

    it("is 100 with 2 kiwis", function() {
        co.scan("kiwi");
        co.scan("kiwi");
        expect(co.total()).toEqual(100);
    });
});
