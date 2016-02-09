function binarySearch (array, target) {
  var lowIndex = 0;
  var highIndex = array.length -1;
  var curr;
  var index;

  while (lowIndex <= highIndex) {
    index = Math.floor((lowIndex + highIndex)/2 );
    console.log('Current Index : ' + index);

    curr = array[index];

    if (curr === target ) {
      console.log('Found at index : ', index);
      return index;
    } else if (curr < target) {
      console.log('Current Element ' + curr + ' is lower than target' + target);
      lowIndex = index + 1;
    } else if (curr > target) {
      console.log('Current Element ' + curr + ' is higher than target' + target);
      highIndex = index - 1;
    }
  }

  console.log('Not found, returning -1');
  return -1;
}




var arr1 = [ 11, 12, 13, 14, 15];

binarySearch(arr1, 13);

// Current 