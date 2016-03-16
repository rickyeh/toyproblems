function primeTester (n) {
  var highestCheck = Math.floor(Math.sqrt(n));

  if (n === 1) {
    return false;
  }

  for (var i = 2; i <= highestCheck; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
