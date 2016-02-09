var Range = function(start, end, step) {
  
  this.isBackwards = false;
  
  if (start === undefined) {
    return null;
  }

  this.start = start;

  if (end === undefined) {
    this.end = start;

  } else {
    this.end = end;

    if (this.start > this.end) {
      this.isBackwards = true;
    }

    if (step === undefined) {
      if (!this.isBackwards) {
        this.step = 1;
      } else {
        this.step = -1;
      }   
    } else {
      this.step = step;
    }
  }
  console.log('Range created - start: ' + this.start + ' end: ' + this.end + ' step: ' + this.step);
};

Range.prototype.size = function () {
  if (this.step === undefined) {
    this.step = 1;
  }
  return Math.ceil((Math.abs(this.start - this.end) + 1 ) / Math.abs(this.step));
};

Range.prototype.each = function (callback) {
  var curr = this.start;
  var sizeOfRange = this.size();

  for(var i = 0; i < sizeOfRange; i++) {
    callback(curr);
    curr += this.step;
  }
};

Range.prototype.includes = function (val) {
  console.log('Target : ', val);
  var retVal = false;

  this.each(function(element) {
    if (element === val) {
      retVal = true;;
    }
  });
  return retVal;
};

// var myRange = new Range(10, 0, -1); // a new range representing the numbers between 0 and 10 (inclusively)

var evenNumbers = new Range(10,0, -1); // A range with the even numbers 2, 4, 6, and 8.

// evenNumbers.each(function(val){ console.log(val+'!'); }); //Prints '2! 4! 6! 8!'

console.log('Size? : ', evenNumbers.size()) //4

// console.log('Includes 2? : ', evenNumbers.includes(2)) //True

// console.log('Includes 3? : ', evenNumbers.includes(3)) //False