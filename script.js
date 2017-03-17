function updateClock () {
  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();

  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  $(".hour").html(currentHours);
  $(".minutes").html(currentMinutes);
  $(".seconds").html(currentSeconds);
  $(".time-of-day").html(timeOfDay);
}

$(document).ready(function() {
   setInterval('updateClock()', 1000);
});
