/**
 * jQuery TODO
 **/

/*
 *  Use the provided starter HTML to make a list app.
 *  This app will take text from an input box
 *  and display it in another box elsewhere on the page.
 *  Add a way to click and delete the entries you add, too.
 *
 *
 *  Bonus:
 *  ======
 *  Add a new entry when you press the `return` key.
 *  Style it!
 *
 */


// On click, run the add function
 $("#add").click(add);

// On pressing enter, run the add function
// document.onkeyup = function(keypress) {
//     if(keypress.keyCode === 13) {
//         add();
//     }
// }

$("#new-task").keypress(newtaskEnter)

function newtaskEnter(key) {
    if(key.keyCode === 13 && !(key.altKey)) {
        add();
    }
}

// on click of the div, make contenteditabletrue and then edit...?

var taskNumber = 0;

$(document).on("click", ".close", close);

// The add function, which creates the divs
function add() {
    if($("#new-task").val().trim() === "") {
        $("#heading").text("You cannot add a blank task.")
    }
    else{
        $("#heading").text("What do you need to accomplish today?")
        // console.log($("#new-task").val());
        // Create a shell div
        shellDiv = $("<div>");
            // set the id of the div
            shellDiv.attr("id", "task" + taskNumber);
            // set the classes of the div
            shellDiv.addClass("btn btn-light shelldiv") 
        // create a text div (for cleanliness)
            textDiv = $("<div>");
            // insert the text into the div
            textDiv.html($("#new-task").val().trim());
            // create a class for the text
            textDiv.addClass("textdiv");
            // Make the text editable
            textDiv.attr("contenteditable", true);
            // append the text div into the shellDiv
            shellDiv.append(textDiv);
        // create a close div
            closeDiv = $("<div>");
            // insert the X for the div
            closeDiv.text("x");
            closeDiv.attr("value", taskNumber);
            // add a class for the closediv
            closeDiv.addClass("close");
            // append this close div into the shelldiv
            shellDiv.append(closeDiv);
        // append this div into the the #tasks div
        $("#tasks").append(shellDiv);
        // Clear the text in the new-task area
        $("#new-task").val("")
        taskNumber++;
    }

    // local store the value of any open tasks
    // And then also store the value of the taskNumber;
    // 
}

function close() {
    // console.log($(this).attr("value"));
    $("#task"+$(this).attr("value")).remove();
    
}

// When editing a task, if you click enter, it blurs/deselects the task
$(document).on("keypress", ".textdiv", editEnter);

function editEnter(key) {
    if(key.keyCode === 13) {
        $(this).blur();
    }
}

// https://stackoverflow.com/questions/1391278/contenteditable-change-events
// Look at content editable change events for updating local storage at some point.