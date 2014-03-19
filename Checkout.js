 function PriceList() {
    var prices = {
        "kiwi": {price: 60},
        "banana": {price: 75}
    };

    this.priceFor = function(item) {
        return prices[item].price;
    }
 }

 function Checkout(priceList) {

    var items = [];
    this.priceList = priceList;

    this.total = function() {
        var cost = 0;
        for (i = 0; i < items.length; i++)
        {
            cost += this.priceList.priceFor(items[i]);
        }
        return cost;
    }

    this.scan = function(item) {
        items.push(item);
    }
}
