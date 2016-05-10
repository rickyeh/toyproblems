function coinSums (total) {
  
  // Take total, subtract by biggest number possible
  // recurse on itself and do the same
  // base case when result is 0, increase counter

  var count = 0;

  function recurse(num, coinIndex) {
    console.log('Recurse called on : ', num);
    if (num === 0) {
      count++;
      console.log('Count incremented to : ', count);
      console.log();
      console.log();
    }

    for (var i = coinIndex; i >= 0; i--) {
      if (num - coins[i] >= 0) {
        console.log('Current num is : ', num);
        console.log('Subtracting by : ', coins[i]);
        var difference = num - coins[i];
        recurse(difference, i);
      }  
    }
  }

  recurse(total, coins.length - 1);

  console.log(count);
  return count;
}

var coins = [1,2,5,10,20,50,100,200];

function coinSumsInterviewCake(amount, coinDenominations) {

  var count = 0;

  function recurse(remainingAmount, coinIndex) {
    if (remainingAmount === 0) {
      count++; 
      console.log('Count incremented to : ', count);
      console.log();
      console.log();
    }

    for (var i = coinIndex; i >= 0; i--) {
      if (remainingAmount - coinDenominations[i] >= 0) {
        console.log('Current remainingAmount is : ', remainingAmount);
        console.log('Subtracting by : ', coinDenominations[i]);
        var diff = remainingAmount - coinDenominations[i];
        recurse(diff, i)
      }
    }
  }

  recurse(amount, coinDenominations.length - 1);
  console.log(count);
  return count;  
}

// Solution
// We use a bottom-up ↴ algorithm to build up a table waysOfDoingNCents such that waysOfDoingNCents[k] is how many ways we can get to k cents using our denominations. We start with the base case that there's one way to create the amount zero, and progressively add each of our denominations.

// The number of new ways we can make a higherAmount when we account for a new coin is simply waysOfDoingNCents[higherAmount - coin], where we know that value already includes combinations involving coin (because we went bottom-up, we know smaller values have already been calculated).
// Dynamic programming way

  function changePossibilitiesBottomUp(amount, denominations) {

    // intialize an array of zeros with indices up to amount
    var waysOfDoingNcents = [];
    for (var i = 0; i <= amount; i++) {
        waysOfDoingNcents[i] = 0;
    }
    waysOfDoingNcents[0] = 1;

    for (var j = 0; j < denominations.length; j++) {
        var coin = denominations[j];
        for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
            var higherAmountRemainder = higherAmount - coin;
            waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
        }
    }

    return waysOfDoingNcents[amount];
}

// coinSums(17);
// coinSumsInterviewCake(4, [1,2,3]);