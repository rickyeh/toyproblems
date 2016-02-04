commonCharacters = function(string1, string2){
  var result = [];
  for (var i = 0; i < string1.length; i++) {
    var curr = string1[i];

    if (string2.indexOf(curr) >= 0 && result.indexOf(curr) < 0 && curr !== ' ') {
      result.push(string1[i]);
    }
  }
  return result.join('');
};