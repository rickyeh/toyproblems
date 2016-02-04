var array = [];

for(var i = 0; i < 20; i++) {
  array.push(Math.floor(Math.random() * 100));
}

// // Loop the array, compare index with index + 1
// // IF order is incorrect, fix it
// //

function bubbleSort(input) {
  var isSorted = false;

  while (!isSorted) {
    isSorted = true;

   for (var i = 0; i < input.length - 1; i++) {
    var curr = input[i];
    var next = input[i+1];

    if (curr > next) {
      var temp = curr;
      input[i] = next;
      input[i+1] = temp

      isSorted = false;
    }
   }
  }
  return input;
}

