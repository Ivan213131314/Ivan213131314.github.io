let finish = document.querySelector('.finish');
let btn_finish = document.querySelector('.btn_finish');
let before = document.querySelector('.before');
let payment=document.querySelector('.payment');
let sectionPrice=document.querySelector('.section_price');
let paymentBtn=document.querySelector('.payment_btn');
let scrolling=document.querySelector('#yak1');



function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {

  const $result = $("#result");
  const email = $(".input_email").val();
  if (email !== '') {
    
    $result.text("");

    if (validateEmail(email)) {

      localStorage.setItem('iq_email', email);
      payment.style.display = "block";
      sectionPrice.style.display="block";
      before.style.display = "none";
      window.scroll(0,0);

    } else {

      $result.text(email + " не верный email");
      $result.css("color", "red");

    }
    return false;
  } 
  else {
      payment.style.display = "block";
      sectionPrice.style.display="block";
      before.style.display = "none";
      window.scroll(0,0);

  }

}


btn_finish.onclick = () => {
  validate(); 

}
paymentBtn.onclick=()=>{
  
  $.ajax({
    url: '/payment.php',         /* Куда пойдет запрос */
    method: 'post',             /* Метод передачи (post или get) */
    dataType: 'html',          /* Тип данных в ответе (xml, json, script, html). */
    success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
                 console.log(data);  /* В переменной data содержится ответ от index.php. */
    }
  });

}


