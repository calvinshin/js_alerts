// # **Instructions**

// * Remember Tamagotchis? They were those little toys that contained "digital pets" which you could feed, pet, play with, and care for. Kind of like Furbies but a whole lot less terrifying. Over the next thirty minutes or so, you are going to create your own basic Tamagotchi clone using constructors.

// * Create a constructor called "DigitalPal" which will create four properties and four methods...

function DigitalPal(name) {
    this.name = name;
    this.isHungry = false;
    this.isSleepy = false;
    this.isBored = true;
    this.age = 0;
    this.love = 50;
    this.feed = function() {
        if(this.hungry === true) {
            this.isHungry = false;
            console.log("That was yummy!")
            this.isSleepy = true;
        }
        else{
            this.love -= 1;
            console.log("No thanks! I'm full!")
        }
    };
    this.sleep = function() {
        if(this.isSleepy === true) {
            this.isSleepy = false;
            console.log("ZzzzzZzzzzZzzz")
            this.isBored = true;
            this.increaseAge();
        }
        else{
            this.love -= 1;
            console.log("No way! It's not time to sleep!!")
        }
    };
    this.play = function() {
        if(this.isBored === true) {
            this.isBored = false;
            console.log("Yay! We're playing!")
            this.isHungry = true;
        }
        else{
            this.love -= 1;
            console.log("Not right now! I'm hungry!!!")
        }
    };
    this.increaseAge = function() {
        this.age += 1;
        console.log("Happy birthday to me! I just turned " + this.age + "!");
    }
}

var dog = new DigitalPal("John");
// console.log(dog);

dog.outside = false;
dog.bark = function() {
    console.log("Woof woof! bork");
};
dog.goOutside = function() {
    if(this.outside === false) {
        console.log("Woof woof! bork");
        this.outside = true;
    }
    else{
        console.log("We're already outside!!!")
        this.love -= 1;
    }
};
dog.goInside = function() {
    if(this.outside === true) {
        console.log("Aww... I guess so");
        this.outside = false;
    }
    else{
        console.log("We're already suffering...")
        this.love -= 1;
    }}

// console.log(dog);

var cat = new DigitalPal("Mary");
cat.houseCondition = 100;
cat.meow = function() {
    console.log("Meow mewwww");
}
cat.destroyFurniture = function() {
    if(this.houseCondition > 0) {
        this.houseCondition -= 10;
        console.log("Hahahaha! Take that!");
        this.isBored = false;
        this.isSleepy = true;
    }
    else{
        console.log("Ugh, this place isn't even worth my time.");
        this.love -= 1;
    }
}
cat.buyFurniture = function() {
    this.houseCondition += 50;
    console.log("More to ruin, servant. Excellent.");
}

// * BONUS: Make it so your Tamagotchis run off of user-input from the command line. It may sound easy at first, but this can actually be quite challenging. We will be going over this in more detail during the next class.


DigitalPal.prototype.test = function() {
    console.log("This created a test prototype value");
}

console.log(cat.constructor.prototype.test)

// Note: changing the constructor value to something else chnages it for all of them.

var animal = new DigitalPal(process.argv[2]);
var method = process.argv[3];

animal[method]();

// console.log(animal);
console.log(process.argv[3]);



// eval("animal." + process.argv[3] + "()");