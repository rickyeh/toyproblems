function firstNonRepeatedCharacter (string) {
  var arrOfChars = string.split('');

  for (var i = 0; i < arrOfChars.length; i++) {
    var currLetter = arrOfChars.shift();
    var indexOfDupe = arrOfChars.indexOf(currLetter);

    if (indexOfDupe < 0) {
      return currLetter;
    } 

    for (var j = 0; j < arrOfChars.length; j++) {
      if (arrOfChars[j] === currLetter) {
        arrOfChars.splice(j, 1);
        j--;
        i--;
      }
      if (arrOfChars.length === 0) {
        return 'sorry';
      }
    }
  }
}

// Melinda's Better implementation

// function firstNonRepeatedCharacter (string) {
//   for (var i = 0; i < string.length; i++) {
//     if (string.indexOf(string[i]) === string.lastIndexOf(string[i])) {
//       return string[i];
//     }
//   }
//   return "sorry";
// }

// Split the string into array
// For loop through the string
  // Shift out letter to currnet letter.
  // Search for the letter in rest of string
    // If doesn't exist, then return that letter
    // If it does exist, splice out that index and search array for more
// If string is empty, return sorry

// var str1 = 'ABCD';
// var str2 = 'XXXXXX';
// var str3 = 'ALABAMA';
// var str4 = 'BABA';
var str5 = 'ABACACCYWYWKPOXB';

console.log(firstNonRepeatedCharacter(str5));