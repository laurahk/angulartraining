var CheckoutModule = angular.module("CheckoutModule", []);
CheckoutModule.service("priceList", PriceList);
CheckoutModule.service("checkout", Checkout);
CheckoutModule.controller("CheckoutCtrl", CheckoutCtrl);
CheckoutModule.filter("money", function() {
    return function(money) {
        if (!money)
            return "£0.00";
        else
            return "£" + (money / 100).toFixed(2);
    };
});
// module ("parameter", function (i.e. the class function))
