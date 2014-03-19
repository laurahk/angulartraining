// a controller needed to do extra things like clearing fields on the view
// you wouldn't want the actual checkout to be aware of the front interface
function CheckoutCtrl()
{
    this.checkout = new Checkout();

    this.add = function(item) {
        this.checkout.scan(item);
    }
}
