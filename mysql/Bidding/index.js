console.log("Loading...");

password = require("../../../../../../password");
mysql = require("mysql");
inquirer = require("inquirer");

var lineBreak = function() {
    console.log("\n\n-----------------------------------\n\n");
};

initialChoices = ["Post an item", "Bid on an item", "Exit"]

function initialQuestion() {
    lineBreak();
    console.log("Welcome to the initial application!")
    inquirer.prompt([
        {
            name: "initialOption",
            message: "What would you like to do?",
            choices: initialChoices,
            type: "list",
        }
    ]).then(function(response) {
        var option = response.initialOption
        if(option === initialChoices[2] && option === "Exit") {
            console.log("Goodbye!")
        }
        else if(option === "Post an item" && option === initialChoices[0]) {
            postItem();
        }
        else if(option === "Bid on an item" && option === initialChoices[1]) {
            bidItem();
        }
        else {
            console.log("ERROR")
        }
    })
}

function postItem() {
    console.log("You're attempting to post an item!");
}

function bidItem() {
    console.log("Youre attempting to bid on an item!");
}




initialQuestion();