var inquirer = require("inquirer");

// # **Instructions**

// * Over the course of this assignment you are going to put together a function which uses constructors and user input to create and manage a team of players.

// * Start out by creating a constructor function called "Player" with the following properties and methods...

function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = parseFloat(offense);
    this.defense = parseFloat(defense);
    console.log(this);
}

Player.prototype.goodGame = function() {
    var value = Math.round(Math.random())
    
    if(value === 1) {
        this.offense += 1;
        console.log("This player gained one offense");
    }
    else {
        this.defense += 1;
        console.log("This player gained one defense");
    }
}

Player.prototype.badGame = function() {
    var value = Math.round(Math.random())
    if(value === 1) {
        this.offense -= 1;
        console.log("This player lost one offense");
    }
    else {
        this.defense -= 1;
        console.log("This player lost one defense");
    }
}

Player.prototype.printStats = function() {
    console.log(this)
}

function variableInitialize() {
    playerArray = [];
    playerCount = 0;
    gameCount = 1;
    score = 0;
}

var initialize = function() {
    if(playerCount < 3) {
        inquirer.prompt([
            {
                name: "name",
                message: "What is the player's name?"
            }, {
                name: "position",
                message: "What is their position?"
            }, {
                name: "offense",
                message: "What is their offense ability? (1-10)"
            }, {
                name: "defense",
                message: "What is their defense ability? (1-10)"
            }
        ]).then(function(response) {
            playerArray.push(new Player(response.name, response.position, response.offense, response.defense));
            playerCount += 1;
            initialize();
        })
    }
    else {
        console.log(playerArray);
        playGame();
    }
}

variableInitialize();

initialize();

var newGame = function() {
    gameCount = 1;
    score = 0;
    playGame();
}

function playerChecker() {
    // return the new array with the starters
    var activePlayers = [];
    activePlayers.push(playerArray[1]);
    activePlayers.push(playerArray[2]);
    return(activePlayers);
}

var scoreChecker = function(number, players, type) {
    if(type = "offense") {
        playerScore = players[0].offense + players[1].offense;
        var outcome = number < playerScore;
        console.log("offense outcome: " + outcome)
    }
    else{
        playerScore = players[0].defense + players[1].defense;
        var outcome = number < playerScore;
        console.log("defense outcome: " + outcome)
    }
    return outcome
};

var offenseResult = function(outcome) {
    if(outcome === true) {
        score += 1;
    }
}

var defenseResult = function(outcome) {
    if(outcome === false) {
        score -= 1;
    }
}

var playGame = function() {
    if(gameCount < 6) {
        var offenseNumber = Math.floor(Math.random() * 20);
        var defenseNumber = Math.floor(Math.random() * 20);
        // check if there are two starters or prompt to select someone as a starter essentially.
        var activePlayers = playerChecker();
        console.log("Active players!")
        console.log(activePlayers);
        offenseResult(scoreChecker(offenseNumber, activePlayers, "offense"))
        defenseResult(scoreChecker(defenseNumber, activePlayers, "defense"));
        console.log("Score is: " + score);
        gameCount += 1;
        playGame();
    }
    else{
        console.log("Game is over!");
        if(score === 0) {
            console.log("Score is tied! Good game.");
        }
        else if(score > 1) {
            console.log("Good game!");
            console.log(playerArray[0]);
            for(var i = 0; i < playerArray.length; i++) {
                console.log(playerArray[i]);
                playerArray[i].goodGame();
            }
        }
        else {
            console.log("Aww, you lost.");
            for(var i = 0; i < playerArray.length; i++) {
                playerArray[i].badGame();
            }
        }
        inquirer.prompt([
            {
                name: "again",
                message: "Do you want to play again?"
            }
        ]).then(function(response) {
            if(response.again === "Y" || response.again === "y") {
                newGame();
            }
            else {
                console.log("Thanks for playing!");
            }
        })
    }
}


//   * `name`: Property which contains the player's name
//   * `position`: Property which holds the player's position
//   * `offense`: Property which is a value between 1 and 10 to show how good this player is on offense
//   * `defense`: Property which is a value between 1 and 10 to show how good this player is on defense
//   * `goodGame`: Method which increases either the player's offense or defense property based upon a coinflip.
//   * `badGame`: Method which decreases either the player's offense or defense property based upon a coinflip.
//   * `printStats`: Method which prints all of the player's properties to the screen

// * Now create a program which allows the user to create 3 unique players; 2 starters and a sub. It should take as user input the name, position, offense, and defense of each player.

// * Once all of the players have been created, print their stats.

// * Once your code is functioning properly, move on to create a function called "playGame" which will be run after all of the players have been created and will do the following:

//   * Run 5 times. Each time the function runs:
//     * Two random numbers between 1 and 20 are rolled and compared against the starters' offensive and defensive stats
//       * If the first number is lower than the sum of the team's offensive stat, add one point to the team's score.
//       * If the second number is higher than the sum of the team's defensive stat, remove one point from the team's score.
//     * After the score has been changed, prompt the user to allow them to substitute 1 player from within the starters array with the player from within the subs array.
//   * After the game has finished (been run 5 times):
//     * If the score is positive, run `goodGame` for all of the players currently within the starters array.
//     * If the score is negative, run `badGame` for all of the players currently within the starters array.
//     * If the score is equal to zero, do nothing with the starters.
//     * Give the user a message about if they won, and the status of their starters.
//     * After printing the results, ask the user if they would like to play again.
//       * Run `playGame` from the start once more if they do.
//       * End the program if they don't.

// * HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.

// * HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.
