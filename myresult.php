
<?php

$dir = dirname(__FILE__).'/payments/';
$source = file_get_contents('php://input');
$json = false;
//file_put_contents($dir.'/'.microtime(true), json_encode($_REQUEST));
if($source) {
	$json = json_decode($source, true);
}
if(	$json 
	&& isset($json["event"])
	&& isset($json["object"])
	&& isset($json["object"]["id"])
	&& isset($json["object"]["status"])
	&& $json["object"]["status"] == 'succeeded'
	&& isset($json["object"]["id"])
	&& isset($json["object"]["status"])
	&& isset($json["object"]["metadata"])
	&& isset($json["object"]["metadata"]["uid"])
	) {
	file_put_contents($dir.$json["object"]["metadata"]["uid"], $source);
	exit;
}
if(isset($_GET['uid']) && file_exists($dir.$_GET['uid'])) {
	// платеж прошел
	$str = file_get_contents($dir.$_GET['uid']);
	$json = json_decode($str, true);

	// Сумма платежа, например
	// print $json["object"]["amount"]["value"];

	// ID платежа, например
	// print $json["object"]["id"];
?>
<script>
localStorage.setItem('is_payed','rswbvjio435%&^#@$%fjolsfej3s');
localStorage.setItem('is_sent','yes');
</script>
<?php
} else { 

}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="yandex-verification" content="eebd0bed8f80a344" />
    <title>Тест IQ</title>
    <link rel="stylesheet" href="./dist/css/style.min.css">
    <link rel="stylesheet" href="./dist/css/adaptiv.min.css">
    <link rel="stylesheet" href="./dist/css/finish.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300;400;500;600;700&family=Roboto:wght@100;700&display=swap"
        rel="stylesheet">




    <link type="image/x-icon" href="./favicon.ico" rel="shortcut icon">
    <link type="Image/x-icon" href="./favicon.ico" rel="icon">

    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function (m, e, t, r, i, k, a) {
            m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
            m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
        })
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(85818624, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true
        });
    </script>
    <noscript>
        <div><img src="https://mc.yandex.ru/watch/85818624" style="position:absolute; left:-9999px;" alt="" /></div>
    </noscript>
    <!-- /Yandex.Metrika counter -->


  

</head>

<body>




    <header>
        <div class="header_container">
            <div class="logo">
                <a href="index.html">
                    <img src="./img/logo/brain_logo3.png" alt="">

                </a>

            </div>
            <div class="tested">
                <div class="tested_text">Всего прошло:</div>
                <div class="tested_count"></div>
            </div>

            <nav class="header_nav">
                <ul>
                    <li><a href="index.html">Главная</a></li>
                    <li><a href="#iq">Что такое IQ Тест</a></li>

                    <li><a href="about.html">О нас</a></li>
                    <li><a href="myresult.html">Мой результат</a></li>
                </ul>
            </nav>
            <!-- Мобилка -->
            <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                    <span></span>
                </label>
                <ul class="menu__box">
                    <li><a class="menu__item" href="index.html">Главная</a></li>
                    <li><a class="menu__item" href="index.html#iq">Что такое IQ Тест</a></li>

                    <li><a class="menu__item" href="about.html">О нас</a></li>
                    <li><a class="menu__item" href="myresult.html">Мой результат</a></li>
                    <li><a class="menu__item btn_start2" href="start_test.html">Начать текст</a></li>
                </ul>
            </div>

        </div>

    </header>


    <div class="main_container">

        <div class="myresult"><br>Вы еще не проходили тест, пройдите чтобы узнать свой результат

            <div>
                <button class="btn_start_funish" onclick="window.location.href='start_test.html'">начать iq тестирование</button>
            </div>

        </div>

        <section class="name" id="results">
            <p>Результаты тестирования</p>
        </section>

        <section class="info">
            <p class="info_iq">IQ от 131 и выше</p>
            <p>Наиболее высокий уровень интеллекта, присущий гениям. Такие люди легко справляются с вопросами теста и завершают его до истечения отведенного времени. Обладателей высокого IQ немного, не более 2,2% от всех респондентов. </p>
            <p>Эти люди успешны в любых сферах жизни и способны добиться высоких результатов каждом деле, за которое берутся.</p>
            <p class="info_iq">IQ от 121 до 130</p>
            <p>Этот высокий результат свойственен одаренных людям. Они легко справляются с вопросами легкого и среднего уровня, большинством сложных заданий. </p>

            <p class="info_iq">IQ от 111 до 120</p>
            <p>Пограничное значение среднего уровня интеллекта. Довольно хороший показатель, т.к. указывает на быстрое решение задач легкого и среднего уровня, потенциал к ответам на сложные вопросы.  </p>

            <p class="info_iq">IQ 90–110</p>
            <p>Средний и самый популярный показатель интеллектуальных способностей, которому соответствуют больше половины испытуемых.</p>

            <p class="info_iq">IQ IQ 80–89</p>
            <p>Нижняя граница среднего результата. Данный результат является нормальным для человека. Как правило легкие
                вопросы решаются без проблем. Также преодолеваются и вопросы средней сложности. Могут быть ошибки из-за
                потери концентрации или невнимательности. Более сложный вопросы как правило человек пропускает либо
                решает слишком долго, теряя много времени. </p>

            <p class="info_iq">IQ IQ 66–79</p>
            <p>Верхняя граница низкого уровня умственных способностей. Это показатель характерен для людей, страдающих рассеянностью, низкой концентрацией внимания. У таких испытуемых есть проблемы с логическими суждениями, что влияет на успешное решение задач. Однако они вполне способны к самообслуживанию и могут жить полноценной жизнью в социуме.</p>

            <p class="info_iq">IQ 65 и ниже</p>
            <p>Такие данные свидетельствуют об умственной отсталости тестируемого. Чаще всего таким людям требуется посторонняя помощь в жизни, они не могут обслужить себя самостоятельно даже в бытовом плане.</p>

        </section>

        <section class="name">
            <p>Результаты IQ (айкью) теста</p>
        </section>

        <section class="info">
            <div class="iq_info">IQ тест многогранен и имеет несколько задач. Первая – оценить общий уровень развития
                человека, его когнитивные способности (умение анализировать полученную информацию и применять ее на
                практике). Вторая – выявить навыки, где испытуемый наиболее успешен, и области, которые имеют «пробелы»
                в знаниях и умениях. Чаще всего айкью тестирование изучает:
                <ul>
                    <li>способности к математике </li>
                    <li>Восприятие пространства</li>
                    <li>Способности к изучению языков</li>
                    <li>Памяти</li>
                    <li>Мкорость обработки данных</li>
                    <li>Уровень логики </li>
                </ul>

            </div>
        </section>






        <section class="name">
            <p>Цель теста на Интеллект</p>
        </section>

        <section class="info">
            <div class="iq_info">Результаты iq теста – применяют в разных сферах. Чаще всего для:
                <ul>
                    <li>Оценки уровня общего образования</li>
                    <li>Диагностики наличия умственной отсталости и ее степени</li>
                    <li>Способности к обработке информации</li>
                    <li>Оценивания соискателя при устройстве на работу</li>
                    <li>Оценки логики, памяти и внимания тестируемого</li>
                </ul>
            </div>
        </section>






    </div>

    <footer>
        <div class="header_container">
            <div class="logo">
                <a href="index.html">
                    <img src="./img/logo/brain_logo3.png" alt="">
                </a>
            </div>
            <nav class="footer_nav">
                <ul>
                    <li><a href="index.html">Главная</a></li>
                    <li><a href="terms.html">
                        <pre>Условия соглашения</pre>
                    </a></li>
                    <li><a href="#results">Результаты</a></li>
                    <li><a href="about.html">О нас</a></li>
                </ul>
            </nav>
            <nav class="footer_icons">
                <div class="icons">
                    <img src="./img/icons/visa.png" alt="Visa">
                    <img src="./img/icons/sumsung.png" alt="Samsung Pay">
                    <img src="./img/icons/mastercard.png" alt="Master Card">
                    <img src="./img/icons/apple_pay.png" alt="Apple Pay">
                </div>
            </nav>


        </div>

    </footer>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="./dist/js/myresults-min.js"></script>
    <script src="./dist/js/burger-min.js"></script>
    <script src="./dist/js/testedCount-min.js"></script>

</body>

</html>