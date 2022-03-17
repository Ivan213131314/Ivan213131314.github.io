
let question = document.getElementsByClassName('iq-test')[0];
const menuBox = document.getElementsByClassName('menu__box')[0];

const timer = document.getElementsByClassName('timer')[0];
const changeListen = document.getElementsByClassName('quiz-questions-item__answers')[0];

//const indicator=document.getElementById('indicator');

setTimeout(startTest, 1500);
function startTest() {
 
    
    window.location = "#yak4";
}


let Step;
let localResults = {};
let Render;
let testTime = '30:00';
let content = '';
let resultImage;
let resultInfo;

var iq=18;




// Рендер вопросов
const renderQuestions = (index) => {

    Step = index;
    let i = 1;
    question.innerHTML = '';
    


    const renderAnswers = () => DATA[index].answers
        .map((answer) =>
            `
                        <label for="">
                                <div class="answer-input">
                                    <div class="number_answer"><p>${i++}.</p></div>
                                    <img class="answer_image"
                                        src="${answer.value}" name="${index}" value="${answer.id}">
                                </div>
                        </label>
                        `
        )

        .join('');



    question.innerHTML += `
    <div class="iq-test-header">
        <h2> Выберете пропущенную фигуру </h2>
    </div>


    <div class="quiz-view" id="yak4">
        <div class="quiz-questions-item">
            <div class="quiz-questions-item__question">
                <img class="question_image" src="${DATA[index].question}">
            </div>
            <div class="quiz-questions-item__answers_center">
                <ul class="quiz-questions-item__answers">
                ${renderAnswers()}
                </ul>
            </div>

        </div>
        <div class="btns_restart_center">
            <button class="btn-restart">Сначала</button>
            <p id="indicator"><span>1/27</span></p>
        </div>


    </div>
             `;

    renderIndicator(index + 1);

}

/*Сохранение ответов пользователя*/
question.addEventListener('click', (event) => {
 
    if (event.target.classList.contains('answer_image')) {

        localResults[event.target.name] = event.target.attributes.value.value;
    }

});

//next или restart
question.addEventListener('click', (event) => {
    if (event.target.classList.contains('answer_image')) {
        if (DATA.length === Step + 1) {
            question.innerHTML = '';

            renderResults();
        }
        else {
            renderQuestions(Step + 1);
        }
    }
    if (event.target.classList.contains('btn-restart')) {
        var my_timer = document.getElementById("my_timer");
        var exit = confirm('Вы уверены? Данные не сохранятся');
        if (exit) {
            localResults = {};
            my_timer.innerHTML="30:00";
            question.innerHTML = '';
            renderQuestions(0);
        }


    }

});

const renderIndicator = (currentStep) => {
    document.getElementById('indicator').innerHTML = currentStep + "/" + DATA.length;
};



/*Рендер результатов*/
const renderResults = () => {
    
    let score = 0;





    DATA.forEach((item, index) => {


        for (i = 0; i < item.answers.length; i++) {
            if (item.answers[i].correct && localResults[index] === item.answers[i].id) {
                score++;
            }
        }

    });
    // lowtime(content);
    localStorage.setItem("last_results", score);
    renderInfo(score);
    lowtime(score);

};
/*Таймер*/ 
function startTimer() {
    var my_timer = document.getElementById("my_timer");

    var time = my_timer.innerHTML;
    var arr = time.split(":");
    var m = arr[0];
    var s = arr[1];
    if (s == 0) {
        if (m == 0) {
            alert("Время вышло");
            window.location = "index.html";
            return;
        }
        m--;
        if (m < 10) m = "0" + m;
        s = 59;
    }
    else s--;
    if (s < 10) s = "0" + s;
    document.getElementById("my_timer").innerHTML = m + ":" + s;
    testTime = m + ":" + s;

    setTimeout(startTimer, 1000);
}

const iq_results = () => {

}

/*Если слишком быстро прошел тест*/ 
function lowtime(score) {
    var my_timer = document.getElementById("my_timer");
    var time = my_timer.innerHTML;
    var arr = time.split(":");
    var m = arr[0];
   
    if (m >= 27) {

        question.innerHTML = `<div class="quiz-view">
        <div class="result_info">
            <p>Ваш iq равен </p>
            <div class="last_result">${Math.round(score*5.3)}</div><hr>
            
            <div class="info_about_result render_info_result">${renderInfo(score)}</div>
        </div>
    <div><hr>`;
    question.innerHTML += `<img src="${resultImage}" class="result_img">`;
        }
    else {
        window.location='finish.html';
    }
}


/*Рендер результата в зависимости от набранных баллов*/ 
function renderInfo(score) {
   
  
    let scores =score*5.3;
    var iq=Math.round(scores);
 

    
    switch (true) {
        case iq <= 65: 
           
            resultImage='./img/brains/very_stupid.png';
            resultInfo=' Ваш результат ниже 65, что является чрезвычайно низким и говорит о том, что у человека проходившего IQ тест умственная отсталость. Как правило такие люди не могут самостоятельно жить и у них возникают трудности с повседневными задачами.';
            break;
        
        case 66 <= iq && iq <= 79: 
            resultImage='./img/brains/stupid.png';
            resultInfo='Граничный низкий результат, который свидетельствует, что у человека существуют проблемы с вниманием, памятью, рассуждениями, возникают трудности с решением математических и логических задач. Несмотря на это, человек способен вести самостоятельный образ жизни, решать повседневные задачи на уровне с другими людьми.';
            break;
        
        case 80 <= iq && iq <= 89: 
            resultImage='./img/brains/normal.png';
            resultInfo='Нижняя граница среднего результата. Данный результат является нормальным для человека. Как правило легкие вопросы решаются без проблем. Также преодолеваются и вопросы средней сложности. Могут быть ошибки из-за потери концентрации или невнимательности. Более сложный вопросы как правило человек пропускает либо решает слишком долго, теряя много времени.';
            break;
        
        case 90 <= iq && iq<= 110: 
            resultImage='./img/brains/normal.png';
            resultInfo='Среднестатистический уровень IQ для человека. В этих пределах находиться интеллектуальные способности более 50% всех людей.';
            break;
        
        case 111 <= iq && iq<= 120: 
            resultImage='./img/brains/smart.png';
            resultInfo='Верхняя граница среднего результата. Данный результат хорошим результатом для человека. Как правило легкие и средние вопросы решаются без проблем. Трудности возникают со сложными вопросами.';
            break;
        
        case 121 <= iq && iq<= 130: 
            resultImage='/img/brains/very_smart.png';
            resultInfo='Высокий результат при прохождении IQ теста. Часто таких людей называют одаренными. Легкий, средние и большинство сложных вопросов решаются без каких либо проблем.';
            
            break;
        
        case  iq >= 131:
             resultImage='./img/brains/the_smartest.png';
             resultInfo='Очень высокий, который можно получить при тестировании уровня интеллекта. Таких называют гениями. Для них не возникают трудностей решить задачи IQ теста. Как правило они справляются с решением теста раньше указанного времени.Многие люди с подобным уровнем IQ достигают значительных результатов в различных сферах жизни. Таких людей около 2,2%. Самые высокие результаты могут быть у немногих. К примеру у людей, которые получают оценку выше 145 всего 0,2%.';
            break;
        
    }
    
    localStorage.setItem("picture", resultImage);
    localStorage.setItem("text_result", resultInfo);
    return resultInfo;
}



renderQuestions(0);
startTimer();