function insertionSort(array) {
  if (!array) {
    return undefined;
  }
  console.log('Starting Array : ', array);

  for (var i = 0; i < array.length; i++) {
    var curr = array[i];
    console.log('Curr is : ', curr);

    for (var j = i - 1 ; j >= 0 && (array[j].value > curr.value); j--) {
      console.log(curr.value);
      console.log(array[j].value);
      array[j+1] = array[j];
    }
    array[j+1] = curr;
  }

  console.log(array);
  return array;
}


var arr1 = [{
  value: 8
}, {
  value: 2
}, {
  value: 3
}, {
  value: 6
}];

insertionSort(arr1);

// function insertionSort(unsortedList) {
//   var len = unsortedList.length;
  
//   for(var i = 0; i < len; i++) {
//     var tmp = unsortedList[i]; //Copy of the current element.
//     /*Check through the sorted part and compare with the 
//     number in tmp. If large, shift the number*/
//     for(var j = i - 1; j >= 0 && (unsortedList[j] > tmp); j--) {
//       //Shift the number
//       unsortedList[j+1] = unsortedList[j];
//     }
//     //Insert the copied number at the correct position
//     //in sorted part.
//     unsortedList[j+1] = tmp;
//   }
// }
// var ul = [5, 3, 1, 2, 4];
// insertionSort(ul);
// console.log(ul);
