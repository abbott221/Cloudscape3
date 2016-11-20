

define(function() {
  return {
    
    holdingDown: false,
    clickAction: false,
      
    startX: 0,
    startY: 0,
    displaceX: 150,
    displaceY: 150,
    dragX: 0,
    dragY: 0,

    clickThreshold: 20,

    propogateClick: false,
    clickX: 0,
    clickY: 0,

    doThing: function() {
      console.log("PRINT B");
    },

    loadListeners: function() {
      document.getElementById("canvas").addEventListener("mousedown", function(event) {
        console.log("ON MOUSE DOWN");

        //set drag mode on

        this.holdingDown = true;
        this.clickAction = true;

        this.startX = event.clientX;
        this.startY = event.clientY;
      });

      document.getElementById("canvas").addEventListener("mousemove", function(event) {
        console.log("ON MOUSE MOVE");

        if (this.dragX*this.dragX + this.dragY*this.dragY > this.clickThreshold*this.clickThreshold) {
          this.clickAction = false;
        }

        if (this.holdingDown) {
          this.dragX = event.clientX - this.startX;
          this.dragY = event.clientY - this.startY;
        }
      });

      document.getElementById("canvas").addEventListener("mouseup", function(event) {
        console.log("ON MOUSE UP");

        this.holdingDown = false;

        this.dragX = event.clientX - this.startX;
        this.dragY = event.clientY - this.startY;

        console.log("Change X: " + this.dragX);
        console.log("Change Y: " + this.dragY);



        if ( !this.clickAction ) {
          this.displaceX += this.dragX;
          this.displaceY += this.dragY;
        }


        if (this.clickAction) {
          //change active/selected tile
          //this.handleClick(event.clientX, event.clientY);
          this.propogateClick = true;
          this.clickX = event.clientX;
          this.clickY = event.clientY;
        }

        this.dragX = 0;
        this.dragY = 0;
      });

      console.log("PRINT C");
    }

    // handleClick: function(x, y) {
    //   console.log("PRINT D");
    // }

  };
});


