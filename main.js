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
var letsCountIfGameIsOver = 0;

var thatFunction = function(div, annoyingContent){
if (div.textContent === '' && checkForMatchesArray.length < 2){
    div.textContent = annoyingContent;
    div.setAttribute('id', 'turned-card');
    if (checkForMatchesArray.length === 0){
        checkForMatchesArray.push(annoyingContent);
    } else if (checkForMatchesArray.length === 1){
        checkForMatchesArray.push(annoyingContent);
        if (checkForMatchesArray[0] === checkForMatchesArray [1]){
            checkForMatchesArray = [];
            letsCountIfGameIsOver += 2;
            if (cardsArray.length === letsCountIfGameIsOver){
                window.alert('game over');
            }
        }
    } else {
        MOSTERFUNCTION IM FINDING OUT
    }
}
};

var newGame = function(){
    for (var i = 0; i < cardsArray.length; i++) {
        var newCard = document.createElement('div');
        // newCard.setAttribute("id", 'card' + i);
        newCard.setAttribute("id", "initial-color");
        newCard.setAttribute("onclick", "thatFunction(this, '" + cardsArray[i]+"')");
        document.getElementById('gameBoard').appendChild(newCard);
        console.log(newCard);
        console.log(cardsArray);
    }  
    cardsArray.shuffleMePlease();   
};

newGame();