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

coinSums(17);