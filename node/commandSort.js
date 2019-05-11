// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

array1 = [21, 8, 3, 12, 4, 36]

var newArray = [];

for(i = 2; i < process.argv.length; i++) {
    newArray.push(parseFloat(process.argv[i]))
}

newArray.sort(function(a,b) {return a-b});

console.log(newArray);