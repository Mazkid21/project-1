For my game I think im going to do something similar to the racer game but instead of just moving accross the screen they can move all over and will have to pick up "food", almost like snake. For the win state I think I will have the first one to eat 5 win. Will either make two "game boards"
or set a timer and have each player go one at a time. The game functionality will be basic, but I want the game to look really really good!


https://trello.com/b/t32ZpS4c/project-1


JOURNAL: 

For my project I started with some big ideas. I had so many ideas for a fun and cool game. I knew going into it that I would not be able to accomplish everything I wanted, both with my skill level at the moment and with the time frame. 

I knew I wanted to start with a basic game that worked and looked good! I started with a basic snake esq game. 

First I built out tha landing page and styled it the way I thought looked good. I started with some colors I thought worked. Then I wanted to add a Image of a snake. I knew I wanted to stick with and 8-bit theme. So I found an image that looked 8bitty of a snake. I did not like the colot scheme of the image and it also had a grid border that looked bad. I figured a way to blend the image with the background color that I think lookd really good! I took that color scheme and worked it throughout the game. I then made sure the button worked, with a link to the game page. I then tweaked the hover design and click desing of the button to match the color scheme of the page. 

For the game page I first started with my basic design. I added my header with 8 bit font. Added the game board and a player. 

My first big challange was to get the player to move. Since we did the same thing from the racer game I used the same concept for this. I updated the CSS style left and top to work with the arrow buttons. 

Once I had my player moving I ran into my second big challange which ended up being one of the harder things in my game. I needed to make sure the player did not leave the game board. I looked at maybe using canvas as the collision detection part would have been easier. While researching canvas I realized I didnt want to have to re learn 5 steps to make the one step of collison detection easier. So I did not use canvas. This proved later to either be a mistake or blessing (im still not sure about which). I made it harder on my self to start by haveing it get positions, compare, and then check for collisions. I realized half way through that I could just make the snake stop at the endge of the board as those positions never changed. I decided to stick with the route I was going though because I knew I would need it anyway for the collison detection on the food. I spent alot of time working on the collison detection and after alot of helo from Corrie, I got it to work! I then relized since the board was always in the same spot I should just make the snake stop at those fixed positions then I could use what I just built for my food. The snake now moves and stays on the gameboard!!! 

Now I need to add food. 
I wanted to have a bunch of food appear on the screen to start and you just keep eating as much as you can. I figured out my makeFood function to use math.random to add a bunch of food to the screen when start game button is clicked. The problem I had with that was the way I set up my checkCollison function, it was only looking for the first "food" added. I spent some time trying to get the checkCollisions to look for all of them but was getting nervous about time. I then simplified it and just had one peice of food on the screen. 

Eating the food.
Eating the food became a HUGE issue. My checkcollison fucntion workd for keeping the snake in the game board but for somereason for the food it was not working. After hours maybe days (I kind of blacked out and time blended together) and many graphs later (see graph images) I figured out that the food numbers where a little diffrent from the snake. I could not figure out why but whith the helo of the graphs from above I got it to the point where it works most of the time. There is still some tweaking of the numbers. 

Win state

I struggled so much with the collison detection that I eneded up not having as much time for this as I would have liked. I simplified it so I have a function that keeps track of player 1 score and another function for player 2s. After the first game is over player ones score gets added to the win message. Same thing happens for player 2s score. When player 2s win message shows up I added a button to replay which refreshes the page to start from scratch. If I had time I would have loved to have added local storage so there is a leader board so you can kee playing. 
















