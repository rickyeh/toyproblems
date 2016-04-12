
var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  var resizing = false;

//***Finish This Function***//  
//*************************//
//copy storage
//set storage to empty array

//for each element in the storage
 //for each tuple
 //generate new hash value
 //insert into new storage

  function resize(newSize){
    var storageCopy = storage;
    storageLimit = newSize;
    storage = [];

    storageCopy.forEach(function(hashCell) {
      hashCell.forEach(function(element) {
        result.insert(element[0], element[1]);
      });
    });
  }
  
  result.insert = function(key, value){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    var pairs = storage[index];
    var pair;
    var replaced = false;
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        pair[1] = value;
        replaced = true;
      }
    }

    if (!replaced) {
      pairs.push([key, value]);
      size++;
    }
    if(size >= storageLimit * 0.75){
      // increase the size of the hash table
      resize(storageLimit * 2);
    }
  };

  result.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    if (!pairs) { return; }
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair && pair[0] === key) {
        return pair[1];
      }
    }
  };

  result.remove = function(key){

    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        var value = pair[1];
        delete pairs[i];
        size--;
        if(size <= storageLimit * 0.25){
          // decrease the size of the hash table
          resize(storageLimit / 2);
        }
        return value;
      }
    }
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var hashTable = makeHashTable();
    var n = 10, id = 0, diffs = [];
    var endTime, startTime;
    for(var i = 0; i <= n; i++){
      startTime = new Date();
      for(var j = 0; j < 1000; j++){
        hashTable.insert('userid:' + (id++), 'Syd Mead');
      }
      for(j = 0; j < 100; j++){
        hashTable.retrieve('userid:' + Math.floor(Math.random() * i));
      }
      endTime = new Date();
      diffs.push(endTime - startTime);
    }
    var sum = function(arr){
      var total = 0;
      for(var i = 0;i < arr.length; i++) {
        total += arr[i];
      }
      return total;
    }