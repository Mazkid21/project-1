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
    var interval = setInterval(function() {
        counter--;
            if (counter >= 0) {
                span = $("#count");
                span.html(counter);
                $("#startGame").attr("disabled", "disabled");
            }
            if (counter === 0) {
                clearInterval(interval);
                return  $("#game").toggleClass("gameBoard"), 
                        $("#snake").toggleClass("player"), 
                        $("#win").css('display', 'block'), 
                        $("#startGame").css('display', 'none'), 
                        $("#reload").css('display', 'block'),
                        $("startGame").removeAttr("disabled", "disabled"),
                        $(".food").toggleClass("food");
            }
    }, 1000);

    $("#game").toggleClass("gameBoard");
    $("#snake").toggleClass("player");
    makeDiv();

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
                        $("#reload").removeAttr("disabled", "disabled"),
                        $(".food").toggleClass("food");
                        
            }
    }, 1000);

    $("#game").toggleClass("gameBoard");
    $("#snake").toggleClass("player");
    $(".player").attr('style','');
    makeDiv();

});

function movePlayer() {
    
    var position = $(".player").position();

    checkCollisions();

    for (var direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue;
        if (direction == 37) {
            if ($(".player").css('left') != '9px') {
            $(".player").css('left', position.left - 3 + 'px');
        } }

        if (direction == 38) {
            if ($(".player").css('top') != '98px') {
            $(".player").css('top', position.top - 3 + 'px');
        } }

        if (direction == 39) {
            if ($(".player").css('left') != '696px') {
            $(".player").css('left', position.left + 3 + 'px');
        }}

        if (direction == 40) { 
            if  ($(".player").css('top') != '578px') {
            $(".player").css('top', position.top + 3 + 'px');
        }}

        


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


     var left1 = parseInt(element.css('left'), 10); // THIS IS THE 
        // console.log(left1); 
     var left  = parseInt(element.css('left'), 10);
        // console.log(left); 
     var top1 = parseInt(element.css('top'), 10);
        // console.log(top1); 
     var top = parseInt(element.css('top'), 10);
        // console.log(top); 
     var width = parseInt(element.css('width'), 10);
           // console.log(width); 
     var height = parseInt(element.css('height'), 10);
      return [[ left1, left + width ], [ top1, top + height]];

}

 function comparePositions(smallerThing, biggerThing){
    // p1[0][0] is p1's left boundary
    // p1[1][0] is p1's top boundary
    // p1[0][1] is p1's right boundary
    // p1[1][1] is p1's bottom boundary

    var p1Left = smallerThing[0][0];
    //console.log(p1Left);
    var p1Top = smallerThing[1][0];
    var p1Right = smallerThing[0][1];
    var p1Bottom = smallerThing[1][1];

    var p2Left = biggerThing[0][0];
    //console.log(p2Left);
    var p2Top = biggerThing[1][0];
    var p2Right = biggerThing[0][1];
    var p2Bottom = biggerThing[1][1];

    // if p1's left boundary is greater than p2's left boundary
    // AND p1's right boundary is less than p2's right boundary
    // AND p1's top boundary is less than p2's top boundary
    // AND p1's bottom boundary is more than p2's bottom boundary
    // THEEEEEEEN p1 is inside p2
    // return true;

    // console.log(p1Left);

    //if(p1Left >= p2Left) console.log('DFHSD');
    if (p1Left >= p2Left && p1Right <= p2Right && p1Top >= p2Top && p1Bottom <= p2Bottom) {
        return  true;  // console.log('true');
    }

    else { 
        return false;  //console.log('false') ;
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
    
    var player = $("#snake");
       // console.log(box);

     var pos = getPositions(player);
        

     var food = $(".food");
     //  console.log(player);
     var pos2 = getPositions(food);
        console.log("food: " + pos2);

     var match = comparePositions(pos2, pos);
      //console.log(match);

     if (match) {console.log("yayay"); }

   //  console.log(pos);
 
 }

 
 function makeDiv() {
        var numRand = Math.floor(Math.random() * 501);
        
        var divsize = 10;
    
        var posx = (Math.random() * ($(".gameBoard").width() - divsize)).toFixed();
        var posy = (Math.random() * ($(".gameBoard").height() - divsize)).toFixed();
        $newdiv = $("<div class='food'></div>").css({
            'left': posx + 'px',
                'top': posy + 'px'
        });
        $newdiv.appendTo('.gameBoard').delay(1000).fadeIn(100, function () {
            //$(this).remove();
            makeDiv();
        });
    }

