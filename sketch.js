function setup() {
  createCanvas(innerWidth,innerWidth);
  strokeWeight(2);
  stroke(255,179,255)
  fill(100,100,100);
  frameRate(1)

}

function draw() {
clear();
  var margin = .5;
  var width = innerWidth - 2*margin; 
  var height = innerWidth - 2*margin;
  var numSquares = 10; 
  var sideLen = width/numSquares;
  var space = 0;
  var shift = 0;
 translate(margin,margin); 
  for(var y = 0 ; y < height; y= y + sideLen){
    for (var x=0; x < width; x = x+sideLen){
      fill (random (255,15), 100, random (700,600), 90);
      stroke (random (255,15), 100, random (700,600), 90);
      quad(x+space +random(-shift, shift), y+space+ random(-shift, shift), x+sideLen - space+ random(-shift, shift),y+ space+random(-shift, shift), x+sideLen - space+ random(-shift, shift), y+sideLen - space+ random(-shift, shift), x+ space+ random(-shift, shift), y+sideLen-space+ random(-shift, shift));
      
      fill (random (270, 30), 100, random (648, 674), 110);
      stroke (random (270, 30), 100, random (648, 674), 110);
      quad(x+space +random(-shift, shift), y+space+ random(-shift, shift), x,y+ space+random(-shift, shift), x+sideLen - space+ random(-shift, shift), y+sideLen - space+ random(-shift, shift), x+ space+ random(-shift, shift), y+sideLen-space+ random(-shift,shift));
          }
        }
      }  