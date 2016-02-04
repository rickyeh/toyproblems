Array.prototype.isSubsetOf = function() {
  var args = arguments[0];

  for (var i = 0; i < this.length; i++) {
    if (args.indexOf(this[i]) < 0) {
      return false;
    }
  }
  return true;
};
  // var args = Array.prototype.slice.call(arguments);

  // Get arguments
  // Iterate through "this" array.  Check for indexes from args array
  // If any return -1, then return false
  // IF all return >=0, then return true
var arr1 = ['cat', 'dog', 'pig', 'bat'];
var arr2 = ['pig', 'dog'];
var arr3 = ['tree', 'pig'];

var result = arr3.isSubsetOf(arr1);

console.log(result);
