var question = [ 
    {q: "The sky is blue", a: "t"},
    {q: "Was this made from a coding class?", a: "t"},
    {q: "The answer is true", a: "t"},
    {q: "Is porcetta vegetarian?", a: "f"}
    ];

var score = 0;
var questionNumber = 0;

console.log("This javascript page was loaded!")

    document.getElementById("score").innerHTML = score
    document.getElementById("question").innerHTML = question[questionNumber].q

// for(var i=0; i < question.length; i++) {
//     document.getElementById("question").innerHTML = question[i].q
// }

console.log(question.length)

document.onkeydown = function(keypress) {
    if(questionNumber < question.length) {
        if (keypress.key === "t" || keypress.key ==="f") {
            if (keypress.key === question[questionNumber].a) {
                console.log("okay you got the question right");
                alert("Correct!");
                score = score + 1;
            }
            else {
                console.log("lol I got the answer wrong");
                alert("Incorrect!");
            }
            document.getElementById("score").innerHTML = score;
            questionNumber = questionNumber + 1;
            if (questionNumber === question.length) {
                alert("You completed the quiz!")
                keypress.preventDefault();
            }
            else {
                document.getElementById("question").innerHTML = question[questionNumber].q
            }
        }
    }
}