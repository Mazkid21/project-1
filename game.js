// setting interval to 30 milseconds 
setInterval(movePlayer, 30);
var keys = {};

// Function to make key fucntions work 
$(document).keydown(function(e) {
    keys[e.keyCode] = true;
});

$(document).keyup(function(e) {
     keys[e.keyCode] = false;
});


// Start game button. Event listener function. Starts 30 second counter, adds game board and snake and food to screen 
$("#startGame").click(function () {
    var counter = 30;
    var interval = setInterval(function() {
        counter--;
            if (counter >= 0) {
                span = $("#count");
                span.html(counter);
                $("#startGame").attr("disabled", "disabled");
            }
            // when counter gets to zero, take game board food counter and snake away. Brings up player 1s score and a player 2 button. 
            if (counter === 0) {
                clearInterval(interval);
                return  $("#game").toggleClass("gameBoard"), 
                        $("#snake").toggleClass("player"), 
                        $("#win").css('display', 'block'), 
                        $("#startGame").css('display', 'none'), 
                        $("#reload").css('display', 'block'),
                        $("startGame").removeAttr("disabled", "disabled"),
                        $(".food").toggleClass("food"),
                        $("#tally").append(score + "!"),
                         resetScore2();
            }
    }, 1000);

    // adds game board food and snake to board, calls make food function. 
    $("#game").toggleClass("gameBoard");
    $("#snake").toggleClass("player");
    $("#white").toggleClass("food");
    
    makeFood();
    

});

// player 2 button, does the same as start game but brings up player 2 score board and win state 

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
                        $("#win2").css('display', 'block'), 
                        $("#startGame").css('display', 'none'),
                        $("#refresh").css('display', 'block'),
                        $("#reload").removeAttr("disabled", "disabled"),
                        $(".food").toggleClass("food"),
                        $('#game').css('border', ''),
                        $("#tally2").append(score2 + "!!!");

                        
            }
    }, 1000);

    $("#game").toggleClass("gameBoard");
    $("#snake").toggleClass("player");
    $(".player").attr('style','');
    $("#white").toggleClass("food");
    $(".title").css('color', '#ff0048');
    $("body").css('background-color', '#ff9948');
    $("#startGame").css('color', '#ff0048');
    $(".player").css('background-color', 'white');
    $('.food').css('background-color', '#fff351');
    $('.gameBoard').css('border', '5px solid #ff0048');
   
    makeFood();
    

});

// move player function that makes arrow keys move player. Also calls the checkCollisons fucntion 

function movePlayer() {
    
    var position = $(".player").position();

    checkCollisions();

    

    
if (keys[37]) {
            if ($(".player").css('left') != '9px') {
            $(".player").css('left', position.left - 3 + 'px');
        } }

 if (keys[38]) {
            if ($(".player").css('top') != '98px') {
            $(".player").css('top', position.top - 3 + 'px');
        } }

if (keys[39]) {
            if ($(".player").css('left') != '696px') {
            $(".player").css('left', position.left + 3 + 'px');
        }}

 if (keys[40]) { 
            if  ($(".player").css('top') != '578px') {
            $(".player").css('top', position.top + 3 + 'px');
        }}

        


}


// Checks the postitions of food and snake
function getPositions(element) {
    

     var left1 = parseInt(element.css('left'), 10); 
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

// compares the positions of snake and food

 function comparePositions(smallerThing, biggerThing){

    var p1Left = smallerThing[0][0];
    //console.log(p1Left);
    var p1Top = smallerThing[1][0];
    //console.log(p1Top);
    var p1Right = smallerThing[0][1];
    //console.log(p1Right);
    var p1Bottom = smallerThing[1][1];
   // console.log(p1Bottom);
    var p2Left = biggerThing[0][0];
    //console.log(p2Left);
    var p2Top = biggerThing[1][0];
    //console.log(p2Top);
    var p2Right = biggerThing[0][1];
    //console.log(p2Right);
    var p2Bottom = biggerThing[1][1];
    //console.log(p2Bottom);



       // if snake is over food return true
    if  (p1Left + 13 >= p2Left && p1Right + 5 <= p2Right && p1Top + 99  >= p2Top && p1Bottom + 100 <= p2Bottom )



                                                                                                                 {
        return  true;  // console.log('true');
    }

    else { 
        return false;  //console.log('false') ;
    }

 }

 // Checks for collisions and if detected moves food to random position updates score. 

function checkCollisions(){
    
    var player = $("#snake");
       // console.log(box);

     var pos = getPositions(player);
         console.log("player: " + pos); 

       var food = $(".food");
        
      var pos2 = getPositions(food);
         console.log("food: " + pos2);

       var match = comparePositions(pos2, pos);
       // console.log(match);

       

     if (match) { makeFood(); updateScore(); updateScore2(); }

   //  console.log(pos);

}

 // Makes food and puts in random location on the gameBoard 

 function makeFood() {
         
        
         var divsize = 10;
    
         var posx = (Math.random() * ($(".gameBoard").width() - divsize)).toFixed();
         var posy = (Math.random() * ($(".gameBoard").height() - divsize)).toFixed();
         $newdiv = $(".food").css({
             'left': posx + 'px',
                 'top': posy + 'px'
         });

         $newLoc = $(".food").css({
             'left': posx + 'px',
                 'top': posy + 'px'

         });

         $newdiv.appendTo('.gameBoard');
     }

// player 1's score 

var score = 0 ;

function updateScore() {
    
        score  += 1;

}

// Player 2's score 

var score2 = 0 ;

function updateScore2() {
    
        score2  += 1;
}

// Resets player 2's score that was being tallied 

function resetScore2() {
    score2 = 0;
}

// Replay button, to refresh page to play again 

$("#refresh").click(function () {
    location.reload();
});


   

