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
        div.textContent = 'R';
            checkForMatchesArray.push(contentOfIt);

    }
};


var newGame = function(){
    for (var i = 0; i < cardsArray.length; i++) {
        var whichIsMyCard = ''; 
        var newCard = document.createElement('div');
        var newId = 'card' + i;
        console.log(newId);
        newCard.setAttribute("id", newId);
        newCard.innerHTML = whichIsMyCard;  
        newCard.addEventListener('click', flipCards(newCard, cardsArray[i])); //HERE!
        var gameBoardId = document.getElementById('gameBoard');
        gameBoardId.appendChild(newCard);
        console.log(newCard);
        console.log(cardsArray);
    }  
    cardsArray.shuffleMePlease();   
};
newGame();











