<?php

$frm_name  = "Адмінісратор сайту";
$recepient = "rozborka5@ukr.net";
$sitename  = "Тонування офісних приміщень";
$subject   = "Повідомлення з сайту \"$sitename\"";

$name2 = trim($_POST["name2"]);
$email2 = trim($_POST["email2"]);
$text2 = trim($_POST["text2"]);

$message = "
Імя: $name2 <br>
Email: $email2 <br>
Повідомлення: $text2 <br>
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
