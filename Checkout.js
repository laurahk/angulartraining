 function PriceList() {
    this.prices = {
        "kiwi": {price: 50},
        "banana": {price: 75}
    };

    this.priceFor = function(item) {
        return this.prices[item].price;
    }
 }

 function Checkout() {

    var items = [];
    this.priceList = new PriceList();

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
