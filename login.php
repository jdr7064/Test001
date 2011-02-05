<?php
session_start();
if(strtoupper($_POST['check_code'])==strtoupper($_SESSION['check_code'])) {
$db=new PDO("sqlite:./db.sqlite", null, null);
//$pwd=md5('user');	//	一个用户名与密码
//$user_name="user";
$user_name=$_POST["user_name"];
$pwd=md5($_POST["pwd"]);
$stmt=$db->prepare("select name, pwd from users where name=:name and pwd=:pwd");
$stmt->bindParam(":name", $user_name);
$stmt->bindParam(":pwd", $pwd);
$stmt->execute();
$stmt->bindColumn('name', $user_name);
$result=$stmt->fetch();
}
header("Content-Type: text/xml; charset=UTF-8");
echo('<?xml version="1.0" encoding="utf-8"?>');
echo('<result>');
if(($result!=NULL)&&($result[0]==$user_name)) {
	echo('OK');
} else {
	echo('Failure');
}

//$pwd=md5('user1');	//	新增用户
//$user_name="user1";
//$stmt=$db->prepare("insert into users ('name', 'pwd') values(:name, :pwd)");
//$stmt->bindParam(":name", $user_name);
//$stmt->bindParam(":pwd", $pwd);
//$stmt->execute();

// var_dump($stmt);
echo('</result>');
?>
