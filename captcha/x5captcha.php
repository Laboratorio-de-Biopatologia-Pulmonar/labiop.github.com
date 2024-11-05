<?php
include("../res/x5engine.php");
$nameList = array("y8r","avy","5ll","kwk","kcj","wm7","wg4","epn","hre","rjr");
$charList = array("K","Z","W","F","E","L","N","G","J","3");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
