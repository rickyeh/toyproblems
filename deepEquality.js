var deepEquals = function(a, b){
  var retVal = true;

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  };

  for (var k in a) {
    if (typeof a[k] === 'object' ){
      retVal = deepEquals(a[k], b[k]);
    } else if (a[k] !== b[k]) {
      return false;
    }
  }
  return retVal;
};  


var a = { b: { c: { d: { e: 'potato' } } }, foo: 1 };
var b = { foo: 1, b: { c: { d: { e: 'potato' } } } };
var c = { a: 1, b: { b: 1}};
var d = { a: 1};
console.log(deepEquals(d,c));

// Compare 
// For loop through A,
// Check if properties in A exist in B.
  // If they all do, return true, else return false, and return right away
// if you encounter an object. recursively call function with 
  // a = current searchin obj and b at equivalent obj

// Check if all properties in B exist in A, do the same.