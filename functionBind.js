var bind = function(func, context){
  var args = Array.prototype.slice.call(arguments, 2);
  
  return function(){
    var newArgs = Array.prototype.slice.call(arguments);
    console.log('Args list: ' + args);
    return func.apply(context, args.concat(newArgs));
  };
}; 

Function.prototype.bind = function(context) {
  var args = Array.prototype.slice.call(arguments, 1);

  var func = this;
  return function(){
    var newArgs = Array.prototype.slice.call(arguments);

    return func.apply(context, args.concat(newArgs));
  };
};

// var alice = {
//   name: 'alice',
//   shout: function () {
//     console.log('here comes' + ' ' + this.name);
//   }
// };

// alice.shout();

// var boundShout = bind(alice.shout, { name: 'bob' });
// boundShout();

var foo = function(arg1){ return arg1 };

var context = null;
var boundFunc = bind(foo, context, "foobar");
console.log(boundFunc)
var result = boundFunc();
console.log('Result : ' + result);