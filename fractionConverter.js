function fractionConverter (number) {
  var numerator;
  var denominator;
  var greatestCommonDivisor;

  // Get integer and Decimal portion of number
  var integer = Math.floor(number);
  var decimal = number - integer;

  if (!decimal) {
    return integer + '/1';
  }

  // Get length of digits of decimal
  var exponent = decimal.toString().slice(2).length;

  // Use that digits to calculate the numerator and denom of decimal
  var fractionNumerator = decimal * Math.pow(10, exponent);
  var fractionDenominator = Math.pow(10, exponent);

  // Find the greatest common divisor to reduce fraction
  for (var i = fractionNumerator; i > 1; i--) {
    if (Number.isInteger(fractionDenominator / i) && Number.isInteger(fractionNumerator / i)) {
      console.log('Found a GCD : ', i);
      greatestCommonDivisor = i;
      break;
    }
  }

  // Reduce the fraction
  if (greatestCommonDivisor !== undefined) {
    fractionNumerator = fractionNumerator / greatestCommonDivisor;
    fractionDenominator = fractionDenominator / greatestCommonDivisor;
  }

  // Multiply denominator with original integer to get numerator
  numerator = fractionDenominator * integer + fractionNumerator;
  denominator = fractionDenominator;

  // Fix any rounding errors
  numerator = Math.round(numerator);

  return numerator + '/' + denominator;
}


var num1 = 0.5;
var num2 = 3;
var num3 = 2.5;
var num4 = 2.75;

var num5 = 0.25;
var num6 = 0;

console.log(fractionConverter(num1));


// Use the decimal portion of the number .56
// There are 2 digits in .56, write .56 as 56/100.

// So we have 2 + 56/100 and need to reduce this fraction
// to lowest terms by dividing both the numerator and
// denominator by the greatest common divisor,
// which is 4 in this case.

// So, this fraction reduced to lowest terms is 2 + 14/25