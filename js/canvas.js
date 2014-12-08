$(document).ready(function(){
      var j = 1;
      var x = 180, y = 130;
      var shape = 'rect';
      function doKeyDown(evt) {
            switch (evt.keyCode) {
                  case 38: // up arrow
                        y -= 10;
                        break;
                  case 40: // down arrow
                        y += 10;
                        break;
                  case 39: // right arrow       
                        x += 10;
                        break;
                  case 37: // left arrow
                        x -= 10;
                        break;
                  default: // ignore any other keys for now
                        break;     
            }

      } // end of function doKeyDown
      
      function drawCircle(a,b) {
            //$('#canvas').removeLayer('box1');
            $('#canvas').drawArc({
                   // layer: true,
                  //  name: 'box1',
                    strokeStyle: '#966',
                    strokeWidth: 2,
                    x: a, y: b,
                    radius: 20,
                    fillStyle:'#f44',
                    // start and end angles in degrees
                    start: 0, end: 360
            });
      }
      function drawSquare(a,b) {
        $('#canvas').drawRect({
                  fillStyle: '#fc9',
                  strokeStyle: '#963',
                  strokeWidth: 2,
                  x: a,
                  y: b,
                  width: 10,
                  height: 10
            });
      }
      function drawRect(a,b) {
        $('#canvas').drawRect({
                  fillStyle: '#fc9',
                  strokeStyle: '#963',
                  strokeWidth: 2,
                  x: a,
                  y: b,
                  width: 10,
                  height: 6
            });
      }
      function drawPolygon(a,b) {
            $('#canvas').drawPolygon({
                  fillStyle: '#589',
                  strokeStyle: '#000',
                  x: a, y: b,
                  radius: 10,
                  sides: 6,
                  rotate: 25
            });
      }
      function init() {
            return setInterval(draw, 1);
      }
      function draw() {
            switch ($('#shape').val()) {
                  case 'circle':
                      drawCircle(x,y);
                      break;
                  case 'square':
                      drawSquare(x,y);
                      break;
                  case 'polygon':
                      drawPolygon(x,y);
                      break;
                  default:
                      //drawRect(x,y);
                      break;
            }
      }
     $('#button1').click(function(){
            $('#canvas').drawArc({
                    layer: true,
                    name: 'box1',
                    strokeStyle: '#966',
                    strokeWidth: 2,
                    x: 180, y: 130,
                    radius: 20,
                    fillStyle:'#f44',
                    // start and end angles in degrees
                    start: 0, end: 360
                  });
            $('#canvas').drawRect({
                  layer: true,
                  name: 'box',
                  fillStyle: '#fc9',
                  strokeStyle: '#963',
                  strokeWidth: 2,
                  x: 20,
                  y: 20,
                  width: 30,
                  height: 15
            });
            $('#canvas').drawPolygon({
                  layer: true,
                  name: 'box2',
                  fillStyle: '#589',
                  strokeStyle: '#000',
                  x: 320, y: 20,
                  radius: 20,
                  sides: 6,
                  rotate: 25
            });
            $('#canvas').animateLayer('box',
                  {x:220, 
                   y:250}, 2500).animateLayer('box1',
                  {x:370, 
                   y:20}, 2500).animateLayer('box2',
                  {x:180, 
                   y:130}, 2500);
            $('#canvas').animateLayer('box',
                  {x:20, 
                   y:20}, 2500).clearCanvas().animateLayer('box1',
                    {x:180, 
                     y:130}, 2500).clearCanvas().animateLayer('box2',
                    {x:320, 
                     y:20}, 2500).clearCanvas();

      }); // end click button1
      $('#canvas').hover(function(){
            $('#canvas').removeLayer('box').removeLayer('box2');
      });//end of clear click

      init();
      window.addEventListener('keydown',doKeyDown,true);

}); //end ready