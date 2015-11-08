var cardsArray = [
                    'A', 
                    'A', 
                    'B', 
                    'B', 
                    'C', 
                    'C', 
                    // 'D', 
                    // 'D', 
                    // 'E', 
                    // 'E', 
                    // 'F', 
                    // 'F', 
                    // 'G', 
                    // 'G', 
                    // 'H', 
                    // 'H', 
                    // 'I', 
                    // 'I', 
                    // 'J', 
                    // 'J'
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
            var firstCard = equalPairsGoHere[0];
            var secondCard = equalPairsGoHere[1];
            if (max2Turns[0] === max2Turns [1]){
                max2Turns = [];
                letsCountIfGameIsOver += 2;
                var letsDesapear = function (){
                    document.getElementById(firstCard).setAttribute("class", "found");
                    document.getElementById(secondCard).setAttribute("class", "found");
                    };
                setTimeout(letsDesapear, 400);
                equalPairsGoHere =[];
                if (cardsArray.length === letsCountIfGameIsOver){
                    setTimeout(function(){
                        document.body.removeChild(document.querySelector('#game-board'));
                        var gameOver = document.createElement('div');
                        gameOver.setAttribute('id', 'game-over');
                        document.getElementById('empty-space').appendChild(gameOver);
                        gameOver.textContent = 'WIN';
                        var buttonArea = document.createElement('div');
                        buttonArea.setAttribute('id', 'button-area');
                        document.getElementById('empty-space').appendChild(buttonArea);
                        var buttonNewGame = document.createElement('button');
                        buttonNewGame.textContent = 'Play Again';
                        buttonNewGame.addEventListener('click', newGame);
                        document.getElementById('button-area').appendChild(buttonNewGame);
                    }, 300);
                }
            } else {
                var mosterFunction = function(){
                    document.getElementById(firstCard).textContent = '';
                    document.getElementById(firstCard).setAttribute('class', 'initial-color');
                    document.getElementById(secondCard).textContent = '';
                    document.getElementById(secondCard).setAttribute('class', 'initial-color');
                    };
                setTimeout(mosterFunction, 400);
                max2Turns = [];
                equalPairsGoHere =[];
            }
        }
    }      
};

var resetBoard = function(){
    cardsArray.shuffleMePlease();  
    for (var i = 0; i < cardsArray.length; i++) {
            var newCard = document.createElement('div');
            newCard.setAttribute("class", "initial-color");
            newCard.setAttribute("id", 'cardN#' + i);
            newCard.setAttribute("onclick", "thatFunction(this, '" + cardsArray[i]+"')");
            document.getElementById('game-board').appendChild(newCard);
            console.log(newCard);
            console.log(cardsArray);
        }  
}

var newGame = function(){
    if (document.querySelector('#game-board')){
        resetBoard(); 
    } else {
        document.getElementById('empty-space').removeChild(document.querySelector('#game-over'));
        document.getElementById('empty-space').removeChild(document.querySelector('#button-area'));
        var newGame = document.createElement('div');
        newGame.setAttribute('id', 'game-board');
        document.body.appendChild(newGame);
        setTimeout(resetBoard, 300);
    }
};

    newGame();
