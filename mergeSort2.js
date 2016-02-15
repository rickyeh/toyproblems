var mergeSort = function(array) {
  if (array.length === 1) {
    return array;
  }

  var mid = Math.floor(array.length / 2);
  var left = array.slice(0, mid);
  var right = array.slice(mid);
  // console.log('Left Array : ', left);
  // console.log('Right Array : ', right);

  return (sort(mergeSort(left), mergeSort(right)));
};

var sort = function(leftArray, rightArray) {
  // console.log('Left Array : ', leftArray);
  // console.log('RightArray : ', rightArray);
  var result = [];
  var leftIndex = 0;
  var rightIndex = 0;

  while (leftIndex < leftArray.length || rightIndex < rightArray.length) {
    if (leftIndex === leftArray.length) {
      result = result.concat(rightArray.slice(rightIndex));
      // console.log('line 25: Sort Result : ', result);
      return result;
    } else if (rightIndex === rightArray.length) {
      result = result.concat(leftArray.slice(leftIndex));
      // console.log('Line 29: Sort Result : ', result);
      return result;
    }

    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      // console.log('Left is lower, push left into results : ', leftArray[leftIndex]);
      result.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      // console.log('Right is lower, push right into results : ', rightArray[rightIndex]);
      result.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }
  // console.log('Line 43: Sort Result : ', result);

  return result;
};

// var arr = [3,1,5,4,2];
var bigNumbers = [];
var n = 100000;

for (var i = 0; i < n; i++) {
  var number = Math.floor(Math.random() * n);
  bigNumbers.push(number);
}
console.log('Final Answer: ', mergeSort(bigNumbers));