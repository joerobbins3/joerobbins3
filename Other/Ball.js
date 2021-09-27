var ball = document.getElementById("ball");
var velocity = 100;
var positionX = 0;
var reverse = false;
var positionY = 0;


//write a function that can change the position of the html element "ball"
function moveBall() {
  positionX= positionX+velocity;
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 300;

  
   if (reverse) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  }
}
if (
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }

// This call the moveBall function every 100ms
setInterval(moveBall, 100);