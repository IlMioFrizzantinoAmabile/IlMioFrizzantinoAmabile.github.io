<?php

$date = gmdate ("d-n-Y");
$time = gmdate ("H:i:s");
$ip = $_SERVER['REMOTE_ADDR'];
$hostname = gethostbyaddr($ip);
if ($_POST["name"]=="")
	$name = "Anonimo";
else 
	$name = $_POST["name"];
$message .= "pizello============================================================pizello";
$message .= "Utente: ".$name."  (IP: ".$ip.")pizello";
$message .= "Time : ".$time." / ".$date." pizello";
$message .= "----------pizello";
$message .= "Messaggio: ".$_POST['message']."pizello";

$handle = fopen("chat.txt", "r");
if ($handle) {
    while (($line = fgets($handle)) !== false) {
        $message .= $line;
    }
    fclose($handle);
}
$file = fopen("chat.txt","w");
fwrite($file,$message);
fclose($file);

header("Location: http://www.ilmiofrizzantinoamabile.github.io/chat");
?>