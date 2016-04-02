function longestPalindrome (string) {
  var results = [];
  var array = string.split('');

  // Loop through the array,
    // Get the last index of it
      // If last index is equal to index, move on
      // If it is not equal
        // Save the last index
        // Start palindrome checking mode (use helper function ispalindrome with sliced copy of array)
          // IF it is a palindrome, push it to a results array
          // If not, move to the next last index and check for palindrome until indexes are equal
  for (var i = 0; i < array.length; i++) {
    var curr = array[i];
    var lastIndex = array.lastIndexOf(curr);
    if (i !== lastIndex) {
      while (i !== lastIndex) {
        var possiblePalindrome = array.slice(i, lastIndex + 1);

        if (isPalindrome(possiblePalindrome)) {
          results.push(possiblePalindrome);
        } 
        lastIndex = array.lastIndexOf(curr, lastIndex - 1);
      }

    }
  }

  // Loop through results and return longest length result
  var longestPalindrome = [];
  for (var i = 0; i < results.length; i++) {
    if (results[i].length > longestPalindrome.length) {
      longestPalindrome = results[i];
    }
  }
  return longestPalindrome.join('');
}

function isPalindrome(array) {
  for (var i = 0; i <= array.length / 2; i++) {
    if (array[i] !== array[array.length - 1 - i]) {
      return false;
    }
  }
  return true;
}


var string = "There was a tattarrattat on the racecar. It made a funny noise, gfedcbabcdefg";

longestPalindrome(string);

// console.log(isPalindrome('abc'));
// console.log(isPalindrome('a racecar a'));