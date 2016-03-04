  var makeHashTable = function() {
    var table = {};
    var storage = [];
    var storageLimit = 1000;

    table.insert = function(key, value) {
      var index = getIndexBelowMaxForKey(key, storageLimit);
      
      var insertObj = {};
      insertObj[key] = value;

      if (storage[index] === undefined) {
        storage[index] = [insertObj];
      } else {
        storage[index].push(insertObj);
      }

    };

    table.retrieve = function(key) {
      var index = getIndexBelowMaxForKey(key, storageLimit);
      var retVal;
      if (storage[index] === undefined) {
        return undefined;
      }

      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i].hasOwnProperty(key)) {
          retVal = storage[index][i][key];
        }
      }
      return retVal;

      // storage[index].forEach(function(element) {
      //   if (element.hasOwnProperty(key)) {
      //     console.log('Found element, returning : ', element[key]);
      //     return element[key];
      //   }
      // });
    };

    table.remove = function(key) {
      var index = getIndexBelowMaxForKey(key, storageLimit);

      if (storage[index] === undefined) {
        return undefined;
      } 

      storage[index] = undefined;
    }
    return table;
  };

  var getIndexBelowMaxForKey = function(str, max) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % max;
  };

  var hashTable = makeHashTable();
  // hashTable.insert('a', 1);
  // hashTable.insert('a', 5);
  // hashTable.insert('b', 2);
  // hashTable.insert('c', 3);
  // hashTable.retrieve('a');
  hashTable.insert('William Shatner\'s most well known role', 'Captain Kirk');
  var value = hashTable.retrieve('William Shatner\'s most well known role');
  console.log(value);