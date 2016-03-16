function evenOccurrence(arr) {
  var characterCount = {};

  for (var i = 0; i < arr.length; i++) {
    var curr = arr[i];

    if (characterCount.hasOwnProperty(curr)) {
      characterCount[curr] ++;
    } else {
      characterCount[curr] = 1;
    }
  }

  for (var j = 0; j < arr.length; j++) {
    if (characterCount[arr[j]] % 2 === 0) {
      return arr[j];
    }
  }

  return null;
}

var arr1 = [1, 3, 3, 3, 2, 4, 4, 2, 5];
console.log(evenOccurrence(arr1));