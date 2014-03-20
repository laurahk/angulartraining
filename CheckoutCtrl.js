// a controller needed to do extra things like clearing fields on the view
// you wouldn't want the actual checkout to be aware of the front interface
function CheckoutCtrl(checkout, priceList)
{
    this.checkout = checkout;
    this.priceList = priceList;
    this.checkedPrice;

    this.add = function(item) {
        this.checkout.scan(item);
    }

    this.priceCheck = function(item) {
        var ctrl = this;
        this.priceList.priceFor(item).then(function(price) {
            ctrl.checkedPrice = price;
        })
    }
}
