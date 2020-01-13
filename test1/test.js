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

let resultBtn = document.querySelector(".result");
resultBtn.addEventListener("click", resultBuild);

//Прослушка на нажатию кнопки "Да" и "Нет"
let yesBtn = document
  .querySelector(".yes")
  .addEventListener("click", nexeQuest);
let noBtn = document.querySelector(".no").addEventListener("click", nexeQuest);

//Функция для вставки вопросов
function addQuestion() {
  nQue < questions.length
    ? (h5.innerHTML = questions[nQue])
    : (h5.innerHTML = `Спасибо за Ваши ответы. <br>Теперь Вы можете перейти к результатам.`);

  nQue > 0
    ? document.querySelector(".description").classList.add("d-none")
    : null;
}

//Прогресс бар
function prBar() {
  const pb = document.querySelector(".progress-bar");
  let pbValue = parseInt(pb.style.width);

  pb.querySelector("p").innerHTML = `${nQue} вопрос из 40 (${parseInt(
    (nQue / 40) * 100
  )}%)`;

  pbValue += 3;
  pb.setAttribute("style", `width: ${parseInt((nQue / 40) * 100)}%`);
  pb.setAttribute("aria-valuenow", parseInt((nQue / 40) * 100));
}
//Следующий вопрос по нажатии кнопки
function nexeQuest(e) {
  if (nQue === questions.length - 1) {
    document.querySelector(".yes").disabled = true;
    document.querySelector(".no").disabled = true;
    document.querySelector(".result").style.display = "block";
  }

  nQue++;
  if (e.target.classList.contains("yes")) {
    answr += "1";
    addQuestion();
    prBar();
    h5.classList.add("fadeIn");
    h5.classList.add("fadeIn");
    setTimeout(() => {
      h5.classList.remove("fadeIn");
    }, 200);
  } else {
    answr += "0";
    addQuestion();
    prBar();
    h5.classList.add("fadeIn");
    setTimeout(() => {
      h5.classList.remove("fadeIn");
    }, 200);
  }
}

//Считаем
function resulFnc() {
  let data = [];
  let PD =
    +answr[0] +
    +answr[5] +
    +answr[10] +
    +answr[15] +
    +answr[20] +
    +answr[25] +
    +answr[30] +
    +answr[35];
  let AC =
    +answr[1] +
    +answr[6] +
    +answr[11] +
    +answr[16] +
    +answr[21] +
    +answr[26] +
    +answr[31] +
    +answr[36];
  let SL =
    +answr[2] +
    +answr[7] +
    +answr[12] +
    +answr[17] +
    +answr[22] +
    +answr[27] +
    +answr[32] +
    +answr[37];
  let NO =
    +answr[3] +
    +answr[8] +
    +answr[13] +
    +answr[18] +
    +answr[23] +
    +answr[28] +
    +answr[33] +
    +answr[38];
  let K =
    +answr[4] +
    +answr[9] +
    +answr[14] +
    +answr[19] +
    +answr[24] +
    +answr[29] +
    +answr[34] +
    +answr[39];
  data.push(PD, AC, SL, NO, K);
  return data;
}

//Рисуем граффик
function chartBuild() {
  var options = {
    series: [
      {
        data: resulFnc()
      }
    ],
    chart: {
      type: "bar",
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: true,
        endingShape: "rounded"
      }
    },
    tooltip: {
      followCursor: true,
      y: {
        title: {
          formatter: seriesName => `Значение`
        },
        formatter: function(val) {
          if (val >= 0 && val <= 2) {
            return `${val} - Низкий уровень.`;
          } else if (val >= 3 && val <= 5) {
            return `${val} - Средний уровень.`;
          } else if (val >= 6 && val <= 8) {
            return `${val} - Высокий уровень.`;
          }
        }
      }
    },
    dataLabels: {
      enabled: true
    },
    xaxis: {
      categories: [
        "Предметно-действенное мышление",
        "Абстрактно-символическое мышление",
        "Словесно-логическое мышление",
        "Наглядно-образное мышление",
        "Креативность"
      ]
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
}

function resultBuild() {
  document.querySelector(".progressbar").disabled = true;
  document.querySelector(".question").disabled = true;
  document.querySelector(".mainButtons").disabled = true;
  let description = document.querySelector(".descriptionResult");
  let ul = document.createElement("ul");
  let li1 = document.createElement("li");
  li1.innerHTML =
    "Предметно – действенное мышление свойственно людям дела. Про них говорят: «Золотые руки». Они лучше усваивают информацию через движение. Обычно они обладают хорошей координацией движений. Их руками создан весь окружающий нас предметный мир. Они водят машины, стоят у станков, собирают компьютеры. Без них невозможно реализовать самую блестящую идею. Эти мышлением обладают и многие выдающиеся танцоры, спортсмены.";
  ul.appendChild(li1);
  let li2 = document.createElement("li");
  li2.innerHTML =
    "Абстрактно – символическим мышлением обладают многие люди науки - физики – теоретики, математики, экономисты, программисты, аналитики. Люди с таким типом мышления могут усваивать информацию с помощью математических кодов, формул, и операций, которые нельзя ни потрогать, ни представить. Благодаря особенностям такого мышления на основе гипотез сделаны многие открытия во всех областях науки.";
  ul.appendChild(li2);
  let li3 = document.createElement("li");
  li3.innerHTML =
    "Словесно – логическое мышление отличает людей с ярко выраженным вербальным интеллектом. Благодаря развитому словесно – логическому мышлению ученый, преподаватель, переводчик, писатель, филолог, журналист могут сформулировать свои мысли и донести их до людей. Это умение необходимо руководителям, политикам и общественным деятелям.";
  ul.appendChild(li3);
  let li4 = document.createElement("li");
  li4.innerHTML =
    "Наглядно – образным мышлением обладают люди с художественным складом ума, которые могут представить и то, что было и то, что будет и то, чего никогда не было и не будет – художники, поэты, писатели, режиссеры. Архитектор, конструктор, дизайнер, художник, режиссер должны обладать развитым наглядно – образным мышлением.";
  ul.appendChild(li4);
  let li5 = document.createElement("li");
  li5.innerHTML =
    "Креативность – это способность человека мыслить творчески, находить нестандартные решения задачи. Креативностью может обладать человек с любым типом мышления. Это редкое и ничем незаменимое качество, отличающее талантливых и успешных людей в любой сфере деятельности.";
  ul.appendChild(li5);
  let h3 = document.createElement(`h3`);
  h3.innerHTML = "Результаты опросника";
  description.appendChild(h3);
  chartBuild();
  description.appendChild(ul);
}
addQuestion();
