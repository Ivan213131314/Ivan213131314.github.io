let question=document.getElementsByClassName("iq-test")[0];const menuBox=document.getElementsByClassName("menu__box")[0],timer=document.getElementsByClassName("timer")[0],changeListen=document.getElementsByClassName("quiz-questions-item__answers")[0];function startTest(){window.location="#yak4"}let Step;setTimeout(startTest,1500);let Render,resultImage,resultInfo,localResults={},testTime="30:00",content="";var iq=18;const renderQuestions=e=>{Step=e;let t=1;question.innerHTML="";question.innerHTML+=`\n    <div class="iq-test-header">\n        <h2> Выберете пропущенную фигуру </h2>\n    </div>\n\n\n    <div class="quiz-view" id="yak4">\n        <div class="quiz-questions-item">\n            <div class="quiz-questions-item__question">\n                <img class="question_image" src="${DATA[e].question}">\n            </div>\n            <div class="quiz-questions-item__answers_center">\n                <ul class="quiz-questions-item__answers">\n                ${(()=>DATA[e].answers.map(n=>`\n                        <label for="">\n                                <div class="answer-input">\n                                    <div class="number_answer"><p>${t++}.</p></div>\n                                    <img class="answer_image"\n                                        src="${n.value}" name="${e}" value="${n.id}">\n                                </div>\n                        </label>\n                        `).join(""))()}\n                </ul>\n            </div>\n\n        </div>\n        <div class="btns_restart_center">\n            <button class="btn-restart">Сначала</button>\n            <p id="indicator"><span>1/27</span></p>\n        </div>\n\n\n    </div>\n             `,renderIndicator(e+1)};question.addEventListener("click",e=>{e.target.classList.contains("answer_image")&&(localResults[e.target.name]=e.target.attributes.value.value)}),question.addEventListener("click",e=>{if(e.target.classList.contains("answer_image")&&(DATA.length===Step+1?(question.innerHTML="",renderResults()):renderQuestions(Step+1)),e.target.classList.contains("btn-restart")){var t=document.getElementById("my_timer");confirm("Вы уверены? Данные не сохранятся")&&(localResults={},t.innerHTML="30:00",question.innerHTML="",renderQuestions(0))}});const renderIndicator=e=>{document.getElementById("indicator").innerHTML=e+"/"+DATA.length},renderResults=()=>{let e=0;DATA.forEach((t,n)=>{for(i=0;i<t.answers.length;i++)t.answers[i].correct&&localResults[n]===t.answers[i].id&&e++}),localStorage.setItem("last_results",e),renderInfo(e),lowtime(e)};function startTimer(){var e=document.getElementById("my_timer").innerHTML.split(":"),t=e[0],n=e[1];if(0==n){if(0==t)return alert("Время вышло"),void(window.location="index.html");--t<10&&(t="0"+t),n=59}else n--;n<10&&(n="0"+n),document.getElementById("my_timer").innerHTML=t+":"+n,testTime=t+":"+n,setTimeout(startTimer,1e3)}const iq_results=()=>{};function lowtime(e){document.getElementById("my_timer").innerHTML.split(":")[0]>=27?(question.innerHTML=`<div class="quiz-view">\n        <div class="result_info">\n            <p>Ваш iq равен </p>\n            <div class="last_result">${Math.round(5.3*e)}</div><hr>\n            \n            <div class="info_about_result render_info_result">${renderInfo(e)}</div>\n        </div>\n    <div><hr>`,question.innerHTML+=`<img src="${resultImage}" class="result_img">`):window.location="finish.html"}function renderInfo(e){let t=5.3*e;var n=Math.round(t);switch(!0){case n<=65:resultImage="./img/brains/very_stupid.png",resultInfo=" Ваш результат ниже 65, что является чрезвычайно низким и говорит о том, что у человека проходившего IQ тест умственная отсталость. Как правило такие люди не могут самостоятельно жить и у них возникают трудности с повседневными задачами.";break;case 66<=n&&n<=79:resultImage="./img/brains/stupid.png",resultInfo="Граничный низкий результат, который свидетельствует, что у человека существуют проблемы с вниманием, памятью, рассуждениями, возникают трудности с решением математических и логических задач. Несмотря на это, человек способен вести самостоятельный образ жизни, решать повседневные задачи на уровне с другими людьми.";break;case 80<=n&&n<=89:resultImage="./img/brains/normal.png",resultInfo="Нижняя граница среднего результата. Данный результат является нормальным для человека. Как правило легкие вопросы решаются без проблем. Также преодолеваются и вопросы средней сложности. Могут быть ошибки из-за потери концентрации или невнимательности. Более сложный вопросы как правило человек пропускает либо решает слишком долго, теряя много времени.";break;case 90<=n&&n<=110:resultImage="./img/brains/normal.png",resultInfo="Среднестатистический уровень IQ для человека. В этих пределах находиться интеллектуальные способности более 50% всех людей.";break;case 111<=n&&n<=120:resultImage="./img/brains/smart.png",resultInfo="Верхняя граница среднего результата. Данный результат хорошим результатом для человека. Как правило легкие и средние вопросы решаются без проблем. Трудности возникают со сложными вопросами.";break;case 121<=n&&n<=130:resultImage="/img/brains/very_smart.png",resultInfo="Высокий результат при прохождении IQ теста. Часто таких людей называют одаренными. Легкий, средние и большинство сложных вопросов решаются без каких либо проблем.";break;case n>=131:resultImage="./img/brains/the_smartest.png",resultInfo="Очень высокий, который можно получить при тестировании уровня интеллекта. Таких называют гениями. Для них не возникают трудностей решить задачи IQ теста. Как правило они справляются с решением теста раньше указанного времени.Многие люди с подобным уровнем IQ достигают значительных результатов в различных сферах жизни. Таких людей около 2,2%. Самые высокие результаты могут быть у немногих. К примеру у людей, которые получают оценку выше 145 всего 0,2%."}return localStorage.setItem("picture",resultImage),localStorage.setItem("text_result",resultInfo),resultInfo}renderQuestions(0),startTimer();