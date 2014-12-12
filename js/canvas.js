$(document).ready(function(){
      var j = 1, i = 0;
      var kd_x = 230, kd_y = 180;
      var shape = 'rect';
      function doKeyDown(evt) {
            evt.preventDefault();
            switch (evt.keyCode) {
                  case 38: // up arrow
                        kd_y -= 10;
                        break;
                  case 40: // down arrow
                        kd_y += 10;
                        break;
                  case 39: // right arrow       
                        kd_x += 10;
                        break;
                  case 37: // left arrow
                        kd_x -= 10;
                        break;
                  default: // ignore any other keys for now
                        break;     
            }
            draw(i++);
      } // end of function doKeyDown

      function doClicked(evt) {
            evt.preventDefault();
            kd_x = evt.pageX - $("#canvas").offset().left;
            kd_y = evt.pageY - $("#canvas").offset().top;
            draw(i++);
      } // end of doClicked()
      
      function drawCircle(a,b,layer) {
            $('#canvas').drawArc({
                    layer: true,
                    name: layer,
                    dragabble : true,
                    strokeStyle: '#966',
                    strokeWidth: 2,
                    x: a, y: b,
                    radius: 20,
                    fillStyle:'#f44',
                    // start and end angles in degrees
                    start: 0, end: 360
            });
      }
      function drawSquare(a,b,layer) {
        $('#canvas').drawRect({
                  layer: true,
                  name:layer,
                  fillStyle: '#fc9',
                  strokeStyle: '#963',
                  strokeWidth: 2,
                  x: a,
                  y: b,
                  width: 40,
                  height: 40
            });
      }
      function drawRect(a,b,layer) {
        $('#canvas').drawRect({
                  layer:true,
                  name:layer,
                  fillStyle: '#fc9',
                  strokeStyle: '#963',
                  name: layer,
                  strokeWidth: 2,
                  x: a,
                  y: b,
                  width: 40,
                  height: 25
            });
      }
      function drawPolygon(a,b,layer) {
            $('#canvas').drawPolygon({
                  layer:true,
                  name:layer,
                  fillStyle: '#589',
                  name:layer,
                  strokeStyle: '#000',
                  x: a, y: b,
                  radius: 20,
                  sides: 6,
                  rotate: 25
            });
      }
      function init() {
            return setInterval(draw, 300);
      }
      
      function draw(i) {
            
            switch ($('#shape').val()) {
                  case 'circle':
                      drawCircle(kd_x,kd_y,'box_circle'+ i);
                      break;
                  case 'square':
                      drawSquare(kd_x,kd_y,'box_square' + i);
                      break;
                  case 'polygon':
                      drawPolygon(kd_x,kd_y,'box_poly' + i);
                      break;
                  default:
                      break;
            }
      }
     $('#button1').click(function(){
            drawCircle(230,180,'box');
            drawRect(20,20,'box1');
            drawPolygon(450,20,'box2');
            drawRect(450,350,'box3');
            drawPolygon(20,350,'box4');
            
            $('#canvas').animateLayer('box2',
                  {x:220, 
                   y:250}, 2500).animateLayer('box',
                  {x:360, 
                   y:20}, 500).animateLayer('box',
                  {x:20, 
                   y:20}, 500).animateLayer('box',
                  {x:450, 
                   y:350}, 500).animateLayer('box1',
                  {x:180, 
                   y:130}, 2500).animateLayer('box3',
                  {x:130, 
                   y:130}, 2500).animateLayer('box4',
                  {x:180, 
                   y:130}, 2500);
            $('#canvas').animateLayer('box1',
                  {x:20, 
                   y:20}, 2500).clearCanvas().animateLayer('box',
                    {x:230, 
                     y:180}, 2500).animateLayer('box2',
                    {x:450, 
                     y:20}, 2500).animateLayer('box3',
                    {x:450, 
                   y:350}, 2500).animateLayer('box4',
                    {x:20, 
                    y:350}, 2500);

      }); // end click button1

      $('#clear').click(function(){
            $('#canvas').removeLayer('box1').removeLayer('box2').removeLayer('box3').removeLayer('box4');
      });//end of clear click

      //init();
      window.addEventListener('keydown',doKeyDown,true);
      window.addEventListener('click',doClicked,true);

}); //end ready