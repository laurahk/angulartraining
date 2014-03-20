function Checkout(priceList) {

    // var items = [];
    this.priceList = priceList;
    this.total = 0;

    // this.total = function() {
    //     var cost = 0;
    //     for (i = 0; i < items.length; i++)
    //     {
    //         //cost += this.priceList.priceFor(items[i]);
    //         this.priceList.priceFor(items[i]).then(function(price) {
    //             cost += price;
    //         });
    //     }
    //     return cost;
    // }

    // this.scan = function(item) {
    //     items.push(item);
    // }

    this.scan = function(item) {
        var checkout = this;
        this.priceList.priceFor(item).then(function(price) {
            checkout.total += price;
        });
    }
}
