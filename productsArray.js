// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

// For example, given:

//   [1, 7, 3, 4]

// your function would return:

//   [84, 12, 28, 21]

// by calculating:

//   [7*3*4, 1*3*4, 1*7*4, 1*7*3]

// Do not use division in your solution.

function getProductsOfAllIntsExceptAtIndex(array) {
  return array.map(function(element, index, arr) {
    return arr.reduce(function(prev, curr, i) {
      return i === index ? prev : prev * curr
    }, 1);
  });
}


var arr1 = [1, 7, 3, 4];

console.log(getProductsOfAllIntsExceptAtIndex(arr1));
getProductsOfAllIntsExceptAtIndex(arr1);