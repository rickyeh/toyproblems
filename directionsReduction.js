function dirReduc(arr){
  
  for (var i = 0; i < arr.length - 1; i++) {
    console.log('Array is : ', arr);
    switch (arr[i]) {
      case 'NORTH':
        if (arr[i+1] === 'SOUTH') {
          arr.splice(i + 1, 1);
          arr.splice(i, 1);
          i = -1;
        }
        break;

      case 'SOUTH':
        if (arr[i+1] === 'NORTH') {
          arr.splice(i + 1, 1);
          arr.splice(i, 1);
          i = -1;
        }
        break;

      case 'EAST':
        if (arr[i+1] === 'WEST') {
          arr.splice(i + 1, 1);
          arr.splice(i, 1);
          i = -1;
        }
        break;

      case 'WEST':
        if (arr[i+1] === 'EAST') {
          arr.splice(i + 1, 1);
          arr.splice(i, 1);
          i = -1;
        }
        break;
    }
  }
  return arr;
}

var test = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
console.log(dirReduc(test));