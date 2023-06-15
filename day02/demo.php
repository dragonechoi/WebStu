<?php
header("Content-Type:text/html; charset=utf-8");

$name= $_GET['name'];
$email= $_GET['email'];
$url= $_GET['url'];
$int= $_GET['int'];
$range= $_GET['range'];
$message= $_GET['msg'];

echo "이름: $name <br>";
echo "이메일: $email <br>";
echo "URL: $url <br>";
echo "신발 사이즈: $int mm <br>";
echo "거리: $range m <br>";
echo "메세지: $message <br>";


?>