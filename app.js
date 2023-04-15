const quizData = [
  {
    question: "What is the sum of two numbers?",
    a: "The sum is the result of adding two or more numbers together.",
    b: "To find the sum of two numbers, you can use the " + " operator.",
    c: "The sum of two numbers can also be found by using a function.",
    d: "The sum of two numbers is always greater than either of the individual numbers.",
    e: " In JavaScript, the sum of two numbers may produce unexpected results if one or both of the numbers are strings.",
    correct: "a",
  },
  {
    question: "What is the difference between two numbers?",
    a: "The difference is the result of subtracting one number from another.",
    b: "To find the difference between two numbers, you can use the '-' operator.",
    c: "The difference between two numbers can also be found by using a function.",
    d: " The difference between two numbers can be a positive or negative number.",
    e: " In JavaScript, the difference between two numbers may produce unexpected results if one or both of the numbers are strings.",
    correct: "a",
  },
  {
    question: "Is a given number even or odd?",

    a: "An even number is divisible by 2 without a remainder.",
    b: " An odd number is not divisible by 2 without a remainder.",
    c: "In JavaScript, you can use the modulo operator '%' to determine if a number is even or odd.",
    d: "Zero is an even number.",
    e: "In JavaScript, the 'NaN' value is considered neither even nor odd.",
    correct: "a",
  },
  {
    question: "What is the length of a given string?",

    a: "The length of a string is the number of characters it contains.",
    b: " In JavaScript, you can use the 'length' property to get the length of a string.",
    c: " Whitespace characters, such as spaces and tabs, are included in the string's length.",
    d: "The length of an empty string is zero.",
    e: "In JavaScript, the maximum length of a string is 2^53 - 1.",
    correct: "a",
  },
  {
    question: "What is the index of a specific character in a given string?",

    a: "The index of a character in a string is its position within the string.",
    b: " In JavaScript, string indexes are zero-based, meaning the first character has an index of 0.",
    c: " You can use the 'indexOf()' method to find the index of a specific character within a string.",
    d: " If the character is not found within the string, the 'indexOf()' method will return -1.",
    e: "In JavaScript, you can use the 'charAt()' method to get the character at a specific index within a string.",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const e_text = document.getElementById("e-text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  deselectedAnswers();

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  e_text.innerText = currentQuizData.e;
}

function deselectedAnswers() {
  answerEls.forEach((answerEls) => (answerEls.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
        if((score * 20) >= 60 ) {
            quiz.innerHTML = `
            <h2 class="scoreHeading">Test tamamlandı, ${score * 20} puan aldınız </h2>
            <button class="submit" onClick="location.reload()"> Ödül kazandiniz </button>       
            `;

        } else {
            quiz.innerHTML = `
            <h2 class="scoreHeading">Test tamamlandı, ${score * 20} puan aldınız </h2>
            <button class="submit" onClick="location.reload()"> Tekrar Dene </button>       
            `;
        }
    }
  }
});
