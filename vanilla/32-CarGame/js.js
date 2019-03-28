      var car = {
        make: "Honda",
        model: "Fit",
        color: "Blue Raspberry",
        mileage: 3000,
        isWorking: true,

        driveToWork: function() {

          alert("Old Mileage: " + this.mileage);

          this.mileage = this.mileage + 8;

          alert("New mileage: " + this.mileage);
        },

        driveAroundWorld: function() {

          alert("Old Mileage: " + this.mileage);

          this.mileage = this.mileage + 24000;

          alert("New Mileage: " + this.mileage);
          alert("Car needs a tuneup!");

          this.isWorking = false;
        },

        getTuneUp: function() {
          alert("Car is ready to go!");
          this.isWorking = true;
        },

        honk: function() {
          alert("Honk! Honk!");
        }
      };

      console.log(car.make)

// Figure out how to press letters and if they are not the right entry, notify the error or something.
// This isn't... working? Oh well.
    document.getElementById("carMileage").innerHTML = car.mileage
    console.log("Loading worked")
    document.getElementById("isCarTuned").innerHTML = car.isWorking

document.onkeydown = function(keypress) {
  if (keypress.key === "h") {
    car.honk()
  }
  else if (keypress.key === "d") {
    car.driveToWork()
  }
  else if (keypress.key === "a") {
    car.driveAroundWorld()
    document.getElementById("isCarTuned").innerHTML = car.isWorking
  }
  else if (keypress.key === "t") {
    car.getTuneUp()
    document.getElementById("isCarTuned").innerHTML = car.isWorking
  }
  else {
    console.log(keypress.key + " isn't a valid key :(")
  }
  document.getElementById("carMileage").innerHTML = car.mileage

}