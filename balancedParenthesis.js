function isBalanced(string) {
  var stackOfParens = [];
  var stackOfBrackets = [];

  for (var i = 0; i < string.length; i++) {
    switch (string[i]) {
      case '{':
        stackOfBrackets.push(1);
        break;
      case '}':
        if (stackOfBrackets.length === 0) {
          return false;
        } else {
          stackOfBrackets.pop();
        }
        break;
      case '(':
        stackOfParens.push(1);
        break;
      case ')':
        if (string[i] === ')') {
          if (stackOfParens.length === 0) {
            return false;
          } else {
            stackOfParens.pop();
          }
        }
        break;
    }
  }
  return (stackOfBrackets.length === 0 && stackOfParens.length === 0);
}

var string = 'test';
var str1 = '{}{}ss{}{}{}()()'; // true
var str2 = '{{}}sds{}{}ddd{dddd(})'; // true
var str3 = '}{}efse{sdfef{{}'; // false
var str4 = '{{}sefefs}(()}'; // false

console.log('1 : ' + isBrackets(str1));
console.log('2 : ' + isBrackets(str2));
console.log('3 : ' + isBrackets(str3));
console.log('4 : ' + isBrackets(str4));