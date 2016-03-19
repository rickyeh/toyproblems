function telephoneWords(str) {
  var result = [];

  // Take that Danny Rizko. 
  for (var i = 0; i < numKey[str[0]].length; i++) {
    for (var j = 0; j < numKey[str[1]].length; j++) {
      for (var k = 0; k < numKey[str[2]].length; k++) {
        for (var l = 0; l < numKey[str[3]].length; l++) {
          result.push(numKey[str[0]][i] + numKey[str[1]][j] + numKey[str[2]][k] + numKey[str[3]][l]);
        }
      }
    }
  }
  return result;
}

var numKey = {
  '1': ['1'],
  '2': ['A', 'B', 'C'],
  '3': ['D', 'E', 'F'],
  '4': ['G', 'H', 'I'],
  '5': ['J', 'K', 'L'],
  '6': ['M', 'N', 'O'],
  '7': ['P', 'Q', 'R', 'S'],
  '8': ['T', 'U', 'V'],
  '9': ['W', 'X', 'Y', 'Z'],
  '0': ['0']
};

telephoneWords('0002');