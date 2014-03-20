 describe("cart total", function() {
    var checkout;
    var priceList;

    // beforeEach(function() {
    //     // var priceList = {
    //     //     priceFor: function(item) {
    //     //         return 25;
    //     //     }
    //     // };
    //     priceList = jasmine.createSpyObj("priceList", ['priceFor']);
    //     priceList.priceFor.andReturn(25);

    //     checkout = new Checkout(priceList);
    //     // could provide test data
    //     // checkout.priceList.prices = {
    //     //     "kiwi": 25
    //     // }
    // });
    var rootScope;
    beforeEach(inject(function($rootScope, $q) {
        rootScope = $rootScope;
        var d = $q.defer();
        d.resolve(25);
        priceList = jasmine.createSpyObj("priceList", ['priceFor']);
        priceList.priceFor.andReturn(d.promise);

        checkout = new Checkout(priceList);

    }));

    it("should return 0 when nothing has been scanned", function() {
        expect(checkout.total).toEqual(0);
    });

    it("is 50 with 1 kiwi", function() {
        checkout.scan("kiwi");
        rootScope.$apply(); // like a refresh - checks to see if any promises have been resolved
        expect(checkout.total).toEqual(25);
    });

    it("is 100 with 2 kiwis", function() {
        checkout.scan("kiwi");
        checkout.scan("kiwi");
        rootScope.$apply();
        expect(checkout.total).toEqual(50);
    });

    it("is 75 when Bananas are scanned", function() {
        checkout.scan("banana");
        rootScope.$apply();
        expect(checkout.total).toEqual(25);
    });

    it("passes the correct item though to priceList", function() {
        checkout.scan("kiwi");
        checkout.total;
        rootScope.$apply();
        expect(priceList.priceFor).toHaveBeenCalledWith("kiwi");
    });
});
