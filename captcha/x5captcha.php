<?php
include("../res/x5engine.php");
$nameList = array("j35","zkp","8h2","up3","p8p","ut8","65l","rew","7se","6uk");
$charList = array("D","J","5","7","X","F","K","D","P","L");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
