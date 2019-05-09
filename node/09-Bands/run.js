var exportedData = require("./bands.js");
var bands = exportedData.bands

console.log(bands);

for(var band in bands) {
    console.log("A " + band + " band is " + bands[band])
}