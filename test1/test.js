//Массив вопросов
let questions = [
  "Мне легче что-либо сделать самому, чем объяснить другому.",
  "Мне интересно составлять компьютерные программы.",
  "Я люблю читать книги.",
  "Мне нравится живопись, скульптура, архитектура.",
  "Даже в отлаженном деле я стараюсь что-то улучшить."
];

let answr = "";
//Номер текущего вопроса
let nQue = 0;

//место в ДОМ-е, куда пихаем вопросы
const h5 = document.querySelector(".questions");

//Прослушка на нажатию кнопки "Да" и "Нет"
const yesBtn = document
  .querySelector(".yes")
  .addEventListener("click", nexeQuest);
const noBtn = document
  .querySelector(".no")
  .addEventListener("click", nexeQuest);

//Функция для вставки вопросов
function addQuestion() {
  h5.innerHTML = questions[nQue];
}

function nexeQuest(e) {
  nQue++;
  if (e.target.classList.contains("yes")) {
    answr += "1";
    addQuestion();
    h5.classList.add("fadeIn");
    h5.classList.add("fadeIn");
    setTimeout(() => {
      h5.classList.remove("fadeIn");
    }, 200);
  } else {
    answr += "0";
    addQuestion();
    h5.classList.add("fadeIn");
    setTimeout(() => {
      h5.classList.remove("fadeIn");
    }, 200);
  }
}

addQuestion();
