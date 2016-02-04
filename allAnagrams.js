function allAnagrams (string) {
  var result = [];
  var letters = string.split('');

  var previousReturn = allAnagrams(letters.slice(-1));

  for

  // function recurse(str) {
  //   var array = [];
  //   var remainingLetters = str.split();

  //   if(str.length === 1) {
  //     return array.push(str);
  //   }

  //   for (var i = 0; i < str.length) {
  //     array.push(remainingLetters.splice(i, 1) + recurse(remainingLetters.slice(1)));
  //   }
  // }
}


var string = 'ab';