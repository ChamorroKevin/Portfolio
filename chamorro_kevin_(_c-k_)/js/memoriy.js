//LET & CONST

const DECK = document.getElementById('deck');
const CARDS = document.getElementsByClassName('card');
const MATCHED_COUPLE_DISPLAY = document.getElementById('matchedCoupleDisplay');
const MOVES_NUMBER_DISPLAY = document.getElementById('movesNumberDisplay');
const RESTART_BUTTON = document.getElementById('restartButton');
const PREVIOUS_SCORE_TABLE = document.getElementById('previous-score__table');
const PREVIOUS_SCORE_CNT = document.getElementById('previous-score__container');


let openCardsHC = document.getElementsByClassName('open show');
let toBeReflippedHC = document.getElementsByClassName('toBeReflipped');
let matchCardsHC = document.getElementsByClassName('match');
let movesNumber = 0;
let matchedCouplesNumber = 0;
let starRating = 3;
let matchNumber = 1;

//TIMER
let sec = 0;
function myInterval() {
  sec++;
  document.getElementById('secondsElapsed').textContent = sec;
}
let timer = setInterval(myInterval, 1000);

//Call function to shuffle cards and create HTML to display the cards
function newGame() {
  let cardsList = Array.prototype.slice.call(CARDS);
  cardsList = shuffle(cardsList);
  for (var i = 0; i < cardsList.length; i++) {
    DECK.appendChild(cardsList[i])
    //cardsList[i].setAttribute("id", i);
  };
}
newGame();

//Calls newGame function, reset timer, reset open/shown/matched cards, reset move number and matched cards number, reset star rating.
function restartGame() {
  newGame();
  DECK.classList.add('shake-to-shuffle');

  clearInterval(timer);
  sec = 0;
  document.getElementById('secondsElapsed').textContent = sec;
  timer = setInterval(myInterval, 1000);

  if (matchCardsHC.length > 0 || openCardsHC.length > 0) {
    resetCards();
  };
  if (movesNumber !==0) {
    movesNumber = 0;
    MOVES_NUMBER_DISPLAY.textContent = movesNumber;
  }
  if (matchedCouplesNumber !== 0) {
    matchedCouplesNumber = 0;
    MATCHED_COUPLE_DISPLAY.textContent = matchedCouplesNumber;
  }


  matchNumber++;
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

//Flip cards, store open/shown cards images in an array, run check matching cards function, and prevent more than 2 cards from being flipped.
function flipCard(evt) {
  let flippedCard = evt.target;
  if (flippedCard.nodeName === 'LI') {
    if (!flippedCard.classList.contains('match') && !flippedCard.classList.contains('open')) {
      flippedCard.classList.add('open', 'show');
    }
  }
  let openCardsArray = Array.prototype.slice.call(openCardsHC);
  if (openCardsArray.length ===2) {
      checkIfMatching();
    }
    if (openCardsArray.length >2) {
      flipOpenCards();
    }
  }

//when 2 cards are open/shown, if their content match, assign class match, call function to unassign open/shown classes, add +1 matching couple found, call function to increment move by one and check if game is over. If they don't match, assign a temporary class to identity which cards need to be closed in case more than 2 cards were flipped, and call the function to close those 2 cards. In any case, the move number is incremented by one and the moves number is check to adjust star rating and to determine if game is over by max moves number reached
function checkIfMatching() {
  let openCardsArray = Array.prototype.slice.call(openCardsHC);
    if (openCardsArray[0].classList[1] === openCardsArray[1].classList[1]) {
      openCardsArray.forEach(function(card) {
        card.classList.add('match');
      });
      handleMatchedCards();
      incrementMatchedCouples();
      setTimeout(checkIfGameOver, 1200);
    } else {
      openCardsArray.forEach(function(card) {
        card.classList.add('toBeReflipped');
      });
      setTimeout(flipOpenCards, 1200);
      }
    incrementMovesNumber();
    setTimeout(checkMovesNumber, 1200);
  }

//close the 2 cards confronted and any other open card, preventing there to be more than 1 open card besides the matched ones
function flipOpenCards() {
  let toBeReflipped = Array.prototype.slice.call(toBeReflippedHC);
  toBeReflipped.forEach(function(card) {
    card.classList.remove('open', 'show', 'toBeReflipped');
  });
  let openCardsArray = Array.prototype.slice.call(openCardsHC);
  if (openCardsArray.length>1) {
    openCardsArray.forEach(function(card) {
      card.classList.remove('open', 'show');
    });
  }
}

//remove open/show class to the matched couple
function handleMatchedCards() {
  let matchCardsArray = Array.prototype.slice.call(matchCardsHC);
  matchCardsArray.forEach(function(card) {
    card.classList.remove('open', 'show');
  });
}

//remove open/show/match class to all matched cards.
function resetCards() {
  let openCardsArray = Array.prototype.slice.call(openCardsHC);
  openCardsArray.forEach(function(card) {
      card.classList.remove('open', 'show');
  });
  let matchCardsArray = Array.prototype.slice.call(matchCardsHC);
  matchCardsArray.forEach(function(card) {
    card.classList.remove('match');
  });
}

//Increment moves number and display it
function incrementMovesNumber() {
  movesNumber++;
  MOVES_NUMBER_DISPLAY.textContent = movesNumber;
}

//Increment matched couple number and display it
function incrementMatchedCouples() {
  matchedCouplesNumber++;
  MATCHED_COUPLE_DISPLAY.textContent = matchedCouplesNumber;
}

//Check if all the couples have been matched, return alert according to star rating, stops timer
function checkIfGameOver() {
  let matchCardsArray = Array.prototype.slice.call(matchCardsHC);
  if (matchCardsArray.length === 16) {
    let alertMessage;
    let gameStatsMessage;

   
    gameStatsMessage = '\nTime elapsed: ' + sec + ' seconds' + '\nTotal moves: ' + movesNumber;
    if (starRating >=2) {
      gameStatsMessage += '\nYour rating: ' + starRating + ' stars';
    } else if (starRating <=1.5) {
      gameStatsMessage += '\nYour rating: ' + starRating + ' star';
    }
  
    document.getElementById("alert").innerHTML = gameStatsMessage ;
    alert(gameStatsMessage);
    recordLastScore();
    clearInterval(timer);
  } else {
    return;
  }
}


//Short function that removes the shuffle class from deck, so that it can be reapplied the next time the restart button is clicked
function removeDeckShuffleClass() {
  DECK.classList.remove('shake-to-shuffle');
}



//EVENT LISTENERS
DECK.addEventListener('click', flipCard);
RESTART_BUTTON.addEventListener('click', restartGame);
RESTART_BUTTON.addEventListener('mouseover', removeDeckShuffleClass);
document.getElementById("#closeAlert").addEventListener("click",()=>{document.getElementById("#alertCss").style.visible="hidden"
})