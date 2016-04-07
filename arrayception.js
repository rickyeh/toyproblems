function arrayception (array) {
  var count = 0;

  recurse(array, 0)

  function recurse(array, level) {
    level++;

    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        recurse(array[i], level);
      } else {
        if (level > count) {
          count = level;
        }
      }
    }
  }
  return count;
}

var array =  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ];

arrayception(array);
