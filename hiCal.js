// Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.
// To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects ↴ with attributes startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.

// Write a function condenseMeetingTimes() that takes an array of meeting time ranges and returns an array of condensed ranges.

// For example, given:

//   [
//     {startTime: 0,  endTime: 1},
//     {startTime: 3,  endTime: 5},
//     {startTime: 4,  endTime: 8},
//     {startTime: 10, endTime: 12},
//     {startTime: 9,  endTime: 10},
// ]

// your function would return:

//   [
//     {startTime: 0, endTime: 1},
//     {startTime: 3, endTime: 8},
//     {startTime: 9, endTime: 12},
// ]

// Do not assume the meetings are in order. The meeting times are coming from multiple teams.

// In this case the possibilities for startTime and endTime are bounded by the number of 30-minute slots in a day. But soon you plan to refactor HiCal to store times as Unix timestamps (which are big numbers). Write something that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges.

function condenseMeetingTimes(meetings) {

  var sortedMeetings = meetings.slice().sort(function(a, b) {
    return a.startTime > b.startTime ? 1 : - 1;
  });

  var mergedMeetings = [sortedMeetings[0]];

  for (var i = 1; i < sortedMeetings.length; i++) {
    var currentMeeting = sortedMeetings[i];
    var lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
    } else {
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}

var meetings = [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
];

console.log(condenseMeetingTimes(meetings));


// Complexity
// O(n\lg{n})O(nlgn) time and O(n)O(n) space.

// Even though we only walk through our array of meetings once to merge them, we sort all the meetings first, giving us a runtime of O(n\lg{n})O(nlgn). It's worth noting that if our input were sorted, we could skip the sort and do this in O(n)O(n) time!

// We create a new array of merged meeting times. In the worst case, none of the meetings overlap, giving us an array identical to the input array. Thus we have a worst-case space cost of O(n)O(n).