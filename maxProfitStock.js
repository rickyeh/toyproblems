var a = [12, 100, 30, 10, 80, 90, 100, 110, 5, 75, 100];

function getMaxProfit(arr) {
    var buyIndex = 0;

    var maxProfit = 0;
    var maxProfitBuy = 0;
    var maxProfitSell = 0;

    var low = arr[buyIndex];

    for (var i = 0; i < arr.length; i++) {
        var curr = arr[i];

        if (curr < low) {
            buyIndex = i;
            low = curr;
        }

        var diff = curr - low;
        if (diff > maxProfit) {
            maxProfitBuy = buyIndex;
            maxProfitSell = i;
            maxProfit = diff;
        }
    }

    return {
        maxProfit: maxProfit,
        buyIndex: maxProfitBuy,
        sellIndex: maxProfitSell
    };
}

console.log(getMaxProfit(a));