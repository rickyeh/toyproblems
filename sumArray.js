function sumArray(array) {
  var largestSum = 0;
  var runningSum = 0;
  var allNegative = true;
  var leastNegative;

  for (var i = 0; i < array.length; i++) {
    var curr = array[i];

    if (allNegative) {
      if (curr >= 0) {
        allNegative = false;
      } else if (leastNegative < curr || !leastNegative){
        leastNegative = curr;
      }
    }

    runningSum = curr + runningSum;

    if (largestSum < runningSum) {
      largestSum = runningSum;
    } else if (runningSum < 0) {
      runningSum = 0;
    }
  }

  if (allNegative) {
    largestSum = leastNegative;
  }
  console.log(largestSum);
  return largestSum;
}


var arr = [ 5, 4, 3, -15, 15, -10, 20, -15, 5, 4, 3];

sumArray(arr);