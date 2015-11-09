var cardsArray = [
                    '30BA8F',  //Green
                    '30BA8F', 
                    'FDEE00', //Lemon yellow
                    'FDEE00', 
                    // '00CCFF', //Sky Blue
                    // '00CCFF', 
                    // '00CED1', //Dark Turquoise
                    // '00CED1', 
                    // 'FF5349', //Crimson
                    // 'FF5349', 
                    // 'DFFF00', //Chartreuse
                    // 'DFFF00', 
                    // '9370DB',  //Purple
                    // '9370DB', 
                    // 'FF62B0',  //Pink
                    // 'FF62B0', 
                    // '446CCF', //Blue 446CCF
                    // '446CCF', 
                    // '446CCF', //Blue 446CCF
                    // '446CCF', 
                    // '446CCF', //Blue 446CCF
                    // '446CCF', 
                    // '446CCF', //Blue 446CCF
                    // '446CCF', 
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

var letsCountIfGameIsOver = 0;
var areThisTwoSameColor = [];
var doesTheseHaveSameId = [];
var howManyTimesIWinThisThing = 0;
                                                    //When clicked, the circle will:
var thatFunction = function(div, annoyingContent){ //(each div of circle, the content of the circle aka array element)
    if (areThisTwoSameColor.length < 2){ //If less than 2 elements on my array...
    div.style.backgroundColor = '#'+annoyingContent; //add a color to circle, according to the array element.
        if (areThisTwoSameColor.length === 0){ //If my areThisTwoSameColor array is empty,
            areThisTwoSameColor.push(annoyingContent); //put the cards array element inside it.
            doesTheseHaveSameId.push(div.id); //put the Id of the circle div inside this other array.
        } else if (areThisTwoSameColor.length === 1){
            areThisTwoSameColor.push(annoyingContent);
            doesTheseHaveSameId.push(div.id);
            var firstCircle = doesTheseHaveSameId[0];
            var secondCircle = doesTheseHaveSameId[1]; 
            if (areThisTwoSameColor[0] === areThisTwoSameColor[1] && firstCircle !== secondCircle){
                areThisTwoSameColor = [];
                letsCountIfGameIsOver += 2;
                var PairsFound = {
                                2: 'One Pair Found', 
                                4: 'Two Pairs Found', 
                                6: 'Three Pairs Found, Keep Working', 
                                8: 'Four Pairs Found', 
                                10: 'Five Pairs Found',
                                12: 'Six Pairs Found, Doing Great',
                                14: 'Seven Pairs Found',
                                16: 'Eight Pairs Found',
                                18: 'Nine Pairs Found',
                                20: 'Ten Pairs Found',
                                22: 'Eleven Pairs Found, One More to Win',
                                24: 'Play Again? Press Any Key'
                                };
                for (var i in PairsFound){
                    if ([i] == letsCountIfGameIsOver){
                        document.querySelector('button').textContent = ''+ PairsFound[i];
                        console.log(PairsFound[i]);
                    }
                } 
                var letsDesapear = function (){
                    document.getElementById(firstCircle).style.backgroundColor = 'transparent';
                    document.getElementById(secondCircle).style.backgroundColor = 'transparent';
                    };
                setTimeout(letsDesapear, 400); 
                doesTheseHaveSameId =[];
                if (cardsArray.length === letsCountIfGameIsOver){
                    document.body.addEventListener("keypress", newGame);
                    howManyTimesIWinThisThing++
                    document.getElementById('too-many-wins').textContent = "Wins: " + howManyTimesIWinThisThing + "  |   ";
                }
            } else {
                var mosterFunction = function(){
                    document.getElementById(firstCircle).style.backgroundColor = 'white';
                    document.getElementById(secondCircle).style.backgroundColor = 'white';
                    };
                setTimeout(mosterFunction, 400);
                areThisTwoSameColor = [];
                doesTheseHaveSameId =[];
            }
        }
    }   
};

var newGame = function(){
    cardsArray.shuffleMePlease();  //Shuffle Cards before Game Start
    if (document.getElementById("game-board")){
        document.body.removeChild(document.getElementById("game-board")); //Reset Board (Remove the div)
    }
    var newGame = document.createElement("div"); //Create Div for Board
    newGame.setAttribute("id", "game-board"); //Link to an Id
    document.body.appendChild(newGame); //Apend It to the Page
    for (var i = 0; i < cardsArray.length; i++) { //Loop on Cards Array
    var newCard = document.createElement("div"); //Create new div for every index
    newCard.setAttribute("class", "initial-color"); //Set it's class to right shape/white color
    newCard.setAttribute("id", "card-#" + i); //Set specific unic Id to it, with index number
    newCard.setAttribute("onclick", "thatFunction(this, '" + cardsArray[i]+"')"); //add click option to it
    document.getElementById("game-board").appendChild(newCard); //append it to the div for board
    console.log(newCard);
    }  
};
newGame();

var okNowWeAreTalking = function(){
    var counterOfTime = 1000;
    var runMyTimer = function (){
        counterOfTime--;
        console.log(counterOfTime);
        document.getElementById('play-with-timer').textContent = "  Seconds Left: " + counterOfTime;
        if (cardsArray.length === letsCountIfGameIsOver){
            clearInterval(thisCrazyClock);
            document.body.removeChild(document.getElementById("game-board"));
            document.body.addEventListener("keypress", newGame);
            document.getElementById('button-new-game').innerHTML = 'Good Work On Thinking Fast! Press Any Key to Play Again';
        } else if (counterOfTime === 0 && counterOfTime < 1 ){
            clearInterval(thisCrazyClock);
            document.body.removeChild(document.getElementById("game-board"));
            document.body.addEventListener("keypress", newGame);
            document.getElementById('button-new-game').textContent = 'Play Again? Press Any Key';
            return window.alert('Game Over, You Lose!'); 
        }
    }
    var thisCrazyClock = setInterval(runMyTimer, 1000);
}   
document.getElementById('play-with-timer').addEventListener('click', okNowWeAreTalking);
