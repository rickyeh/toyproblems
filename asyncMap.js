var asyncMap = function(tasks, callback) {
  var results = [];
  var counter = 0;

  var executeTask = function(i) {
    tasks[i](function(arg) {
      results[i] = arg;
      counter++;
      if (counter === tasks.length) {
        callback(results);
      }
    });
  };

  for (var i = 0; i < tasks.length; i++) {
    executeTask(i);
  }
};


function callback(array) {
  console.log('Logging array');
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

var tasks = [
  function(cb) {
    cb('three');
  },
  function(cb) {
    cb('four');
  }
];

console.log(asyncMap(tasks, callback));

// tasks[1](function(arg){return arg});