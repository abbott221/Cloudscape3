

var holdingDown = false;
var clickAction = false;

var startX = 0;
var startY = 0;
var displaceX = 150;
var displaceY = 150;
var dragX = 0;
var dragY = 0;

var clickThreshold = 20;

var propogateClick = false;
var clickX = 0;
var clickY = 0;


document.getElementById("canvas").addEventListener("mousedown", function(event) {
  // console.log("ON MOUSE DOWN");

  //set drag mode on

  holdingDown = true;
  clickAction = true;

  startX = event.clientX;
  startY = event.clientY;
});

document.getElementById("canvas").addEventListener("mousemove", function(event) {
  // console.log("ON MOUSE MOVE");

  if (dragX*dragX + dragY*dragY > clickThreshold*clickThreshold) {
    clickAction = false;
  }

  if (holdingDown) {
    dragX = event.clientX - startX;
    dragY = event.clientY - startY;
  }
});

document.getElementById("canvas").addEventListener("mouseup", function(event) {
  // console.log("ON MOUSE UP");

  holdingDown = false;

  dragX = event.clientX - startX;
  dragY = event.clientY - startY;

  if ( !clickAction ) {
    displaceX += dragX;
    displaceY += dragY;
  }


  if (clickAction) {
    //change active/selected tile
    //this.handleClick(event.clientX, event.clientY);
    propogateClick = true;
    clickX = event.clientX;
    clickY = event.clientY;
  }

  dragX = 0;
  dragY = 0;
});


function doThing() {
  	console.log("PRINT B");
}
function internalCall() {
  	console.log("PRINT B");
}
function getDisplaceX() {
  return displaceX + dragX;
}
function getDisplaceY() {
  return displaceY + dragY;
}



