<?php
session_start();
header("Content-Type: text/xml; charset=UTF-8");
echo('<?xml version="1.0" encoding="utf-8"?>');
$n=strlen($_SESSION['authnum']);
$cc_code=''; $cc_code1=0;
$list=array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');
echo('<result>');
echo('<len_cc>'.$n.'</len_cc>');
echo('<authnum>'.$_SESSION['authnum'].'</authnum>');
for($i=0;$i<$n;$i++) { $cc_code.=$list[rand(0, 33)]; }
$_SESSION['cc_code']=$cc_code;
echo('<cc_code1>'.$cc_code.'</cc_code1>');
for($i=0;$i<$n;$i++) { $cc_code1=$cc_code1*1000+ord($cc_code[$i] ^ $_SESSION['authnum'][$i]); }
echo('<cc_code>'.$cc_code1.'</cc_code>');
//for($i=0;$i<$n;$i++) { $cc_code[$i]=$cc_code[$i] ^ $_SESSION['authnum'][$i]; }
for($i=0;$i<$n;$i++) {  echo ('<i'.$i.'>'.ord($cc_code[$i] ^ $_SESSION['authnum'][$i]).'</i'.$i.'>'); }
for($i=0;$i<$n;$i++) {
	$t=$cc_code1%1000;
	echo ('<j'.$i.' value="'.($cc_code1%1000).'">'.chr(chr($cc_code1%1000) ^ $_SESSION['authnum'][$i]).'</j'.$i.'>');
	$cc_code1=$cc_code1/1000;
}
//for($i=0;$i<$n;$i++) { $cc_code[$i]=$cc_code[$i] ^ $_SESSION['authnum'][$i]; }
//echo('<cc_code2>'.$cc_code.'</cc_code2>');
echo('</result>');
?>
