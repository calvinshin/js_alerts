// Slideshow Activity
// Students: follow the instructions below:

// TODO: Put links to our images in this image array.
var images = ["https://n7tpw52zdt-flywheel.netdna-ssl.com/wp-content/uploads/2009/12/abstract-photography-23.jpg",
"https://n7tpw52zdt-flywheel.netdna-ssl.com/wp-content/uploads/2009/12/abstract-photography-11.jpg",
"https://n7tpw52zdt-flywheel.netdna-ssl.com/wp-content/uploads/2019/01/abstractphoto11.jpg",
"https://n7tpw52zdt-flywheel.netdna-ssl.com/wp-content/uploads/2019/01/abstractphoto16.jpg"];

// Variable showImage will hold the setInterval when we start the slideshow
var showImage;

// Count will keep track of the index of the currently displaying picture.
var count = 0;

// isRunning
var isRunning = false;

// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
$("#start").on("click", startSlideshow);
// TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
$("#stop").on("click", stopSlideshow);

// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}

function nextImage() {
  // TODO: Increment the count by 1.
  if(count === images.length - 1) {
    count = 0;
  }
  else {
    count++;
  }
    // TODO: Show the loading gif in the "image-holder" div.
  $("#image-holder").html("<img src=https://i.redd.it/ounq1mw5kdxy.gif width='400px'>");

  // TODO: Use a setTimeout to run displayImage after 1 second.
  setTimeout(displayImage, 1000);

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  // complete, part of the original count part. 
  // But because the timeout has a 1000 second delay, it updates  
}

function startSlideshow() {
// console.log("start");
  // TODO: Use showImage to hold the setInterval to run nextImage.
  if(isRunning === false) {
    showImage = setInterval(nextImage, 3000)
    isRunning = true;
  }
}



function stopSlideshow() {
// console.log("end");
  // TODO: Put our clearInterval here:
  clearInterval(showImage);
  isRunning = false;
}

// This will run the display image function as soon as the page loads.
displayImage();
