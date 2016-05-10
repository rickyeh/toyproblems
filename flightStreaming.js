// You've built an in-flight entertainment system with on-demand movie streaming.

// Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

// When building your function:

// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory

// Return boolean whether ther are two nums whose sum equals flightlength

// VERSION 1 - QUADRATIC TIME
function suggestMovies(flightMinutes, movieLengths) {

  // Loop through array, subtract from flightMins, and see if results exists in rest of array
  for (var i = 0; i < movieLengths.length; i++) {
    var firstMovie = movieLengths.splice(i, 1, null);
    var remainingMinutes = flightMinutes - firstMovie;

    if (movieLengths.indexOf(remainingMinutes) > -1) {
      return true;
    } else {
      movieLengths[i] = firstMovie;
    }
  }

  return false;
}

var totalMins = 10;
var movies = [1,3,5,7];

console.log(suggestMovies(totalMins, movies));
