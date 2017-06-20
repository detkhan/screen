<?php
include("class/user.php");
include("class/json.php");
$jsoncallback=$_GET['jsoncallback'];
$email=$_GET['email'];
$password=md5($_GET['password']);
$user= new user;
$userlogin=$user->login($email,$password);
$msg=$userlogin;
$user_id=md5($email);
$track=$password;
$objjson=new json();
  $json_data[]=array(
  "msg"=>"$msg",
  "user_id"=>"$user_id",
  "track"=>"$track"
   );
$getjson=$objjson->addjson($json_data,$jsoncallback);
echo $getjson;

?>
