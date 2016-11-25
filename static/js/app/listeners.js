







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
//================


document.getElementById("canvas").addEventListener("mousedown", function(event) {
  // console.log("ON MOUSE DOWN");

  //set drag mode on

  holdingDown = true;
  clickAction = true;

  startX = event.clientX;
  startY = event.clientY;

  // this.displaceX = 150;
  // this.displaceY = 150;
  // this.clickThreshold = 20;
  if (!displaceX) {
    displaceX = 150;
  }
  if (!displaceY) {
    displaceY = 150;
  }
  if (!clickThreshold) {
    clickThreshold = 20;
  }
});

document.getElementById("canvas").addEventListener("mousemove", function(event) {
  // console.log("ON MOUSE MOVE");

  // console.log(this.dragX*this.dragX + this.dragY*this.dragY);
  // console.log(this.clickThreshold*this.clickThreshold);
  if (dragX*dragX + dragY*dragY > clickThreshold*clickThreshold) {
    clickAction = false;
    // console.log("FLIPPED");
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

  console.log("Change X: " + dragX);
  console.log("Change Y: " + dragY);
  console.log(displaceX);
  console.log(displaceY);



  if ( !clickAction ) {
    displaceX += dragX;
    displaceY += dragY;
    console.log("NOT CLICK");
    console.log(displaceX);
    console.log(displaceY);

    // console.log(this.getDisplaceX());
    // console.log(this.getDisplaceY());
  }


  if (clickAction) {
    console.log("IS CLICK");
    //change active/selected tile
    //this.handleClick(event.clientX, event.clientY);
    propogateClick = true;
    clickX = event.clientX;
    clickY = event.clientY;

    // this.clickAction = true;
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
  // console.log("WTF " + this.displaceX);
  return displaceX + dragX;
}
function getDisplaceY() {
  return displaceY + dragY;
}





/*

var listener = {

  holdingDown : false,
  clickAction : false,

  startX : 0,
  startY : 0,
  displaceX : 150,
  displaceY : 150,
  dragX : 0,
  dragY : 0,

  clickThreshold : 20,

  propogateClick : false,
  clickX : 0,
  clickY : 0,

  init: function() {
    this.holdingDown = false;
    this.clickAction = false;

    this.startX = 0;
    this.startY = 0;
    this.displaceX = 150;
    this.displaceY = 150;
    this.dragX = 0;
    this.dragY = 0;

    this.clickThreshold = 20;

    this.propogateClick = false;
    this.clickX = 0;
    this.clickY = 0;

    this.loadMouseUp();
    this.loadMouseMove();
    this.loadMouseDown();
  },
  loadMouseDown: function() {
    document.getElementById("canvas").addEventListener("mousedown", function(event) {
      // console.log("ON MOUSE DOWN");

      //set drag mode on

      this.holdingDown = true;
      this.clickAction = true;

      this.startX = event.clientX;
      this.startY = event.clientY;

      // this.displaceX = 150;
      // this.displaceY = 150;
      // this.clickThreshold = 20;
      if (!this.displaceX) {
        this.displaceX = 150;
      }
      if (!this.displaceY) {
        this.displaceY = 150;
      }
      if (!this.clickThreshold) {
        this.clickThreshold = 20;
      }
    });
  },
  loadMouseMove: function() {
    document.getElementById("canvas").addEventListener("mousemove", function(event) {
      // console.log("ON MOUSE MOVE");

      // console.log(this.dragX*this.dragX + this.dragY*this.dragY);
      // console.log(this.clickThreshold*this.clickThreshold);
      if (this.dragX*this.dragX + this.dragY*this.dragY > this.clickThreshold*this.clickThreshold) {
        this.clickAction = false;
        // console.log("FLIPPED");
      }

      if (this.holdingDown) {
        this.dragX = event.clientX - this.startX;
        this.dragY = event.clientY - this.startY;
      }
    });
  },
  loadMouseUp: function() {
    document.getElementById("canvas").addEventListener("mouseup", function(event) {
      // console.log("ON MOUSE UP");

      this.holdingDown = false;

      this.dragX = event.clientX - this.startX;
      this.dragY = event.clientY - this.startY;

      console.log("Change X: " + this.dragX);
      console.log("Change Y: " + this.dragY);
      console.log(this.displaceX);
      console.log(this.displaceY);



      if ( !this.clickAction ) {
        this.displaceX += this.dragX;
        this.displaceY += this.dragY;
        console.log("NOT CLICK");
        console.log(this.displaceX);
        console.log(this.displaceY);

        // console.log(this.getDisplaceX());
        // console.log(this.getDisplaceY());
      }


      if (this.clickAction) {
        console.log("IS CLICK");
        //change active/selected tile
        //this.handleClick(event.clientX, event.clientY);
        this.propogateClick = true;
        this.clickX = event.clientX;
        this.clickY = event.clientY;

        // this.clickAction = true;
      }

      this.dragX = 0;
      this.dragY = 0;
    });
  },

  doThing: function() {
  	console.log("PRINT B");
  },
  internalCall: function() {
  	console.log("PRINT B");
  },
  getDisplaceX: function() {
  	// console.log("WTF " + this.displaceX);
    return this.displaceX;
  },
  getDisplaceY: function() {
    return this.displaceY;
  }
};

/**/


