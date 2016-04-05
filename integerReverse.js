function reverseInteger (n) {
  var num = n;
  var exponent = 1;
  var result = 0;

  while (num > 9) {
    exponent++;
    num = num / 10;
  }

  console.log('Exponent is : ', exponent);

  for (var i = 1; i <= exponent; i++) {
    console.log('i = ', i);

    var current = n % Math.pow(10, i);
    console.log('Current 1 : ', current);

    current = current - (n % Math.pow(10, i - 1));
    console.log('Current 2 : ', current);

    while (current > 9) {
      current = current / 10;
    }

    current = current * Math.pow(10, exponent - i);
    console.log('Current 3 : ', current);

    result += current;
    console.log(result);
  }

  console.log(result);
  return result;
}

var a = 1234;

reverseInteger(a);

// 1234 % 10 = 4
// 1234 % 100 = 34
// 1234 % 1000 = 234
// 1234 % 10000 = 1234

// 1234 % 10 = 4
// 1234 % 100 - 4 / 10 = 3
// 1234 % 1000 - 34 / 100 = 2
// 1234 % 10000 - 234 / 1000 = 1

// 4
// 30
// 200
// 1000

// if ( n % 10 < 10 ) then it is single digit  