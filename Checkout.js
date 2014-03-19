 function Checkout() {

    var items = [];

    this.total = function() {
        var cost = 0;
        for (i = 0; i < items.length; i++)
        {
            if (items[i] == "kiwi")
            {
                cost += 50;
            }
        }
        return cost;
    }

    this.scan = function(item) {
        items.push(item);
    }
}
