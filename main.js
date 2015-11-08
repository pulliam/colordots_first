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

var thatFunction = function(div, hello){
if (div.textContent === '' && checkForMatchesArray.length < 2){
    div.innerHTML = hello;
}
};

var newGame = function(){
    for (var i = 0; i < cardsArray.length; i++) {
        var whichIsMyCard = ''; 
        var newCard = document.createElement('div');
        var newId = 'card' + i;
        newCard.setAttribute("id", newId);
        var gameBoardId = document.getElementById('gameBoard');
        gameBoardId.appendChild(newCard);
        newCard.innerHTML = whichIsMyCard;  
        console.log(newCard);
        console.log(cardsArray);
    }  

    newCard.addEventListener('click', function(){
        for (var i = 0; i < cardsArray.length; i++) {
            preciousValue = cardsArray[i];
        }
        return thatFunction(this, preciousValue);
    });

    cardsArray.shuffleMePlease();   
};

newGame();












