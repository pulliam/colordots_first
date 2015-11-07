# Memory Game Project by Thais Pulliam
![abstract-black-and-white-stripes-facebook-cover-timeline-banner-for-fb](https://cloud.githubusercontent.com/assets/14362520/10987787/918b95ec-8404-11e5-8f91-c927c4fad7a6.jpg)
##How this project will be planned:
* Sketch hand-written wireframes are found very helpful to me, thus I will be using a lot of images of those sketches in the README Document, to keep track of my logic and line of thought during all steps of the project. 
* Most important Highlights will be typed in as well to be kept on track. 

##Features that the game might contain:
* Counter for How Many Tries.</li>
* Counter for How Many Pairs found.
* Counter for How Many Wins (?) 
* Reload Page (with a button) without Refresing.
* Reload Page Automatically if game is won. 
* Set a Winning Page.

##To consider when setting up the logic:
* A pair of same cards is needed. 
* Game will be set with 20 cards (10 pairs).
* The cards need to be shuffled into new positions for every new game. 
* When Pairs are found, desapear their cards. 
* How will the pairs will be determinated (matches), to see if the pairs is a "win".

##First wireframe of the project:
* How the screens should look like in every step of the game. 
* Maximus tries is on hold: should it be an asset of the game? 
* For future development, keep tracking of computer wins by tracking their I.P Addresses might be interesting, to set a shared score and goal. 

![image1](https://cloud.githubusercontent.com/assets/14362520/10981540/5a610990-83d6-11e5-9fd6-8b91df872b46.JPG)

##Second part - how to pseudocode this:
* My html and css will be very basic to start off. 
* A main < div > tag is where my game board will be.
* I will need many small divs for the cards: 
* * I can consider using only one div tag on css for all of them. 
* * The logic of those divs needs to be planned. Will them only be created at my javascript file?
* Will I be using JQuery or Vanilla only?
* Let's make the cards into an array. To decide:
* * Cards are a text or an image?
* How to suffle this cards?

![image2](https://cloud.githubusercontent.com/assets/14362520/10986774/f552183a-83fa-11e5-9d44-a22e08958f1d.JPG)

##Considering the Fisher Yates Shuffle Method:
* This is the sketch of "pseudocoding" the shuffle method. 
* This method shuffles from the last index of the array till the first. 

![image3](https://cloud.githubusercontent.com/assets/14362520/10986916/3ff075f2-83fc-11e5-89a3-68de92375991.png)
![img4](https://cloud.githubusercontent.com/assets/14362520/10986917/41386564-83fc-11e5-977a-4125a9b3cac5.png)

#### Then figuring out how to code from there: 
*A few ideas of how the code would look like: (Not Complete)

![image1-1](https://cloud.githubusercontent.com/assets/14362520/10987503/f73fb330-8401-11e5-8e31-30ef5fe362b4.JPG)

#### And finally, it more organized:

![image2-1](https://cloud.githubusercontent.com/assets/14362520/10987488/c9fcd178-8401-11e5-88bb-fddc7ce34051.JPG)

##More wireFrames (second-part of the logic)

* Ok. So now that I have all my card values. How can I pass/connect those values to my divs (real graphic cars)? 
* I will make a function for that to happen because I want the cards to be attatched to their values only when clicked. So then I can use a click event listener later, I need to make a function so I can call it back maybe. (ha. I have a great sense of humor.)
* Set my content to the content I will call on the function...

![img_1172](https://cloud.githubusercontent.com/assets/14362520/11017826/b9723d0a-857a-11e5-9840-e263a5e5d2b6.JPG)

* Nice. How should this function look like?
* I want to connect two dots: the div and the value. So lets set those as parameters.
* I started from the bottom now we're here. (lol, ok I will stop). I started to elaborate my pseudocode function from the bottom so then I changed the conditionals after and figured I would need an empty array for it, so I can compare my stuff! So knowing that, I need a variable newArray = [];
* If my string is empty, which means, ready to use! (And than I also added an AND (&&) to make sure my array has less than 2 elements, ) I can then add a class or a text.content or whatsaaver to make my pretty card show its back and the content I liked from the card array. 
* so now that how I will compare! I will add the value of the parameter value to start.
* and then put this value inside my cool empty array (if at this point the array has no length just yet). 
* then, if my array has one value now only, I will push again one more value. 
* Ill compare my indexes, if their values are equal, it means we got a match, got it? 
* thats why i need my array to have less than two in length to run this function... and then It goes till game is over. 

![img_1174](https://cloud.githubusercontent.com/assets/14362520/11017827/bacf156a-857a-11e5-88a4-acfc06ab2165.JPG)

* But...

![img_1181](https://cloud.githubusercontent.com/assets/14362520/11017828/bc2f795e-857a-11e5-9684-b4a33f560c0a.JPG)

* That was a tricky one, It's kind of obvious but it took me a while. (I love to make things more complicated than they are).
* My rubber-ducking with my white board says it all, but the conclusion is that I need to reset the cards back to their initial look... so I can just add a clone class to it... And I think I will need to make a function for it. Still figuring out.

![img_1182](https://cloud.githubusercontent.com/assets/14362520/11017829/bd8337d2-857a-11e5-81a7-26fbe19a4abe.JPG)

* AAAAND.... HOW TO END THIS GAME????
* Well, the end will means all cards have beem already flipped for good (matched). So if cards flipped equals the number of total cards in the game, game over....

![img_1175](https://cloud.githubusercontent.com/assets/14362520/11017832/c3a104f0-857a-11e5-88aa-461fb531bfba.JPG)

##More sketches and notes...

![img_1183](https://cloud.githubusercontent.com/assets/14362520/11017830/c1a1d8b4-857a-11e5-8368-8b77b9b50739.JPG)

## Attachments for future use:
#### Those are the pieces of code I figured out from wireframing that Im storing for future use when coding it entirelly:

* **Shuffle My Board**:
I decided to convert my loop into a method as I first thought on my wireframing so i can use that more easily in any array I want on my document! Here is the result:

```javascript
Array.prototype.shufflMePlease = function(){
    var i = this.length;
    var rand;
    var randPosition;
        while (--i > 0){
            rand = Math.floor(Math.random() * (i+1));
            randPosition = this[rand];
            this[rand] = this[i];
            this[i] = randPosition;
        }
    return this;
}

anyArray.shuffleMePlease();
console.log(anyArray);
```

* **Add a new game board and show cards**:
Iiiiii worked on this for hours... Because I was doing silly typos. One of them made me crash by beautiful powerful retina screen Mac (lol, I get funny at this late at night); because I was running an infinite loop just by a spelling mistake. It was almost comic so I had to commit it to save the delightful experience into my records. 
I figured out the first part of the function. I made the cards show up on the screen once the function is runned!!! And I decided that I might just stick with vanilla. Why? JQuery is too easy (yeah, Im a brag). haha. Just kidding. 
But I started coding this way so I want t keep the flow...
I setted a how many times my cards have been flipped counter, that I will use at some point. I made a for loop to create new cards!!! Everytime the function run, my loop runs into each of the indexes and creates a new div with an Id of "card"+the index number (Im a genius). 
Then I append the little child into the big board box and voila, little blue cards show up (The blue might change, im using stardard bright red/blue colors to just keep wireframing the positions).

```javascript
var newGame = function(){
    var timesCardsFlipped = 0;
    for (var i = 0; i < cardsArray.length; i++) {
        var newCard = document.createElement('div');
        var newId = 'card' + i;
        console.log(newId);
        newCard.setAttribute("id", newId);
        var gameBoardId = document.getElementById('gameBoard');
        gameBoardId.appendChild(newCard);
        console.log(newCard);
    }  
}

```
