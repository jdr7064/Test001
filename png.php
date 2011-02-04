<?php
session_start();
$img_height=70;	//	图片的长
$img_width=25;	//	图片的宽
$authnum='';
//	生产验证码字符
// $list=array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');
$list=array('2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');
for($i=0;$i<4;$i++){ $authnum.=$list[rand(0, 31)]; }

$aimg=imagecreate($img_height, $img_width);	//	生成图片
imagecolorallocate($aimg, 255,255,255);		//	图片底色，ImageColorAllocate第1次定义颜色PHP就认为是底色了
$black = imagecolorallocate($aimg, 0,0,0);	//	定义需要的黑色

for ($i=1; $i<=100; $i++) {
    imagestring($aimg,1,mt_rand(1,$img_height),mt_rand(1,$img_width),"@",imagecolorallocate($aimg,mt_rand(200,255),mt_rand(200,255),mt_rand(200,255)));
}

//	为了区别于背景，这里的颜色不超过200，上面的不小于200
for ($i=0;$i<strlen($authnum);$i++){
    imagestring($aimg, mt_rand(3,5),$i*$img_height/4+mt_rand(2,7),mt_rand(1,$img_width/2-2), $authnum[$i],imagecolorallocate($aimg,mt_rand(0,100),mt_rand(0,150),mt_rand(0,200)));
}
imagerectangle($aimg,0,0,$img_height-1,$img_width-1,$black);	//	画一个矩形
Header("Content-type: image/PNG");
ImagePNG($aimg);	//	生成png格式
ImageDestroy($aimg);

$_SESSION['authnum']=$authnum;	//	存验证码
?>
