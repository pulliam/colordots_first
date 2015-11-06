var cardsArray = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'I', 'I', 'J', 'J'];

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
}

cardsArray.shuffleMePlease();
console.log(cardsArray);

var newGame = function(){
var timesCardsFlipped = 0;
var newClass = ''; //empty string for my new div class!
for (var i = 0; i < cardsArray.length; i++) {
    cardsArray[i]
};
}