// To load an app-specific module, place it in an app/ directory that is a
// sibling to this file.

// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
// requirejs.config({
//     baseUrl: 'js/lib',
//     paths: {
//         app: '../app'
//     }
// });

// // Start loading the main app file.
// requirejs(['app/main']);



angular.module('gameApp', [])
  .controller('GameController', function() {
    // var game = this;


    // game.items = [];


    this.playScreen = false;

    this.thing = 5;


    var canvas = document.getElementById("canvas");

    var ctxt = canvas.getContext("2d");

    var grass = new Image();
    grass.src = "img/tile_grass.png";

    var sky = new Image();
    sky.src = "img/sepia_sky.png";


    this.proceed = function() {
    	this.thing += 1;
    	console.log("PROCEED");
    	console.log(this.thing);
    	this.playScreen = true;
    };

    //===================================================
    this.initApp = function() {
      console.log("PRINT A");
      $(document).ready(function() {
      	console.log("PRINT B");
        
        //set up calls can go here

        setInterval( tick, 30 );

      });
    };

    tick = function() {
      // console.log("tick");
      console.log(this.thing);
      if (this.playScreen) {
      	// console.log("tick");
        drawStartScreen();
      }
      // drawStartScreen();
    };

    drawStartScreen = function() {
      // var listeners = require('app/listeners');

      ctxt.drawImage(sky, 0, 0, 980, 502);
      var dX = getDisplaceX();
      var dY = getDisplaceY();

      ctxt.drawImage(grass, dX, dY, 50, 50);
    };
    //===================================================

    console.log("PRINT C");
    this.initApp();
  });