

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

    setVars: function() {
      this.displaceX = 150;
      this.displaceY = 150;
      this.clickThreshold = 20;
    },

    loadListeners: function() {
      
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

      document.getElementById("canvas").addEventListener("mousemove", function(event) {
        console.log("ON MOUSE MOVE");

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

      document.getElementById("canvas").addEventListener("mouseup", function(event) {
        console.log("ON MOUSE UP");

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

      // console.log("PRINT C");
    },

    getDisplaceX: function() {
      return this.displaceX;
    },

    getDisplaceY: function() {
      return this.displaceY;
    }

    // handleClick: function(x, y) {
    //   console.log("PRINT D");
    // }

  };
});


