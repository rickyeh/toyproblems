function characterFrequency(string) {
  var result = [];
  var frequency = {};

  // Store frequencies in obj
  for (var i = 0; i < string.length; i++) {
    if (frequency[string[i]]) {
      frequency[string[i]] ++;
    } else {
      frequency[string[i]] = 1;
    }
  }

  // console.log('Object is :');
  // for (var key in frequency) {
  //   console.log(key + ' : ' + frequency[key]);
  // }

  for (var k in frequency) {
    result.push([k, frequency[k]]);
  }

  result.sort(function(a,b) {
    if (a[1] > b[1]) return -1;
    else if (a[1] < b[1]) return 1;
    else if (a[0] < b[0]) return -1;
    else if (a[0] > b[0]) return 1;
    return 0;
  });

  return result;
}

var str = "mississippi";

characterFrequency(str);