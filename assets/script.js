const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
let shuffledQuestions, currentQuestionIndex
const questions = [
    {
    question: "He's just a little rabbit. What's he gonna do?",
      answers: 
      [
        {text: "Bite your finger", correct: false},
        {text: "Nibble your bum", correct: true},
        {text: "Eat a carrot", correct: false},
        {text: "None of the above", correct: false},
      ]
    },
   
    {
      question: "Where we're going, do we need roads?",
      answers: 
        [
          {text: "No", correct: true},
          {text: "Yes", correct: false},
          {text: "Both", correct: false},
          {text: "Neither", correct: false},
        ]
    },
      
    {
      question: "What's in the box?",
      answers: [
          {text: "Brad Pitt's head", correct: false},
          {text: "A Tiffany vase", correct: false},
          {text: "Gwyneth Paltrow's head", correct: true},
          {text: "A sandwich", correct: false},
        ]
      },

    {
      question: "Arent' you a little short for a storm trooper?",
      answers: [
          {text: "Listen, my height is average for a Tatooine farmboy.", correct: false},
          {text: "*bursts into tears*", correct: false},
          {text: "Not where it counts!", correct: false},
          {text: "Huh? Oh, the uniform.", correct: true},
      ]
    },

    {
      question: "Does this rug really tie the room together?",
      answers: [
          {text: "Yes; so much, in fact, that it kicks off the plot of an entire movie", correct: true},
          {text: "I guess so, if you squint", correct: false},
          {text: "Rugs are in the eye of the beholder", correct: false},
          {text: "This rug is unremarkable in every way", correct: false},
      ] 
    }
]


startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()

})

function startGame() {
    console.log("Started")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide");
    setNextQuestion()
}

function setNextQuestion (){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(
            answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove("hide")
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove("hide")
    }
    else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

}


