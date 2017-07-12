var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

context.fillRect(700,350,60,40);


var FPS = 30;

setInterval(function () {
	update();
	draw();
}, 1000/FPS);

var contextX = 50;
var contextY = 50; 

function update() {
	contextX += 1;
	contextY += 1;
}

function draw () {
	context.fillRect(contextX, contextY, 60,40);
}


console.log(canvas);
