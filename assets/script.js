var timer = 0
var score = 0
var timerCount
var numCorrect = 0
var timerElement = document.querySelector(".timer-count")
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const questions = [
    {
      question: "What's in the box?",
      answers: [
        { text: "Gwyneth Paltrow's Head", correct: true },
        { text: "Brad Pitt's head", correct: false },
        { text: "*bursts into tears*", correct: false },
        { text: "A sandwich", correct: false },
      ]
    },
    {
      question: "Aren't you a little short for a Stormtrooper?",
      answers: [
        { text: "*bursts into tears*", correct: false },
        { text: "I'm perfectly average for a Tatooine farmboy", correct: false },
        { text: "Not where it counts!", correct: false },
        { text: "Huh? Oh, the uniform", correct: true }
      ]
    },
    {
      question: "Does this rug really tie the room together?",
      answers: [
        { text: "This rug is unremarkable in every way", correct: false },
        { text: "Obviously. It kicks off the plot of an entire movie", correct: true },
        { text: "*bursts into tears*", correct: false },
        { text: "Rugs are in the eye of the beholder", correct: false }
      ]
    },
    {
      question: "Can you handle the truth?",
      answers: [
        { text: "I'll handle your face", correct: false },
        { text: "God never gives you anything you can't handle", correct: false },
        { text: "You can't handle the truth!", correct: true },
        { text: "*bursts into tears*", correct: false },
      ]
    }
  ]

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
//proceeds to next random question
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  //to produce questions randomly
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  startTimer()
  setNextQuestion()
}

function startTimer() {
    timerCount = 90;
          var timerInterval = setInterval(function() {
            timerElement.textContent = timerCount;
            
            if (question === currentQuestionIndex.length) {
              score = timerCount
              console.log(score)
              clearInterval(timer);
              endquiz();
            }
            
            else if (timerCount <= 0) {
                clearInterval(timerInterval);
                timerCount = 0
                endQuiz ();
                score = 0
            }
         

            else {timerCount--; }
          
          }, 1000);
} 

function endQuiz(){
  $('#score').text(timerCount);
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

//to populate question container with question text and answer options
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

//to clear previous questions/answers before next question presented
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

//handling functionality when user selects an answer
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
    console.log(selectedButton.dataset)
    console.log(currentQuestionIndex)
    console.log(question.length)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    //startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
  function checkResult () {
    let correctChecker = correct
    console.log(correct)
    console.log(correctChecker)
      if (!correct) {
        console.log("check")
          timerCount -= 10
      }
  }
  checkResult()
}



//change incorrect answers to red and correct answers to blue
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

//to return previous questions' correct/incorrect responses to neutral color for the next question
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

//high score form

function displayHighscores() {
  //getting things out of local storage
  var values = [],
  keys = Object.keys(localStorage),
  i = keys.length;

  while(i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])))
  }

  // order from highest score to lowest
  values.sort((a, b) => (a.score > b.score) ? -1 : 1)

  console.log(values);
  for(var i = 0; i < values.length; i++) {
      // Creates list item for entries in local storage
      $('#highscoreList').append("<li class='score'>" + values[i].initials + " - " + values[i].score + "</li>")
  }
}
document.querySelector(".submitBtn").addEventListener("click", function(event) {
      event.preventDefault();
       displayHighscores() {
        // Clear highscores (otherwise you append to existing ol)
        $('#highscoreList').empty();
    
        // Prebaked algorithm for taking everything out of local storage
        var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    
        while(i--) {
            values.push(JSON.parse(localStorage.getItem(keys[i])))
        }
    
        // Sort from highest score to lowest
        values.sort((a, b) => (a.score > b.score) ? -1 : 1)
    
        console.log(values);
        for(var i = 0; i < values.length; i++) {
            // Creates <li> for each entry in localstorage
            $('#highscoreList').append("<li class='score'>" + values[i].initials + " - " + values[i].score + "</li>")
        }
    }
