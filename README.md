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
