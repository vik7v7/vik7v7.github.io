<?php

$frm_name  = "Олександр";
$recepient = "dezing.vik@mail.ru";
$sitename  = "Автотон";
$subject   = "Нове повідомлення з сайту \"$sitename\"";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$formname = trim($_POST["message"]);

$message = "
Імя: $name <br>
Email: $email <br>
Повідомлення: $formname 
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
