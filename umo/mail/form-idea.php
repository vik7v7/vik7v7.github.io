<?php

$frm_name  = "Ідея";
$recepient = "dezing.vik@mail.ru";
$sitename  = "УМО";
$subject   = "Запропонувати ідею \"$sitename\"";

$namee = trim($_POST["namee"]);
$last = trim($_POST["last"]);
$age = trim($_POST["age"]);
$tel = trim($_POST["tel"]);
$soc = trim($_POST["soc"]);
$messagetext = trim($_POST["message"]);

$message = "
Имя: $namee <br>
Призвіще: $last <br>
Телефон: $tel <br>
Соц. мережі: $soc <br>
Ідея: $messagetext <br>
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
