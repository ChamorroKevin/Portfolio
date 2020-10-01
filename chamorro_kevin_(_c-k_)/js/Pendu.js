var [wins, losses, abortions] = [0, 0, 0];
var gameInProcess, answer, maskedAnswer, wrongGuesses, triedLetters;
const masthead = document.querySelector("h1");

const commonWords = [
  "acajou",
  "agneau",
  "alarme",
  "ananas",
  "angora",
  "animal",
  "arcade",
  "aviron",
  "azimut",
  "babine",
  "balade",
  "bonzai",
  "basson",
  "billet",
  "bouche",
  "boucle",
  "bronze",
  "cabane",
  "caiman",
  "cloche",
  "cheque",
  "cirage",
  "coccyx",
  "crayon",
  "garage",
  "gospel",
  "goulot",
  "gramme",
  "grelot",
  "guenon",
  "hochet",
  "hormis",
  "humour",
  "hurler",
  "jargon",
  "limite",
  "lionne",
  "menthe",
  "oiseau",
  "podium",
  "poulpe",
  "poumon",
  "puzzle",
  "quartz",
  "rapide",
  "seisme",
  "tetine",
  "tomate",
  "walabi",
  "whisky",
  "zipper",
  "abriter",
  "ballast",
  "baryton",
  "bassine",
  "batavia",
  "billard",
  "bretzel",
  "cithare",
  "chariot",
  "clairon",
  "corbeau",
  "cortege",
  "crapaud",
  "cymbale",
  "dentier",
  "djembe",
  "drapeau",
  "exemple",
  "fourmis",
  "grandir",
  "iceberg",
  "javelot",
  "jockey",
  "journal",
  "journee",
  "jouxter",
  "losange",
  "macadam",
  "mondial",
  "notable",
  "oxygene",
  "panique",
  "petrole",
  "poterie",
  "pouvoir",
  "renegat",
  "scooter",
  "senteur",
  "sifflet",
  "spirale",
  "sucette",
  "strophe",
  "tonneau",
  "trousse",
  "tunique",
  "ukulele",
  "vautour",
  "zozoter",
  "aquarium",
  "araignee",
  "arbalete",
  "archipel",
  "banquise",
  "batterie",
  "brocante",
  "brouhaha",
  "capeline",
  "clavecin",
  "cloporte",
  "debutant",
  "diapason",
  "gangster",
  "gothique",
  "hautbois",
  "herisson",
  "logiciel",
  "objectif",
  "paranoia",
  "parcours",
  "pastiche",
  "question",
  "quetsche",
  "scarabee",
  "scorpion",
  "symptome",
  "tabouret",
  "tomahawk",
  "toujours",
  "tourisme",
  "triangle",
  "utopique",
  "zeppelin",
  "accordeon",
  "ascenseur",
  "ascension",
  "aseptiser",
  "autoroute",
  "avalanche",
  "balalaika",
  "bilboquet",
  "bourricot",
  "brillance",
  "cabriolet",
  "contrario",
  "cornemuse",
  "dangereux",
  "epluchage",
  "feodalite",
  "forteresse",
  "gondolier",
  "graphique",
  "horoscope",
  "intrepide",
  "klaxonner",
  "mascarade",
  "metaphore",
  "narrateur",
  "peripetie",
  "populaire",
  "printemps",
  "quemander",
  "tambourin",
  "vestiaire",
  "xylophone",
  "acrostiche",
  "apocalypse",
  "attraction",
  "aventurier",
  "bouillotte",
  "citrouille",
  "controverse",
  "coquelicot",
  "dissimuler",
  "flibustier",
  "forestiere",
  "grenouille",
  "impossible",
  "labyrinthe",
  "maharadjah",
  "prudemment",
  "quadriceps",
  "soliloquer",
  "subjectif",
];
hideAll("#tally span");
document.querySelector("#new-game").addEventListener("click", newGame);

function newGame() {
  if (gameInProcess == true)
    //true means the last game wasn't finished before user clicked "New Game"
    aborted();
  gameInProcess = true; //game starts
  masthead.innerText = "Pendu";
  masthead.setAttribute("status", "normal"); //no color
  answer = newRandomWord();
  console.log("Tu triche ! " + 'La réponse est "' + answer + '"'); // show answer in the console
  wrongGuesses = 0;
  resetKeypad();
  maskedAnswer = []; //maskedAnswer is the mixture of letters and underscores
  for (var i of answer) maskedAnswer.push("_");
  updateDisplayWord(); //display the maskedAnswer
  hang(); //draw graph
  triedLetters = "";
}

function newRandomWord() {
  return commonWords[Math.floor(Math.random() * commonWords.length)];
}

function verifyGuess() {
  //the onclick event
  var guessedLetter = this.innerText.toLowerCase();

  if (triedLetters.indexOf(guessedLetter) !== -1) return;
  triedLetters += guessedLetter;
  console.log(guessedLetter);

  //when it's a match:
  if (answer.toLowerCase().includes(guessedLetter)) {
    //update the displayed word
    for (var i in maskedAnswer) {
      if (answer[i] == guessedLetter) maskedAnswer[i] = answer[i];
    }
    updateDisplayWord();
    if (maskedAnswer.includes("_") == false)
      //won
      escaped();
    //change color and make the mouse no-drop
    this.classList.toggle("correct-letter", true);
    this.removeEventListener("click", verifyGuess);
  } else {
    //when it's not a match:
    this.classList.toggle("incorrect-letter", true); //change color and make the mouse no-drop
    this.removeEventListener("click", verifyGuess);
    wrongGuesses++;
    hang();
  }
}

document.body.addEventListener("keypress", function (event) {
  console.log(event.key);
  console.log(triedLetters);
  if (triedLetters.indexOf(event.key) !== -1) return;
  triedLetters += event.key;

  console.log(this.triedLetters);

  document.querySelector("#" + event.key).disabled = false;

  console.log(document.querySelector("#" + event.key));

  //when it's a match:
  if (answer.toLowerCase().includes(event.key)) {
    //update the displayed word
    for (var i in maskedAnswer) {
      if (answer[i] == event.key) maskedAnswer[i] = answer[i];
      i;
    }
    updateDisplayWord();
    if (maskedAnswer.includes("_") == false)
      //won
      escaped();
    //change color and make the mouse no-drop
    document
      .querySelector("#" + event.key)
      .classList.toggle("correct-letter", true);
  } else {
    //when it's not a match:
    document
      .querySelector("#" + event.key)
      .classList.toggle("incorrect-letter", true); //change color and make the mouse no-drop

    wrongGuesses++;
    hang();
  }
});

function updateDisplayWord() {
  var display = "";
  for (var i of maskedAnswer) display += i + " ";
  display.slice(0, -1);
  document.querySelector("#guessing").textContent = display;
}

function aborted() {
  //add 1 to the tally Abortions
  abortions++;
  document.querySelector("#abortions").innerText = abortions;
  unhideAll(".abortions");
}

function hang() {
  //draw the hangman
  switch (wrongGuesses) {
    case 0:
      hideAll("svg *");
      break;
    case 1:
      unhideAll(".gallows");
      break;
    case 2:
      unhide("#head");
      break;
    case 3:
      unhide("#body");
      break;
    case 4:
      unhide("#left-arm");
      break;
    case 5:
      unhide("#right-arm");
      break;
    case 6:
      unhide("#left-leg");
      break;
    case 7:
      unhide("#right-leg", "rope");

      break;
    case 8:
      unhide("#rope");
      hanged();
      break;
    default:
      newGame();
  }
}

function hanged() {
  //lost
  gameInProcess = false;
  masthead.innerText = "Tu as perdu !";
  masthead.setAttribute("status", "hanged");
  losses++;
  removeAllListeners();
  unhideAll(".losses");
  document.querySelector("#losses").innerText = losses;
  // show correct answer
  var display = "";
  for (var i of answer) display += i + " ";
  display.slice(0, -1);
  document.querySelector("#guessing").textContent = display;
}

function escaped() {
  //won
  gameInProcess = false;
  masthead.innerText = "Tu as réussi !";
  masthead.setAttribute("status", "escaped");
  wins++;
  removeAllListeners();
  unhideAll(".wins");
  document.querySelector("#wins").innerText = wins;
}

function removeAllListeners() {
  //prevent user from continue clicking after game's over
  for (let i of document.querySelectorAll("#keypad a")) {
    i.removeEventListener("click", verifyGuess);
    i.classList.toggle("finished", true);
  }
}

function resetKeypad() {
  for (var i of document.querySelectorAll("#keypad div")) //clear the keypad
    i.innerText = "";
  populateRow(1, "abcdefghij");
  populateRow(2, "klmnopqrst");
  populateRow(3, "uvwxyz");
}

function populateRow(rowNumber, rowLetters) {
  //draw the keyboard and attach listeners
  for (let i of rowLetters) {
    let key = document.createElement("a");
    key.id = i.toLowerCase();
    key.append(i);
    key.addEventListener("click", verifyGuess);
    document.querySelector("#keypad--row" + rowNumber).append(key);
  }
}

function unhide(targetElement) {
  document.querySelector(targetElement).classList.toggle("hidden", false);
}

function hideAll(targetElements) {
  for (let i of document.querySelectorAll(targetElements))
    i.classList.toggle("hidden", true);
}

function unhideAll(targetElements) {
  for (let i of document.querySelectorAll(targetElements))
    i.classList.toggle("hidden", false);
}
