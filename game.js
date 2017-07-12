setInterval(movePlayer, 30);
var keys = {};

// Function to make the q and p key move racers 
$(document).keydown(function(e) {
    keys[e.keyCode] = true;
});

$(document).keyup(function(e) {
    delete keys[e.keyCode];
});

function movePlayer() {
    for (var direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue;
        if (direction == 37) {
            $(".player").animate({left: "-=5"}, 0);
        } 

        if (direction == 38) {
            $(".player").animate({top: "-=5"}, 0);
        }

        if (direction == 39) {
            $(".player").animate({left: "+=5"}, 0);
        }

        if (direction == 40) {
            $(".player").animate({top: "+=5"},0);
        }

    }

}


var dim1 = {x: 5, y: 5, w: 50, h: 50};
var dim2 = {x: 20, y: 10, w: 60, h: 40};

var rect1 = $(".player").toggleClass("playerC");

var rect2 = $(".player").toggleClass("playerC");

rect2.bind("EnterFrame", function () {
    if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.h + rect1.y > rect2.y) {
        // collision detected!
        this.color("green");
    } else {
        // no collision
        this.color("blue"); 
    }
});

console.log("wokring???");