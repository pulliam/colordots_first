var cardsArray = [
                    'A', 
                    'A', 
                    'B', 
                    'B', 
                    'C', 
                    'C', 
                    'D', 
                    'D', 
                    'E', 
                    'E', 
                    'F', 
                    'F', 
                    'G', 
                    'G', 
                    'H', 
                    'H', 
                    'I', 
                    'I', 
                    'J', 
                    'J'
                    ];

Array.prototype.shuffleMePlease = function(){
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
};
cardsArray.shuffleMePlease();
console.log(cardsArray);

var checkForMatchesArray = [];

var flipCards = function (div, contentOfIt){
    if (div.textContent === '' && checkForMatchesArray.length < 2){
        console.log('cool' + contentOfIt);
         //FUCKING GOT MY FUNCTION WORKING!!!!! //FUCKING GOT MY FUNCTION WORKING!!!!! 
         //FUCKING GOT MY FUNCTION WORKING!!!!! //FUCKING GOT MY FUNCTION WORKING!!!!!
    }
};


var newGame = function(){
    for (var i = 0; i < cardsArray.length; i++) {
        var whichIsMyCard = ''; //setting a space for adding whats inside my card later!!!
        var newCard = document.createElement('div');
        var newId = 'card' + i;
        console.log(newId);
        newCard.setAttribute("id", newId);
        newCard.innerHTML = whichIsMyCard;  //adding that empty space/string into my new card
        newCard.onclick = flipCards(newCard, cardsArray[i]); 
        //WAS SO HARD FIGURINT OUT WHY MY ADDEVENT LISTENER WAS NOT WORKING, I WAS NOT BEING ABLE
        //TO REFER TO THE PARAMETERS OF THE FUNCTION!!!!!! NOW I USED .ONCLICK AND I WAS ALSO NOT BEING
        //ABLE TO REFER BACK TO MY EACH NEW DIV, SO I REALIZED WAS 'NEWCARD' VARIABLE. 
        //SOOOOOOO..........
                 //FUCKING GOT MY FUNCTION WORKING!!!!! //FUCKING GOT MY FUNCTION WORKING!!!!! 
         //FUCKING GOT MY FUNCTION WORKING!!!!! //FUCKING GOT MY FUNCTION WORKING!!!!!
                  //FUCKING GOT MY FUNCTION WORKING!!!!! //FUCKING GOT MY FUNCTION WORKING!!!!! 
         //FUCKING GOT MY FUNCTION WORKING!!!!! //FUCKING GOT MY FUNCTION WORKING!!!!!
                  ////AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE
                  //AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE
                  //AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE
                  //AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE
                  //AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE
                  //AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE
                  //AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE//AWESOMEEEEEEEEEE
        var gameBoardId = document.getElementById('gameBoard');
        gameBoardId.appendChild(newCard);
        console.log(newCard);
        console.log(cardsArray);
    }  
    cardsArray.shuffleMePlease();   //shuffle the cards for next game!!!
};
newGame();












