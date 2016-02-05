// Compose should return a function that is the composition of a list of functions of arbitrary length.

 // Each function is called on the return value of the function that follows.

var compose = function(){
  var args = Array.prototype.slice.call(arguments);

  function returnedFunc(arg1) {
    return args.reduceRight(function(prev, curr) {
      return curr(prev);
    }, arg1);
  }
  return returnedFunc;
};

var pipe = function(){
  var args = Array.prototype.slice.call(arguments);

  function returnedFunc(arg1) {
    return args.reduce(function(prev, curr) {
      return curr(prev);
    }, arg1);
  }
  return returnedFunc;
};


// var greet = function(name){ return 'hi: ' + name;}
// var exclaim = function(statement) { return statement.toUpperCase() + '!';}

// var welcome = compose(greet, exclaim);
// console.log(welcome('phillip')); //=> 'hi: PHILLIP!'

// var add2 = function(number){ return number + 2; }
// var multiplyBy3 = function(number){ return number * 3; }

// console.log(pipe(add2, multiplyBy3)(5)); //=> 21
// console.log(pipe(add2, multiplyBy3, multiplyBy3)(5)); //=> 63

