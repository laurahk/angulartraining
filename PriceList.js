// angular services, http and q (works on name)
function PriceList($http, $q) {
    // var prices = {
    //     "kiwi": {price: 60},
    //     "banana": {price: 75}
    // };

    // this.priceFor = function(item) {
    //     return prices[item].price;
    // }

    // q is the promise

    this.url = 'https://rawgithub.com/chrismdp/angular-training-start/master/prices.json';

    this.getPrices = function() {
        var priceList = this;

        if (!priceList.q) {
            priceList.q = $q.defer();
            $http.get(priceList.url).success(function(data) {
                priceList.q.resolve(data.prices);
            });
        }

        return priceList.q.promise;
    }

    this.priceFor = function(item) {
        return this.getPrices().then(function(prices) {
            return parseInt(prices[item].price);
        });
    }
 }
