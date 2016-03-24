var mixEvents = function(obj) {
  //Your code here
  var events = {};

  obj.trigger = function(event) {
    var args = [].slice.call(arguments, 1);

    if (!events[event]) {
      return;
    }

    for (var i = 0; i < events[event].length; i++) {
      events[event][i].apply(null, args);
    }
  };

  // Register a callback to be fired on this event.
  obj.on = function(event, callback) {
    if (obj[event]) {
      obj[event].push(callback);
      events[event].push(callback);
    } else {
      obj[event] = [callback];
      events[event] = [callback];
    }
    console.log(obj);
  };
  return obj;
};



// Example usage:
// var obj = mixEvents({ name: 'Alice', age: 30 });
// obj.on('ageChange', function(){ // On takes an event name and a callback function
//   console.log('Age changed');
// });
// obj.age++;
// obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.

var car = mixEvents({
  color: "red",
  "insurance-premium": "costly",
  speed: 0,
  radio: "off"
});

car.on('green-light', function() {
  car.speed = 100;
});

car.on('green-light', function() {
  car.radio = "blaring";
});

car.trigger('green-light', 'arg1', 'arg2');

console.log(car);