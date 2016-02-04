function countIslands (mapStr) {
  // Array of Rows
  // Second index will be columns
  // 1. Create your arrays
  var islandCount = 0;
  var visitedSpots = [];
  var arrayOfRows = mapStr.split('\n');

  for (var i = 0; i < arrayOfRows.length; i++) {
    for (var j = 0; j < arrayOfRows[i].length; j++) {
      var curr = arrayOfRows[i][j];

      if (curr === '0' && visitedSpots.indexOf('['+i+','+j+']') < 0) {
        console.log('Found starting island at : ' + i + j);
        islandCrawler(i, j);
      }
    }
  }

  function islandCrawler(i, j) {
    islandCount++;

    if (visitedSpots.indexOf('['+i+','+j+']') >= 0) {
      console.log('Visited before, exiting');
      return;
    }

    console.log('Visiting : ' + i + ', ' + j);
    visitedSpots.push('['+i+','+j+']');
    console.log('Visited Spots : ' + visitedSpots);

    // Top
    if ((i-1) >= 0) {
      if (arrayOfRows[i-1][j] === '0' && visitedSpots.indexOf('['+i-1+','+j+']') < 0) {
        console.log('Found an adjacent connector up');
        islandCrawler(i-1, j, 'up');
      islandCount--;

      } 
    }
    // Left
    if ((j-1) >= 0) {
      if (arrayOfRows[i][j-1] === '0' && visitedSpots.indexOf('['+i+','+j-1+']') < 0) {
        console.log('Found an adjacent connector left');
        islandCrawler(i, j-1, 'left');
      islandCount--;

      } 
    }    
    // Right
    if ((j+1) < arrayOfRows[i].length) {
      if (arrayOfRows[i][j+1] === '0' && visitedSpots.indexOf('['+i+','+j+1+']') < 0) {
        console.log('Found an adjacent connector right');
        islandCrawler(i, j+1, 'right');
      islandCount--;

      } 
    }
    // Bottom
    if ((i+1) <arrayOfRows.length) {
      if (arrayOfRows[i+1][j] === '0' && visitedSpots.indexOf('['+i+1+','+j+']') < 0) {
        console.log('Found an adjacent connector bottom');
        islandCrawler(i+1, j, 'bottom');
      islandCount--;

      } 
    }
  }

  return islandCount;
}

var island1 = '.0...\n.00..\n....0';

// .0...
// .00..
// ....0

var island2 = '..000\n...00\n0...0\n00..0\n.....\n.000.';

// ..000.
// ..000.
// ..000.
// .0....
// ..000.

console.log(countIslands(island2));