describe("money filter", function() {
    var filter;

    beforeEach(module("CheckoutModule"));
    beforeEach(inject(function(moneyFilter) {
        filter = moneyFilter;
    }));

    it("formats 0 as £0.00", function() {
        expect(filter("0")).toEqual("£0.00");
    });

    it("formats 120 as £1.20", function() {
         expect(filter("120")).toEqual("£1.20");
    })
});
