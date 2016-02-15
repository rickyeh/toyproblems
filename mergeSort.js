function mergeSort(arr){
  // var startTime = Date.now();
  var subSetsArray = [];

  // Merge helper func ( [] [] )
  // If no second [], return first []
  // Makes new temp array
  // Shifts out numbers on both arrays
    // Compares them, push into temp array the smaller one
    // Before shifting, check if you can shift
    // Do this until both array lengths are 0
    
  // Return sorted array
 // function merge(arr1, arr2) {
 //   if (arr2 === undefined) {
 //     return arr1;
 //   }
 //   var tempArray = [];
 //   var a = arr1.shift();
 //   var b = arr2.shift();

 //   do {
 //     // console.log('A is : ', a);
 //     // console.log('B is : ', b);
 //     if (b === undefined || a <= b) {
 //       tempArray.push(a);
 //       a = arr1.shift();
 //     } else if (a === undefined || b < a) {
 //       tempArray.push(b);
 //       b = arr2.shift();
 //     }
 //   } while (a || b);

 //   return tempArray;
 // }
function merge(arr1, arr2) {
  if (arr2 === undefined) {
    return arr1;
  }
  var tempArray = [];
  var index1 = 0;
  var index2 = 0;
  var a = arr1[index1];
  var b = arr2[index2];

  do {
    if (b === undefined || a <= b) {
      tempArray.push(a);
      index1++;
    } else if (a === undefined || b < a) {
      tempArray.push(b);
      index2++
    }
    a = arr1[index1];
    b = arr2[index2];
  } while (a || b);

  return tempArray;
}

  // Create new array of single element arrays.
  for (var i = 0; i < arr.length; i++) {
    subSetsArray.push([arr[i]]);
  }

  // console.log('Subsets Array is : ' + subSetsArray);

  // Merge adjacent lists
  // Loop through indexes until half the length rounded up of array
  var iterations = Math.round(subSetsArray.length / 2); 

  while (subSetsArray.length > 1) {

    for (var i = 0; i < iterations; i++) {
      // Merge currIndex and nextIndex
      // Save to currIndex
      // console.log('Line 42: Current is : ', subSetsArray[i]);
      // console.log('Line 43: Next is : ', subSetsArray[i+1]);

      if (subSetsArray[i+1] === undefined) {
        continue;
      }

      subSetsArray[i] = merge(subSetsArray[i], subSetsArray[i+1]);
      // console.log('Line 46: Merged is ', subSetsArray[i]);
      subSetsArray.splice(i+1, 1);
      // console.log('Line 48: Spliced next, curr array is : ', subSetsArray);
      // Splice the next index off
    }

  }
  // console.log(subSetsArray[0]);
  // console.log(Date.now() - startTime);
  return subSetsArray[0];
}

// var mergeTest1 = [1, 3];
// var mergeTest2 = [1, 2, 4];

// console.log(merge(mergeTest1,mergeTest2));

// var arr = [4,7,4,3,9,1];
// var bigNumbers = [];
// var n = 100000;

// for (var i = 0; i < n; i++) {
//   var number = Math.floor(Math.random() * n);
//   bigNumbers.push(number);
// }
// mergeSort(bigNumbers);