var w1 = {word:"Batman", hint: "He has a singnal and a sidekick, what do you have?"}
var w2 = {word:"Boondocks", hint: "Black family on Adult Swim"}
var w3 = {word:"Seth Rogan", hint: "Funny Canadian stoner"}
var w4 = {word:"LeBron James", hint: "The best player in the Wolrd"}
var showHint = document.getElementById('hint_text')
var hintButton = document.getElementById('hint_btn')
var newGame = document.getElementById('newgame')
var submitGuess = document.getElementById("clear")
var input = document.getElementById('input')

var randomWord;
var theWord;
var theHint;
var guess = []
// var wrongLetters = []

var words = [w1,w2,w3,w4]


// clear input section when Guess btn is clicked //
// function clearInput() {
submitGuess.addEventListener('click',function() {
  console.log(input.value);
  // console.log(inputArea.keypress);
  input.value = "";
})


function showMysteryWord() {
  randomWord = Math.floor(Math.random()* words.length);
  theWord = words[randomWord].word.split('')
  theHint = words[randomWord].hint
  console.log(theWord);
  console.log(theHint);

  for (var i = 0; i < theWord.length; i++) {
    var boxes = document.createElement('div');
    boxes.className = 'boxes'
    boxes.id = 'box'+ i
    document.body.appendChild(boxes);
    if (theWord[i] == ' ') {
      boxes.style.border = 'none';
      guess.push(' ')
    }else {
      guess.push('-')
    }
    
  }
  console.log(guess);
}

function giveHint() {
  showHint.innerHTML = theHint;
}

newGame.addEventListener('click',function() {
  showMysteryWord()
})

hintButton.addEventListener('click', function() {
  giveHint()
})
