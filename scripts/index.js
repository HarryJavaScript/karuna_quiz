const quizData = [
  {
    question: "What is the recommended amount of one trade, according to the basic rule of money management?",
      a: "3%",
      b: "5%",
      c: "10%",
      correctAnswer: "b"
  },
  {
    question: "What is the recommended amount of trades, according to the money management rule??",
      a: "3% of the deposit",
      b: "5% of the deposit",
      c: "10% of the deposit",
      correctAnswer: "a"
  },
  {
    question: "What is asset profitability?",
      a: "The spread of its highest and lowest prices during a specific period.",
      b: "The spread of its open and close prices during a specific period.",
      c: "The share of a trade amount you receive additionally in the case of the correct forecast.",
    correctAnswer: "c"
  },
  {
    question: "You’ve concluded a $100 trade. The asset profitability is 80%. How many funds will you receive in the case of the correct price forecast?",
      a: "$80",
      b: "$180",
      c: "$200",
    correctAnswer: "b"
  },
  {
    question: "Your deposit amount is $800. How many funds can you safely invest at the same time?",
      a: "$100",
      b: "$500",
      c: "$80",
    correctAnswer: "c"
  },
];



// Constants
const likeButton = document.querySelector('.like-button');

const quizContainer = document.querySelector('.card-container')   // const quiz= document.getElementById('quiz')
const questionAnswers = document.querySelectorAll('.question-answer')   //const answerEls = document.querySelectorAll('.answer')
const questionText = document.querySelector('.question-text')   // const questionEl = document.getElementById('question')
const answer_A = document.querySelector('#a')  //const a_text = document.getElementById('a_text')
const answer_B = document.querySelector('#b')  //const a_text = document.getElementById('b_text')
const answer_C = document.querySelector('#c')  //const a_text = document.getElementById('c_text')
const nextQuestionButton = document.querySelector('#next-question__button')   // const submitBtn = document.getElementById('submit')
const quizPopup = document.querySelector('.question-card')
const quizStartButton = document.querySelector('#quiz-start__button')
const resultPopup = document.querySelector('.result-card')
const answerList = document.querySelector('.answer-list')

let currentStep = 0 //index
let score = 0
const indicator = document.querySelector('.question-number')

// функция отображает текущий номер вопроса(карточки) и количество вопросов в тесте
const cardNumberIndicator = (currentStep) => {
  indicator.innerHTML = `${currentStep}/${quizData.length}`
}

// итератор элементов массива
const iterator = array => {
  let index = 0;

  return () => {
    const value = array[index];

    if (index < array.length) {
      index++;
    }

    return value;
  };
}

const nextCard = iterator(quizData);


// Event Listeners
quizStartButton.addEventListener('click', () => initialQuiz())


// пульсирующая иконка Like
const likeHandler = () => {
  likeButton.classList.toggle('like-button_active')
}

likeButton.addEventListener('click', () => likeHandler())


// рендер карточки Квиза
function initialQuiz() {
  quizPopup.classList.add('question-card_visible')
  cardNumberIndicator(currentStep +1)
  const currentQuizData = quizData[currentStep]
  questionText.innerText = currentQuizData.question
  answer_A.innerText = currentQuizData.a
  answer_B.innerText = currentQuizData.b
  answer_C.innerText = currentQuizData.c

  console.log('У тебя получится!')
  console.log('Произошёл рендер Квиза')
}

function showResult() {
  // исполняется, если длина массива меньше, либо равна, текущему индексу вопроса
}

function newQuestionHandler() {
  // функция которая по клику на кнопку NEXT меняет содержимое ХТМЛ в карточке
  
}

// function getSelected() {
//   let answer
//   questionAnswers.forEach(answerElement => {
//       if(answerElement.checked) {
//           answer = answerElement.id
//       }
//   })
//   return answer
// }

// var container = document.getElementById('container');

// container.onclick = function (event) {
//   if (event.target.tagName === 'BUTTON') {
//     alert('Вы кликнули по кнопке, с id ' + event.target.id);
//   }
// }

let selectedAnswer


// на клик показывает верный ответ
answerList.addEventListener('click', (evt) => {
  selectedAnswer = evt.target
  // console.log(quizData[currentStep].correctAnswer)  // показывает букву верного ответа  из массива
  // console.log(evt.target);
  showCorrectAnswer(selectedAnswer)
  // console.log(selectedAnswer.id) // показывает букву верного ответа  из массива
})

//функция которая добавляет нужные стилевые рамки и проверяет правильность ответа
function showCorrectAnswer() {  
  if (selectedAnswer.id === quizData[currentStep].correctAnswer) {
    selectedAnswer.classList.add('right-border')
  } else if (selectedAnswer.id !== quizData[currentStep].correctAnswer) {
    selectedAnswer.classList.add('wrong-border')
  }
}

nextQuestionButton.addEventListener('click', () => {
//   const answer = getSelected()
// if(answer) {
//   if(answer === quizData[currentStep].correct) {
//       score++
//    }

currentStep ++

if(currentStep <= quizData.length) {

// nextCard()
initialQuiz()
// console.log(nextCard())

console.log(currentStep)
console.log(quizData.length)

     } else {
//       quizContainer.innerHTML = `
//          <h2>You answered ${score}/${quizData.length} questions correctly</h2>

//          <button onclick="location.reload()">Reload</button>
//          `
        console.log('Result Card')
     }
  }
// }
)



