var dogs = {
    raining: true,
    noise: "Woof!",
    makeNoise: function() {
        if(this.raining === true) {
            console.log(this.noise);
        }
    },
}

var cats = {
    raining: false,
    noise: "Meow!",
    makeNoise: function() {
        if(this.raining === true) {
            console.log(this.noise);
        }
    },
}

var massHysteria = function() {
    if(dogs.raining === true && cats.raining === true) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!!!");
    }
}

dogs.makeNoise();

cats.makeNoise();

massHysteria();

cats.raining = true;

dogs.makeNoise();

cats.makeNoise();

massHysteria();

function Animal(isRaining, noise) {
    this.raining = isRaining,
    this.noise = noise,
    this.makeNoise = function() {
        if(this.raining === true) {
            console.log(this.noise);
        }
    }
}

var snake = new Animal(true, "Hisssss!")
snake.makeNoise();