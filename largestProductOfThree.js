function largestProductOfThree (array) {

  array.sort(function(a, b) {
    return (a - b);
  });

  var largestThree = array.slice(-3);
  var smallestTwo = array.slice(0,2);

  console.log(largestThree);
  console.log(smallestTwo);

  var option1 = largestThree[0] * largestThree[1] * largestThree[2];
  var option2 = largestThree[2] * smallestTwo[0] * smallestTwo[1];
  
  return option1 > option2 ? option1 : option2;
}


var arr1 = [-31, 41, 34, -37, -17, 29 ];
var arr2 = [ 2, 1, 3, 7 ]

console.log(largestProductOfThree(arr1));
console.log(largestProductOfThree(arr2));

// Find three largest absolute values
// Check if 0 or two are negative
// If odd number of negatives, toss find next lowest