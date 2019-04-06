// Step 1:
// Use the following Audio file below:

var audio = new Audio("raven.mp3");

//  Step 2: do the following between the --- comments below
//  after 5 seconds, execute the fiveSeconds function
//  after 10 seconds, execute the tenSeconds function
//  after 15 seconds, execute the timeUp function

// ---------------------
// CODE STEP TWO HERE
// ---------------------

var seconds = 15;

setInterval(function() {
  seconds--;
  $("#seconds").text(seconds);
  },
  1000
);

// Step 3:
// Fill in the blanks to these functions.
function fiveSeconds() {
  // in the element with an id of `time-left` add an h2 saying About 10 Seconds Left!
  // console log 10 seconds left
  setTimeout(function() {
    $("#time-left").html("<div>10 seconds left!</div>")
  }, 5000)
}

fiveSeconds();

function tenSeconds() {
  // in the element with an id of `time-left` add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left
  setTimeout(function() {
    $("#time-left").text("<div>5 seconds left!</div>")
  }, 10000)

}

tenSeconds();

function timeUp() {
  // in the element with an id of `time-left` add an h2 saying Time's Up!
  // console log done
  setTimeout(function() {
    $("#time-left").text("<h2>Time's up!</h2>")
  }, 15000)
  // The following line will play the audio file above
  audio.play();
}

timeUp();