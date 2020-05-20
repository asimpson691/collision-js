import {Circle} from './shapes/circle.js';
import {NonRotatableRectangle} from './shapes/rectangle.js'

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');

var mouseObj = new Circle(null, null, 30); // object controlled by the mouse
var targetObj = new NonRotatableRectangle(350, 250, 100, 100);

function draw() {

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // check for collision!
    var colliding = mouseObj.isCollisionWithNonRotatableRectangle(targetObj);
    if (colliding) {
        var colour = 'red';
    }
    else {
        var colour = 'blue';
    }
  
    // draw the targetObj and mouseObj
    targetObj.draw(ctx, colour);
    mouseObj.draw(ctx, 'green');    
}

function calcMousePos(evt) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  var mouseX = evt.clientX - rect.left - root.scrollLeft;
  var mouseY = evt.clientY - rect.top - root.scrollTop;
  return {
      x : mouseX,
      y : mouseY
  };
}


(function () {
    'use strict';
    canvas.style.cursor = 'none';

    canvas.addEventListener('mousemove',
        function (evt) {
            let mousePos = calcMousePos(evt);
            mouseObj.setCentre(mousePos.x, mousePos.y);
        }
    );

    const framesPerSecond = 120;
    var interval = setInterval(draw, 1000 / framesPerSecond);

})();
