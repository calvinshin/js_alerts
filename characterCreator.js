// # **Instructions**

// * Over the course of this activity you are going to be using constructors to create simplistic characters for use within a very basic Roleplaying Game (RPG)

// * Each character created using your constructor should have the following properties...

//   * Name: The character's name --> String

//   * Profession: What the character does for a living --> String

//   * Gender: The character's gender --> String

//   * Age: The character's age --> Integer

//   * Strength: Abstraction for how strong the character is --> Integer

//   * HitPoints (HP): Abstraction for how much health the character has --> Integer

//   * PrintStats: Function which prints all of a character's properties to the screen

//   * Once you have created your constructor, create two new characters and print their properties to the screen

//   * Fool around and get comfortable with your constructor before moving onto the next parts of the activity

// * Now that you feel comfortable with your constructor, it is time to start making this character creation system a little more reactive by adding in some more methods...

//   * IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.

//   * Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.

//   * LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.

// * BONUS: After completing the previous sections and making sure they work, you now have everything you need to create a very basic RPG where two characters fight one another. Don't worry if you cannot finish this part of the activity as, by completing the above sections you are well on your way to mastering constructors!



function Character(name, profession, gender, age, str, hp) {
    this.name = typeof name === "string" ? name : name.toString();
    this.profession = profession;
    this.gender = gender;
    this.age = Number.isInteger(age) ? age : null;
    this.str = Number.isInteger(str) ? str : null;
    this.hp = Number.isInteger(hp) ? hp : null;
    this.isAlive = function() {
        if(this.hp < 0) {
            return false
        }
    };
    this.attack = function(character) {
        character.hp -= this.str
    }
    this.levelUp = function() {
        var strIncrease = Math.floor(Math.random() * 5) + 2;
        var hpIncrease = Math.floor(Math.random() * 5) + 2;
        this.age += 1;
        this.str += strIncrease;
        this.hp += hpIncrease;
        console.log(this.name + " leveled up! They gained " + strIncrease + " strength and " + hpIncrease + " hp")
    }
}

var John = new Character("John", "Doctor", "Male", 26, 5, 12)

console.log(John);

names = ["Ben", "Katie", "Joe"]
occupations = ["Doctor", "Maid", "Servant", "Lord", "Hero"]
genders = ["Male", "Female"]

var randomCharacter = function() {
    var name = names[Math.floor(Math.random() * names.length)];
    var occupation = occupations[Math.floor(Math.random() * occupations.length)];
    var gender = genders[Math.floor(Math.random() * genders.length)];
    var age = Math.floor(Math.random() * 30) + 15;
    var str = Math.floor(Math.random() * 4) + 4
    var hp = Math.floor(Math.random() * 50) + 5;
    console.log(name + " was encountered!");
    return new Character(name, occupation, gender, age, str, hp);
}

var enemy = randomCharacter();

console.log(enemy);

enemy.levelUp();