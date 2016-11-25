// This file hosts the main game module.  Whenever it makes sense to
// put something in its own module, you can either put it in the dependency
// array for this module (i.e. the way we're using 'game-shim' in th commented
// out version below), or you can call require() directly closer to the
// time you need it.  <http://requirejs.org/> has detailed documentation.  
//
//
//

//define(['jquery', 'app'], function($, App) {
  // define(['jquery'], function($, require) {
// define(['app/listeners'], function(listeners) {
define(function(require) {

  // Toji's game-shim module is included with this template; if you wish to use
  // it, uncomment the require() line below.
  //
  // The reason that this isn't done by default is that the replacement
  // versions of the various APIs that it includes could potentially cause
  // complications or performance issues with other libraries that use these APIs
  // and may have their own strategies for dealing with cross-browser issues.  
  // We suggest reviewing the code (in lib/game-shim.js) before enabling it.
  //
  //require('game-shim');



  // var canvas = document.getElementById("canvas");

  // var ctxt = canvas.getContext("2d");



  var canvas = document.getElementById("canvas");

  var ctxt = canvas.getContext("2d");

  var grass = new Image();
  grass.src = "img/tile_grass.png";

  var sky = new Image();
  sky.src = "img/sepia_sky.png";



  var initApp = function() {
    $(document).ready(function() {
      
      //set up calls can go here

      setInterval( tick, 30 );

    });
  };

  var tick = function() {
    drawStartScreen();
  };

  var drawStartScreen = function() {
    // var listeners = require('app/listeners');

    ctxt.drawImage(sky, 0, 0, 980, 502);
    var dX = getDisplaceX();
    var dY = getDisplaceY();
    
    ctxt.drawImage(grass, dX, dY, 50, 50);
  };

  var setPlayScreen = function() {
    var canvas = document.getElementById("canvas");

    var ctxt = canvas.getContext("2d");

    var grass = new Image();
    grass.src = "img/tile_grass.png";

    var sky = new Image();
    sky.src = "img/sepia_sky.png";

    ctxt.drawImage(sky, 0, 0, 980, 502);
  };

  initApp();
});
