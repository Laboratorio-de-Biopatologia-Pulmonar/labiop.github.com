<?php
include("../res/x5engine.php");
$nameList = array("2nw","5rf","ym4","k7n","hgw","xjp","gkm","trk","mav","eyk");
$charList = array("L","A","A","X","3","6","C","P","K","V");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
