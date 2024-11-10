<?php
include("../res/x5engine.php");
$nameList = array("8t4","ats","sa8","2uz","73u","nn7","pdm","xtt","8ha","lee");
$charList = array("W","E","2","6","U","A","T","M","5","F");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
