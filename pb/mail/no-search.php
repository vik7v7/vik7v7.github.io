<?php

$frm_name  = "Адмінісратор сайту";
$recepient = "dfdhby.r@gmail.com";
$sitename  = "dommne.com";
$subject   = "Сообщение с сайта\"$sitename\"";

$nameclient = trim($_POST["nameclient"]);
$phone = trim($_POST["phone"]);

$message = "
Имя: $nameclient <br>
Телефон: $phone <br>
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
