setInterval(movePlayer, 30);
var keys = {};

// Function to make the q and p key move racers 
$(document).keydown(function(e) {
    keys[e.keyCode] = true;
});

$(document).keyup(function(e) {
    delete keys[e.keyCode];
});



$("#startGame").click(function () {
    var counter = 30;
    setInterval(function() {
        counter--;
            if (counter >= 0) {
                span = $("#count");
                span.html(counter);
                $("#startGame").attr("disabled", "disabled");
            }
            if (counter === 0) {
                clearInterval(counter);
                return  $("#game").toggleClass("gameBoard"), 
                        $("#snake").toggleClass("player"), 
                        $("#win").css('display', 'block'), 
                        $("#startGame").css('display', 'none'), 
                        $("#reload").css('display', 'block'),
                        $("startGame").removeAttr("disabled", "disabled");
            }
    }, 1000);

    $("#game").toggleClass("gameBoard");
    $("#snake").toggleClass("player");

});

$("#reload").click(function () {
    var counter = 30;
    setInterval(function() {
        counter--;
            if (counter >= 0) {
                span = $("#count");
                span.html(counter);
                $("#win").css('display', 'none');
                $("#startGame").css('display', 'block');
                $("#startGame").attr("disabled", "disabled");
            }
            if (counter === 0) {
                clearInterval(counter);
                return  $("#game").toggleClass("gameBoard"),
                        $("#snake").toggleClass("player"), 
                        $("#win").css('display', 'block'), 
                        $("#startGame").css('display', 'none'),
                        $("#reload").css('display', 'block'),
                        $("#reload").removeAttr("disabled", "disabled");
                        
            }
    }, 1000);

    $("#game").toggleClass("gameBoard");
    $("#snake").toggleClass("player");

});

function movePlayer() {
    var position = $(".player").position();

    checkCollisions();

    for (var direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue;
        if (direction == 37) {
            $(".player").css('left', position.left - 3 + 'px');
        } 

        if (direction == 38) {
            $(".player").css('top', position.top - 3 + 'px');
        }

        if (direction == 39) {
            $(".player").css('left', position.left + 3 + 'px');
        }

        if (direction == 40) {
            $(".player").css('top', position.top + 3 + 'px');
        }

        


        // if ($(".player").position.left < 3 ) {
        // return console.log("stoppppp"); }


    }
        


}


function getPositions(element) {
    // element is some sort of html tag. <p> or <div> or whatever
    // we need to get it's left, its top, its width, and its height
    
    // var test = $("#snake").getBoundingClientRect();
    // var testX = test.x ;
    // var testY = test.y;
    // var testHeight = test.height;
    // var testWidth = test.width;

    // return [[ testX, testX + testWidth], [testY, testY + testHeight]];


     var left1 = element.css('left'); // THIS IS THE X 
     var left  = element.css('left');
     var top1 = element.css('top');
     var top = element.css('top');
     var width = element.innerWidth();
     var height = element.innerHeight();
      return [[ left1, left + width ], [ top1, top + height]];

}

 function comparePositions(p1, p2){
    // p1[0][0] is p1's left boundary
    // p1[1][0] is p1's top boundary
    // p1[0][1] is p1's right boundary
    // p1[1][1] is p1's bottom boundary

    var p1Left = p1[0][0];
    var p1Top = p1[1][0];
    var p1Right = p1[0][1];
    var p1Bottom = p1[1][1];

    var p2Left = p2[0][0];
    var p2Top = p2[1][0];
    var p2Right = p2[0][1];
    var p2Bottom = p2[1][1];

    // if p1's left boundary is greater than p2's left boundary
    // AND p1's right boundary is less than p2's right boundary
    // AND p1's top boundary is less than p2's top boundary
    // AND p1's bottom boundary is more than p2's bottom boundary
    // THEEEEEEEN p1 is inside p2
    // return true;

    // console.log(p1Left);

    if (p1Left >= p2Left && p1Right <= p2Right && p1Top <= p2Top && p1Bottom >= p2Bottom) {
        return console.log('true');
    }

    else { 
        return console.log('false') ;
    }

    // IF NOT all that shit.
    // return false;
    /*
     var x1 = p1[0] > p2[0] ? p1 : p2;
     var x2 = p1[0] < p2[0] ? p2 : p1;
     return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
     */

 }

function checkCollisions(){
    
    var box = $("#game");

     var pos = getPositions(box);

     var player = $("#snake");
     var pos2 = getPositions(player);

     var match = comparePositions(pos, pos2);

     if (match) { console.log("yayayayyayaya"); 

     console.log(pos);
 }
 }


