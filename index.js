var w1 = {word:"Batman", hint: "He has a singnal and a sidekick, what do you have?"}
var w2 = {word:"Boondocks", hint: "Black family on Adult Swim"}
var w3 = {word:"Seth Rogan", hint: "Funny Canadian stoner"}
var w4 = {word:"LeBron James", hint: "The best player in the Wolrd"}
var showHint = document.getElementById('hint_text')
var hintButton = document.getElementById('hint_btn')
var newGame = document.getElementById('newgame')
var submitGuess = document.getElementById("clear")
var input = document.getElementById('input')
var wrong = document.getElementById('wrong')
var wordBox = document.getElementById('wordBox')

var randomWord;
var theWord;
var theHint = "";
var counter;
var guess = []
var usedLetters = []

var words = [w1,w2,w3,w4]


function startGame() {
  while (wordBox.firstChild){
    wordBox.removeChild(wordBox.firstChild);
  }

  if (showHint != ""){
    giveHint()
  }
  randomWord = Math.floor(Math.random()* words.length);
  theWord = words[randomWord].word.split('')
  counter = theWord.length;
  theHint = words[randomWord].hint
  console.log(theWord);
  console.log(theHint);
  console.log(counter);

  for (var i = 0; i < theWord.length; i++) {

    var boxes = document.createElement('div');
    boxes.className = 'boxes'
    boxes.id = 'box'+ i;
    wordBox.appendChild(boxes);
    if (theWord[i] == ' ') {
      counter--;
      console.log(counter);
      boxes.style.border = 'none';
      guess.push(' ')
      theWord[i] ='';
    }else {
      guess.push('-')
    }

  }
  console.log(guess);
}

// clear input section when Guess btn is clicked //
// function clearInput() {
document.addEventListener('keypress', (event) => {
  if(event.keyCode === 13 && input.value!=""){
    checkGuess()
  }
});

submitGuess.addEventListener('click',checkGuess)


function checkGuess() {
  var inTheWord;
  for (var i = 0; i < theWord.length; i++) {
     inTheWord = document.getElementById('box'+[i])
    // check if game is done then, check later then check if they //
    // if any box id .innerHTML = " ". game not done loop through //
    if (theWord[i].toLowerCase() == input.value.toLowerCase() ) {
      inTheWord.innerHTML = theWord[i]
      counter--
      console.log(counter);
      // inTheWord.style.marginLeft = ""
      inTheWord.style.backgroundColor = 'orange'

    }
  }
  usedLetters.push(input.value);
  wrong.innerHTML = usedLetters.join(", ");
  if (counter == 0) {
    winner();
  }
  input.value = "";
}

function winner() {
  // setTimeout(function(){alert("You won!! Don't be too happy cause you still suck");},1000)
  setTimeout(function(){if (window.confirm("You Won, but still suck! Wanna Play Again?")){startGame();}}, 1000)
  // startGame();
}

function giveHint() {
  if(showHint.innerHTML != theHint){
    showHint.innerHTML = theHint;
  } else {
    showHint.innerHTML = "";
  }
}

newGame.addEventListener('click',function() {
  startGame()
  showHint.innerHTML = "";

})

hintButton.addEventListener('click', function() {
  giveHint();
})
