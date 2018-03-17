$(document).ready(function () {

    $("button").click(function(){
        console.log("lets see if this works");
    })
});


var panel = $('#body2');
var countStartNumber = 10;


//List of buttons
$(document).on('click', '#restart', function(i) {
  game.reset();
});

$(document).on('click', '.answer-button', function(i) {
  game.clicked(i);
});

$(document).on('click', '#start', function(i) {
  $('#body1').prepend('<h1>Time Left: <span id="counter1">10</span> Seconds</h1>');
  game.loadQuestion();
});


//Array of questions/answers/options
var trivia = [{
  question: "What was the first full length CGI movie?",
  answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
  correctAnswer: "Toy Story",
}, 
{
  question: "Which of these is NOT a name of one of the Spice Girls?",
  answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
  correctAnswer: "Fred Spice",
}, 
{
  question: "Which NBA team won the most titles in the 90s?",
  answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
  correctAnswer: "Chicago Bulls",
}, 
{
  question: 'Which group released the hit song, "Smells Like Teen Spirit"?',
  answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
  correctAnswer: "Nirvana",
}, 
{
  question: 'Which popular Disney movie featured the song, "Circle of Life"?',
  answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
  correctAnswer: "The Lion King",
}, 
{
  question: 'Finish this line from the Fresh Prince of Bel-Air theme song: "I whistled for a cab and when it came near, the license plate said..."',
  answers: ["Dice", "Mirror", "Fresh", "Cab"],
  correctAnswer: "Fresh",
}];



//Hopefully this will get the game to function
var game = {
  questions:trivia,
  questions3:0,
  timer:start1,
  correct:0,
  incorrect:0,
  countdown: function(){
    game.timer--;
    $('#counter1').html(game.timer);

    if (game.timer === 0){
      alert('TIMES UP!');
      game.timeUp();
    }
  },
  loadQuestion: function(){
    timer = setInterval(game.countdown, 1000);
    panel.html('<h2>' + trivia[this.questions3].question + '</h2>' );
    for (var i = 0; i<trivia[this.questions3].answers.length; i++){
      panel.append('<button class="answer-button" id="button"' + 'data-name="' + trivia[this.questions3].answers[i] + '">' + trivia[this.questions3].answers[i]+ '</button>');
    }
  },
  nextQuestion: function(){
    game.timer = start1;
    $('#counter1').html(game.timer);
    game.questions3++;
    game.loadQuestion();
  },
  timeUp: function (){
    clearInterval(timer);
    $('#counter1').html(game.timer);

    panel.html('<h2>Out of Time!</h2>');
    panel.append('<h3>The Correct Answer was: ' + trivia[this.questions3].correctAnswer);
    panel.append('<img src="' + trivia[this.questions3].image + '" />');

    if (game.questions3 === trivia.length - 1){
      setTimeout(game.results, 1000);
    } else {
      setTimeout(game.nextQuestion, 1000);
    }
  },
  results: function() {
    clearInterval(timer);

    panel.html('<h1>Results Page</h1>');
    $('#counter1').html(game.timer);
    panel.append('<h2>Correct: ' + game.correct + '</h2>');
    panel.append('<h3>Incorrect: ' + game.incorrect + '</h3>'); 
    panel.append('<h3>Unanswered: ' + (trivia.length - (game.incorrect + game.correct)) + '</h3>');
    panel.append('<br><button id="restart">Play again?</button>');
  },
  clicked: function(i) {
    clearInterval(timer);

    if ($(e.target).data("name") === trivia[this.questions3].correctAnswer){
      this.answeredCorrectly();
    } else {
      this.answeredIncorrectly();
    }
  },
  answeredIncorrectly: function() {
    game.incorrect++;
    clearInterval(timer);
    panel.html('<h2>Nope!</h2>');
    panel.append('<h3>The Correct Answer was: ' + trivia[game.questions3].correctAnswer + '</h3>');
    panel.append('<img src="' + trivia[game.questions3].image + '">');

    if (game.questions3 === trivia.length - 1){
      setTimeout(game.results, 1000);
    } else {
      setTimeout(game.nextQuestion, 1000);
    }
  },
  answeredCorrectly: function(){
    clearInterval(timer);
    game.correct++;
    panel.html('<h2>Correct!</h2>');
    panel.append('<img src="' + trivia[game.questions3].image + '">');

    if (game.questions3 === trivia.length - 1){
      setTimeout(game.results, 1000);
    } else {
      setTimeout(game.nextQuestion, 1000);
    }
  },
  reset: function(){
    this.questions3 = 0;
    this.timer = start1;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};

