var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function translateRomanNumeral (romanNumeral) {
  var result = 0;
  var currentLetter;
  var nextLetter;

  for (var i = 0; i < romanNumeral.length; i++) {

    currentLetter = romanNumeral[i];
    if (romanNumeral[i+1] !== undefined) {
      nextLetter = romanNumeral[i+1];
    } else {
      nextLetter = undefined;
    }

    if (!DIGIT_VALUES.hasOwnProperty(currentLetter)) {
      return "null";
    }

    if (DIGIT_VALUES[currentLetter] >= DIGIT_VALUES[nextLetter] || nextLetter === undefined) {
      result += DIGIT_VALUES[currentLetter];
    } else {
      result -= DIGIT_VALUES[currentLetter];
    }
  }
  return result;
}

// Loop through the string
// Check current letter and next letter, if exists
//   If current letter isn't a valid char, return null
//   If curr value is less than next, subtract from total
//   Add on value of each letter

translateRomanNumeral('LX');
translateRomanNumeral('LXIII');
translateRomanNumeral('MDCLXVVII');