function IfTested(picture, lastResult, pay) {
    if (picture && lastResult && pay =='rswbvjio435%&^#@$%fjolsfej3s') {
        let finish = document.querySelector('.myresult');
        let lastResult = Math.round(localStorage.getItem('last_results') * 5.3);
        afterPayment();

        finish.innerHTML = `<div class="quiz-view">
                        <div class="result_info">
                            <p>Ваш iq равен </p>
                            <div class="last_result">${lastResult}</div><hr>
                            
                            <div class="info_about_result">${RenderResult(Math.round(localStorage.getItem('last_results') * 5.3))}</div>
                        </div>
                    <div><hr>`;

        finish.innerHTML += `<img src="${localStorage.getItem('picture')}" class="result_img">`;

        function RenderResult(iq) {
            let resultInfo;
            switch (true) {
                case iq <= 65:

                    resultInfo = `<p class="render_result_info"> Ваш результат ниже 65, что является чрезвычайно низким и говорит о том, что у человека проходившего IQ тест умственная отсталость. Как правило такие люди не могут самостоятельно жить и у них возникают трудности с повседневными задачами.</p>`;
                    break;

                case 66 <= iq && iq <= 79:
                    resultInfo = `<p class="render_result_info">Граничный низкий результат, который свидетельствует, что у человека существуют проблемы с вниманием, памятью, рассуждениями, возникают трудности с решением математических и логических задач. Несмотря на это, человек способен вести самостоятельный образ жизни, решать повседневные задачи на уровне с другими людьми.</p>`;

                    break;

                case 80 <= iq && iq <= 89:
                    resultInfo = `<p class="render_result_info">Нижняя граница среднего результата. Данный результат является нормальным для человека. Как правило легкие вопросы решаются без проблем. Также преодолеваются и вопросы средней сложности. Могут быть ошибки из-за потери концентрации или невнимательности. Более сложный вопросы как правило человек пропускает либо решает слишком долго, теряя много времени.</p>`;

                    break;

                case 90 <= iq && iq <= 110:
                    resultInfo = `<p class="render_result_info">Среднестатистический уровень IQ для человека. В этих пределах находиться интеллектуальные способности более 50% всех людей.`;

                    break;

                case 111 <= iq && iq <= 120:
                    resultInfo = `<p class="render_result_info">Верхняя граница среднего результата. Данный результат хорошим результатом для человека. Как правило легкие и средние вопросы решаются без проблем. Трудности возникают со сложными вопросами.</p>`;

                    break;

                case 121 <= iq && iq <= 130:
                    resultInfo = `<p class="render_result_info">Высокий результат при прохождении IQ теста. Часто таких людей называют одаренными. Легкий, средние и большинство сложных вопросов решаются без каких либо проблем.</p>`;
                    break;

                case iq >= 131:
                    resultInfo = `<p class="render_result_info">Очень высокий, который можно получить при тестировании уровня интеллекта. Таких называют гениями. Для них не возникают трудностей решить задачи IQ теста. Как правило они справляются с решением теста раньше указанного времени.
            Многие люди с подобным уровнем IQ достигают значительных результатов в различных сферах жизни. Таких людей около 2,2%. Самые высокие результаты могут быть у немногих. К примеру у людей, которые получают оценку выше 145 всего 0,2%.</p>`;

                    break;

            }
            return resultInfo;
        }

    }
}
IfTested(localStorage.getItem('picture'), localStorage.getItem('last_results'),localStorage.getItem('is_payed'));


function afterPayment(){
    let last_results=Math.round(Number(localStorage.getItem("last_results"))*5.3);
    
    if(localStorage.getItem('is_sent')){

        localStorage.removeItem('is_sent');

    $.ajax({
        url: '/mail.php',         /* Куда пойдет запрос */
        method: 'post',             /* Метод передачи (post или get) */
        dataType: 'html',          /* Тип данных в ответе (xml, json, script, html). */
        data: 
        {
            
            email:localStorage.getItem("iq_email"),
            picture:localStorage.getItem("picture"),
            last_results:last_results,
            text_result:localStorage.getItem("text_result"),
        },     /* Параметры передаваемые в запросе. */
        success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
                     console.log(data);  /* В переменной data содержится ответ от index.php. */
        }
      });
    }
    
      
  }
 