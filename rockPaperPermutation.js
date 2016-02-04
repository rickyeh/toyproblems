// Recursion
// 1. Base Case
// 2. Iteration leading to base case
// 3. Return value

function rockPaperPermutation (roundCount) {
  var possibleResults = ['r', 'p', 's'];
  var retVal = [];

  if (roundCount === 0) {
    return [];
  }
  if (roundCount === 1) {
    return possibleResults;
  }

  var previousReturnArray = rockPaperPermutation(roundCount - 1);
  // Loop through possible results
  // Concatenate each of the previous possible results to each letter
  for (var i = 0; i < possibleResults.length; i++) {
    for (var j = 0; j < previousReturnArray.length; j++) {
      retVal.push(possibleResults[i].concat(previousReturnArray[j]));
    }
  }

  return retVal;
}