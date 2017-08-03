<?php

$frm_name  = "Адмінісратор сайту";
$recepient = "dfdhby.r@gmail.com";
$sitename  = "Левит";
$subject   = "Повідомлення з сайту \"$sitename\"";

$name2 = trim($_POST["name2"]);
$phone2 = trim($_POST["phone2"]);
$text1 = trim($_POST["text1"]);
$text2 = trim($_POST["text12"]);

$message = "
Імя: $name2 <br>
Телефон: $phone2 <br>
Адрес: $text1 <br>
Додатки: $text2 <br>
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
