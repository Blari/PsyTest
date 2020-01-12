//Массив вопросов
let questions = [
  "Мне легче что-либо сделать самому, чем объяснить другому.",
  "Мне интересно составлять компьютерные программы.",
  "Я люблю читать книги.",
  "Мне нравится живопись, скульптура, архитектура.",
  "Даже в отлаженном деле я стараюсь что-то улучшить.",
  "Я лучше понимаю, если мне объясняют на предметах или рисунках",
  "Я люблю играть в шахматы.",
  "Я легко излагаю свои мысли как в устной, так и в письменной форме.",
  "Когда я читаю книгу, я четко вижу ее героев и описываемые события.",
  "Я предпочитаю самостоятельно планировать свою работу.",
  "Мне нравится все делать своими руками.",
  "В детстве я создавал(а) свой шифр для переписки с друзьями.",
  "Я придаю большое значение сказанному слову.",
  "Знакомые мелодии вызывают у меня в голове определенные картины.",
  "Разнообразные увлечения делают жизнь человека богаче и ярче.",
  "При решении задачи мне легче идти методом проб и ошибок.",
  "Мне интересно разбираться в природе физических явлений.",
  "Мне интересна работа ведущего теле-радиопрограмм, журналиста.",
  "Мне легко представить предмет или животное, которых нет в природе.",
  "Мне больше нравится процесс деятельности, чем сам результат.",
  "Мне нравилось в детстве собирать конструктор из деталей, лего.",
  "Я предпочитаю точные науки (математику, физику).",
  "Меня восхищает точность и глубина некоторых стихов.",
  "Знакомый запах вызывает в моей памяти прошлые события.",
  "Я не хотел(а) бы подчинять свою жизнь определенной системе.",
  "Когда я слышу музыку, мне хочется танцевать.",
  "Я понимаю красоту математических формул.",
  "Мне легко говорить перед любой аудиторией.",
  "Я люблю посещать выставки, спектакли, концерты.",
  "Я сомневаюсь даже в том, что для других очевидно.	",
  "Я люблю заниматься рукоделием, что-то мастерить.",
  "Мне интересно было бы расшифровать древние тайнописи.",
  "Я легко усваиваю грамматические конструкции языка.",
  "Я согласен с Ф.М. Достоевским, что красота спасет мир.",
  "Не люблю ходить одним и тем же путем.	",
  "Истинно только то, что можно потрогать руками.",
  "Я легко запоминаю формулы, символы, условные обозначения.",
  "Друзья любят слушать, когда я им что-то рассказываю.",
  "Я легко могу представить в образах содержание рассказа или фильма.",
  "Я не могу успокоиться, пока не доведу свою работу до совершенства."
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
  nQue > 0
    ? document.querySelector(".description").classList.add("d-none")
    : null;
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
