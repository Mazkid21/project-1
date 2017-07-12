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

console.log("wokring???");