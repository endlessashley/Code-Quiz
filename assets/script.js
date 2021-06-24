var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');



function startQuiz(){
      questionContainer.style.display="block";
      startButton.style.display="none";
      isWin = false;
      timerCount = 150;
      startTimer()
    }










var questions = [
    {
      question: "He's just a little rabbit. What's he gonna do?",
      answers: {
        a: "Bite your finger",
        b: "Nibble your bum",
        c: "Eat a carrot",
        d: "None of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "Where we're going, do we need roads?",
      answers: {
        a: "No",
        b: "Yes",
        c: "Both",
        d: "Neither"
      },
      correctAnswer: "a"
    },
    {
      question: "What's in the box?",
      answers: {
        a: "Brad Pitt's head",
        b: "A Tiffany vase",
        c: "Gwyneth Paltrow's head",
        d: "A sandwich"
      },
      correctAnswer: "c"
    },
    {
      question: "Arent' you a little short for a storm trooper?",
      answers: {
        a: "Listen, my height is average for a Tatooine farmboy.",
        b: "*bursts into tears*",
        c: "Not where it counts!",
        d: "Huh? Oh, the uniform."
      },
      correctAnswer: "d"
    },
    {
      question: "Does this rug really tie the room together?",
      answers: {
        a: "Yes; so much, in fact, that it kicks off the plot of an entire movie",
        b: "I guess so, if you squint",
        c: "Rugs are in the eye of the beholder",
        d: "This rug is unremarkable in every way"
      },
      correctAnswer: "a"
    }]

  createQuiz();