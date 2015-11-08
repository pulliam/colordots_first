var cardsArray = [
                    '3498db', 
                    '3498db', 
                    '34495e', 
                    '34495e', 
                    '2ecc71', 
                    '2ecc71', 
                    'e74c3c', 
                    'e74c3c', 
                    'f1c40f', 
                    'f1c40f', 
                    '1abc9c', 
                    '1abc9c', 
                    'G', 
                    'G', 
                    'H', 
                    'H', 
                    'I', 
                    'I', 
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
    div.style.backgroundColor = '#'+annoyingContent;
        if (max2Turns.length === 0){
            max2Turns.push(annoyingContent);
            equalPairsGoHere.push(div.id);
        } else if (max2Turns.length === 1){
            max2Turns.push(annoyingContent);
            equalPairsGoHere.push(div.id);
            var firstCard = equalPairsGoHere[0];
            var secondCard = equalPairsGoHere[1];
            if (max2Turns[0] === max2Turns[1]){
                max2Turns = [];
                letsCountIfGameIsOver += 2;
                var PairsFound = {
                                2: 'One Pair Found', 
                                4: 'Two Pairs Found', 
                                6: 'Three Pairs Found, Keep Working', 
                                8: 'Four Pairs Found', 
                                10: 'Five Pairs Found',
                                12: 'Six Pairs Found, Doing Great',
                                14: 'Seven Pairs Found',
                                16: 'Eight Pairs Found, One More to Win',
                                18: 'Play Again? Press Any Key'
                                };
                for (var i in PairsFound){
                    if ([i] == letsCountIfGameIsOver){
                        document.querySelector('button').textContent = ''+ PairsFound[i];
                        console.log(PairsFound[i]);
                    }
                }          
                var letsDesapear = function (){
                    document.getElementById(firstCard).style.backgroundColor = 'transparent';
                    document.getElementById(secondCard).style.backgroundColor = 'transparent';
                    };
                setTimeout(letsDesapear, 400);

                equalPairsGoHere =[];
                if (cardsArray.length === letsCountIfGameIsOver){
                    document.body.addEventListener("keypress", newGame);
                }
            } else {
                var mosterFunction = function(){
                    document.getElementById(firstCard).textContent = '';
                    document.getElementById(firstCard).style.backgroundColor = 'white';
                    document.getElementById(secondCard).textContent = '';
                    document.getElementById(secondCard).style.backgroundColor = 'white';
                    };
                setTimeout(mosterFunction, 400);
                max2Turns = [];
                equalPairsGoHere =[];
            }
        }
    }      
};

var resetBoard = function(){ 
    for (var i = 0; i < cardsArray.length; i++) {
            var newCard = document.createElement('div');
            newCard.setAttribute("class", "initial-color");
            newCard.setAttribute("id", "cardN#" + i);
            newCard.setAttribute("onclick", "thatFunction(this, '" + cardsArray[i]+"')");
            document.getElementById('game-board').appendChild(newCard);
            console.log(newCard);
            console.log(cardsArray);
        }  
};

var newGame = function(){
    cardsArray.shuffleMePlease();  
        if (!document.getElementById('game-board')){ 
        var newGame = document.createElement('div');
        newGame.setAttribute('id', 'game-board');
        document.body.appendChild(newGame);
        resetBoard();
        } else {
        document.body.removeChild(document.getElementById('game-board'));
        var newGame = document.createElement('div');
        newGame.setAttribute('id', 'game-board');
        document.body.appendChild(newGame);
        resetBoard();
        }
};
newGame();
