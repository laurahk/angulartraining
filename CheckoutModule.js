var CheckoutModule = angular.module("CheckoutModule", []);
CheckoutModule.service("priceList", PriceList);
CheckoutModule.service("checkout", Checkout);
CheckoutModule.controller("CheckoutCtrl", CheckoutCtrl);
// module ("parameter", function (i.e. the class function))
