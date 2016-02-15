function longestRun (string) {
  console.log('String is : ' + string);

  var longestStart = 0;
  var longestEnd = 0;
  var runStart = 0;
  var runEnd = 0;
  var currentLetter;
  var nextLetter;
  var runLetter = '';

  for (var i = 0; i < string.length; i++) {

    currentLetter = string[i];
    nextLetter = string[i+1];

    if (currentLetter === nextLetter) {
      if (nextLetter === runLetter) {
        runEnd = i+1;
      } else {
        runStart = i;
        runEnd = i+1;
      }
      runLetter = currentLetter;

      if (runEnd - runStart > longestEnd - longestStart) {
        longestStart = runStart; 
        longestEnd = runEnd;
      }
    } else {
      runLetter = '';
    }
  }

  console.log('longestStart : ' + longestStart);
  console.log('longestEnd : ' + longestEnd);
}

var str = "abbbcccc";
longestRun(str);

// Have current character, startIndex = 0
// Have last index start at 0
// Keep track of longest run
// Loop through characters
// If next character is identical to previous character, keep current same,
// iterate next
