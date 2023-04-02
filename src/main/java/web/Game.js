var cardValues = [
    'images/titanic.webp', 'Posters/fastandfurious-poster.jpg', 'Posters/godfather-poster.jpg',
    'Posters/huntforthewilderpeople-poster.jpg', 'Posters/meninblack3-poster.jpg', 'Posters/sherlockholmes2-poster.jpg'
];
var defaultValue;

var attempts = 0;
var matches = 0;

// Duplicate card values
var cards = cardValues.concat(cardValues);

// Shuffle cards
function shuffleCards() {
    for (var i = cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
}

// Create game board
function createGameBoard() {
    var gameBoard = document.querySelector(".cards");
    gameBoard.innerHTML = "";
    for (var i = 0; i < cards.length; i++) {
        var card = document.createElement("div");
        card.className = "card";
        defaultValue = card.style.backgroundImage;
        card.setAttribute("back", cards[i]);
        card.onclick = function() {
            flipCard(this);
        };
        gameBoard.appendChild(card);
    }
}

// Flip card
var firstCard = null;
var secondCard = null;
function flipCard(card) {
    if (defaultValue === card.style.backgroundImage) {

        if (firstCard == null) {
            firstCard = card;
            card.style.backgroundImage = "url(" + card.getAttribute("back") + ")";
            card.style.transform = "rotateY(360deg)";
        } else if (secondCard == null) {
            secondCard = card;
            card.style.backgroundImage = "url(" + card.getAttribute("back") + ")";
            card.style.transform = "rotateY(360deg)";
            if (firstCard.getAttribute("back") === secondCard.getAttribute("back")) {
                firstCard = null;
                secondCard = null;
                matches ++;

            } else {
                setTimeout(function () {
                    firstCard.style.backgroundImage = defaultValue;
                    firstCard.style.transform = "rotateY(0deg)";
                    secondCard.style.backgroundImage = defaultValue;
                    secondCard.style.transform = "rotateY(0deg)";
                    firstCard = null;
                    secondCard = null;
                }, 1000);
            }
            attempts ++;
            document.querySelector("#attempts").innerHTML = attempts;
            document.querySelector("#matches").innerHTML = matches;

            if (matches === cardValues.length) {
                alert("You win!");
            }
        }
    }
}

// Shuffle cards and create game board
document.querySelector("#shuffle").onclick = function() {
    shuffleCards();
    createGameBoard();
    attempts = 0;
    matches = 0;
    document.querySelector("#attempts").innerHTML = attempts;
    document.querySelector("#matches").innerHTML = matches;
};

// Create game board
document.querySelector("#restart").onclick = function() {
    createGameBoard();
    attempts = 0;
    matches = 0;
    document.querySelector("#attempts").innerHTML = attempts;
    document.querySelector("#matches").innerHTML = matches;
};

shuffleCards();
createGameBoard();