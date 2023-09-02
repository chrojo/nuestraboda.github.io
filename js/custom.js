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
const colorTextChangeDiv = document.querySelectorAll('.nav-link');

// Function to change background color
function changeBackgroundColorOnScroll() {
    // Check if the page has been scrolled
    if (window.scrollY > 0) {
        colorChangeDiv.style.backgroundColor = '#C53222'; // Change to the desired color
        colorTextChangeDiv.forEach(div => {
          div.style.color = '#FFF8F3'; // Change to the desired color
        });
    } else {
        colorChangeDiv.style.backgroundColor = '#FFF8F3'; // Reset to the initial color+
        colorTextChangeDiv.forEach(div => {
          div.style.color = '#DB9E3C'; // Reset to the initial color
        });
    }
}

// Add an event listener to the window's scroll event
window.addEventListener('scroll', changeBackgroundColorOnScroll);