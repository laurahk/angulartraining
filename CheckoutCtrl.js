// a controller needed to do extra things like clearing fields on the view
// you wouldn't want the actual checkout to be aware of the front interface
function CheckoutCtrl(checkout)
{
    this.checkout = checkout;

    this.add = function(item) {
        this.checkout.scan(item);
    }
}
