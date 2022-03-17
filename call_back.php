
 <?php 
 $textarea = $_POST['textarea'];
 $to  = "iq_tester@bk.ru"; 
 $subject = "Проблема / предложение"; 
mail($to, $subject, $textarea);
header('Location:https://iq-tester.mcdir.me/about.html');
