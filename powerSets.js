function powerSet(string) {
  var letters = string.split('');
  var result = [''];

  for (var i = 0; i < letters.length; i++) {
    if (letters.indexOf(letters[i]) !== letters.lastIndexOf(letters[i])) {
      letters.splice(i, 1);
      i--;
    }
  }
  letters = letters.sort();

  function recurse(tempAnswer) {
    debugger;
    if (tempAnswer.length === 1) {
      result.push(tempAnswer);
    }

    var index = letters.indexOf(tempAnswer.slice(-1)) + 1;

    for (var i = index; i < letters.length; i++) {
      result.push(tempAnswer + letters[i]);
      recurse(tempAnswer + letters[i]);
    }
  }

  for (var i = 0; i < letters.length; i++) {
    recurse(letters[i]);
  }

  return result;
}

var str1 = 'a';
var str2 = 'ab';
var str3 = 'cruz';

console.log(powerSet(str3));