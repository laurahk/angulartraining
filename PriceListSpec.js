describe("a price list", function() {
    var priceList, $httpBackend;
    // stub out test data
    var data = {"prices": {"kiwi": {"price": "25"}}};

    // inject is an angular method that will send across angular services to
    // jasmine code
    beforeEach(inject(function($injector, $http, $q) {
        // need to do this as for some reason, can't put httpBackend inside the function parameters
        $httpBackend = $injector.get('$httpBackend');
        // when the http request gets sent, then don't actually do it, but respond with the mock data
        $httpBackend.when('GET').respond(data);
        priceList = new PriceList($http, $q);
    }));

    // tests that it can successfully resolve the promise of
    // returning prices
    it("collects prices from the back end", function() {
        var output;
        priceList.getPrices().then(function(prices) {
            output = prices;
        });
        $httpBackend.flush(); // force to do the http request. Tells HTTP to return with something otherwise it would just keep waiting
        expect(output).toEqual(data.prices);
    });

    it("priceFor promise can be resolved", function() {
        var output;
        priceList.priceFor("kiwi").then(function(price) {
            output = price;
        });
        $httpBackend.flush(); // force to do the http request
        expect(output).toEqual(parseInt(data.prices["kiwi"].price));
    });
});
