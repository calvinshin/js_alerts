 $("p").click(function() {
  $( this ).toggleClass( "highlight" );
});
// $("p").hover(function {
//     $(this).toggleClass("highlight");
//   });

unknownWord = "zyxwv";
secretWord = "apple";

document.onkeydown = function(keypress) {
  for (letter = 0; letter<unknownWord.length; letter++) {
    console.log(letter + " iteration")
    console.log(secretWord[letter]===keypress.key)
    if(secretWord[letter]===keypress.key) {
        console.log(unknownWord[letter] + " " + keypress.key)
        // ~~~~~~~~~~~~~~~~~~~~~~ this replacement doesn't seem to work.... oh maybe becaues I never call unknown word afterwards
        // Actually this replace doesn't seem to work as intended... strange.
        secretWord.replace("a", keypress.key)
        console.log(unknownWord)
    }
  }
  console.log("end of function; word is " + unknownWord)
  console.log("end of function; secretword is " + secretWord)
};

secretWord.replace("a", "b")
console.log(secretWord)

let myStr = 'My little Alligator 🐊';

console.log(myStr.replace('Alligator', 'gator')); // My little gator 🐊
console.log(myStr)