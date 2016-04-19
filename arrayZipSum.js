function zipSum (xs, ys) {

  var resultArr = [];
  var iterations = Math.min(xs.length, ys.length);

  for (var i = 0 ; i < iterations; i++) {
    if (!xs[i]) {
      resultArr.push(ys[i]);
    } else if (!ys[i]) {
      resultArr.push(xs[i]);
    } else {
      resultArr.push(xs[i] + ys[i]);
    }
  }
  return resultArr;
}
var a = [10, 20];
var b = [1, 2, 3, 4 ];

zipSum(a, b);
