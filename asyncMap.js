var asyncMap = function(tasks, callback){
  var results = [];

  for(var i = 0; i < tasks.length; i++) {
    tasks[i](function(arg){
      // console.log(arg);
      // results.push(arg);
      results[i] = arg;
    });

    if (results.length === tasks.length) {
      callback(results);
    }
  }

  // retVal = callback(results);
  // Check results length vs tasks length
  // callback on results
  console.log('Results: ' + results);

  // callback(results);
};  


function callback(array) {
  console.log('Logging array'); 
  for (var i = 0; i < array.length; i++){
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