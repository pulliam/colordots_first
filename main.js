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

var max2Turns = [];
var letsCountIfGameIsOver = 0;
var equalPairsGoHere = [];

var thatFunction = function(div, annoyingContent){
    if (div.textContent === '' && max2Turns.length < 2){
    div.textContent = annoyingContent;
    div.setAttribute('class', 'turned-card');
        if (max2Turns.length === 0){
            max2Turns.push(annoyingContent);
            equalPairsGoHere.push(div.id);
        } else if (max2Turns.length === 1){
            max2Turns.push(annoyingContent);
            equalPairsGoHere.push(div.id);
            var firstCard = equalPairsGoHere[0]
            var secondCard = equalPairsGoHere[1]
            if (max2Turns[0] === max2Turns [1]){
                max2Turns = [];
                letsCountIfGameIsOver += 2;
                // var firstCard = equalPairsGoHere[0]
                // var secondCard = equalPairsGoHere[1]
                var letsDesapear = function (){
                    document.getElementById(firstCard).setAttribute('class', "found");
                    document.getElementById(secondCard).setAttribute('class', "found");
                    }
                setTimeout(letsDesapear, 400);
                equalPairsGoHere =[];
                if (cardsArray.length === letsCountIfGameIsOver){
                    window.alert('game over');
                }
            } else {
                var mosterFunction = function(){
                    document.getElementById(firstCard).textContent = '';
                    document.getElementById(firstCard).setAttribute('class', 'initial-color');
                    document.getElementById(secondCard).textContent = '';
                    document.getElementById(secondCard).setAttribute('class', 'initial-color');
                    };
                mosterFunction
            }
        }
    }      
};

var newGame = function(){
    for (var i = 0; i < cardsArray.length; i++) {
        var newCard = document.createElement('div');
        newCard.setAttribute("class", "initial-color");
        newCard.setAttribute("id", 'cardN#' + i);
        newCard.setAttribute("onclick", "thatFunction(this, '" + cardsArray[i]+"')");
        document.getElementById('gameBoard').appendChild(newCard);
        console.log(newCard);
        console.log(cardsArray);
    }  
    cardsArray.shuffleMePlease();   
};

newGame();
