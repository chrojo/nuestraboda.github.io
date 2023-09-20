// Set the date we're counting down to
var countDownDate = new Date("Nov 11, 2023 20:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("dayCount").innerHTML = days + "";
  document.getElementById("hoursCount").innerHTML = hours + "";
  document.getElementById("minuteCount").innerHTML = minutes + "";
  document.getElementById("secondCount").innerHTML = seconds + "";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// Select the div element
const colorChangeDiv = document.querySelector('.color-change-div');
const changeBtn = document.querySelector('.show-btn');
const colorTextChangeDiv = document.querySelectorAll('.nav-link');

// Function to change background color
function changeBackgroundColorOnScroll() {
    // Check if the page has been scrolled
    if (window.scrollY > 0) {
      changeBtn.style.display = 'block';
      colorChangeDiv.style.backgroundColor = '#C53222'; // Change to the desired color
      colorTextChangeDiv.forEach(div => {
        div.style.color = '#FFF8F3'; // Change to the desired color
      });
    } else {
      changeBtn.style.display = 'none';
      colorChangeDiv.style.backgroundColor = 'transparent'; // Reset to the initial color+
      colorTextChangeDiv.forEach(div => {
        div.style.color = '#DB9E3C'; // Reset to the initial color
      });
    }
}

// Add an event listener to the window's scroll event
window.addEventListener('scroll', changeBackgroundColorOnScroll);

// play audio

//setTimeout(function(){
//  document.getElementById("my_audio").play();
//}, 3000)


// Get references to both div elements by their IDs
const div1 = document.getElementById('first-location');
const div2 = document.getElementById('second-location');
const div3 = document.getElementById('first-iframe');
const div4 = document.getElementById('second-iframe');
let hoverTimeout;

// Add an event listener for the "mouseover" event
div1.addEventListener("mouseover", function() {
  // Add the "hovered" class to the div when it's hovered
  div3.classList.add("show-div");

  // Clear the previous timeout (if any) to prevent removal while hovering
  clearTimeout(hoverTimeout);
});

// Add an event listener for the "mouseout" event (optional - removes the class when the mouse leaves)
div1.addEventListener("mouseout", function() {

  // Remove the "hovered" class from the div after a delay of 3 seconds
  hoverTimeout = setTimeout(function() {
    div3.classList.remove("show-div");
  }, 2000); // 3000 milliseconds = 3 seconds

});


// Add an event listener for the "mouseover" event
div2.addEventListener("mouseover", function() {
  // Add the "hovered" class to the div when it's hovered
  div4.classList.add("show-div");

  // Clear the previous timeout (if any) to prevent removal while hovering
  clearTimeout(hoverTimeout);
});

// Add an event listener for the "mouseout" event (optional - removes the class when the mouse leaves)
div2.addEventListener("mouseout", function() {

  // Remove the "hovered" class from the div after a delay of 3 seconds
  hoverTimeout = setTimeout(function() {
    div4.classList.remove("show-div");
  }, 2000); // 3000 milliseconds = 3 seconds
  
});


document.addEventListener("DOMContentLoaded", function () {
  
  const loader = document.getElementById('container-loader');
  var bodyElement = document.body;
  const navbar = document.getElementById("navcont");

  
  if (bodyElement) {
    bodyElement.classList.add("overflow");

    setTimeout(function () {
      bodyElement.classList.remove("overflow");
    }, 4000); // A
  }



  // Simulate a delay to show the loader for demonstration purposes
  setTimeout(function () {
    loader.classList.add("loaded");
  }, 6000); // Adjust the delay as needed

  setTimeout(function () {
    loader.classList.add("fade-in");
  }, 4000); // Adjust the delay as needed

  if (navbar) {
    // Show the navbar after a 5-second delay
    setTimeout(function () {
      navbar.classList.add("fade-in-out");
    }, 4000); // 5000 milliseconds = 5 seconds
  }
  
});

