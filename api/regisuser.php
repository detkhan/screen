<?php
include("class/user.php");
include("class/json.php");
$jsoncallback=$_GET['jsoncallback'];
$email=$_GET['email'];
$password=md5($_GET['password']);
$user= new user;
$adduser=$user->adduser($email,$password);
$msg=$adduser;
$objjson=new json();
  $json_data[]=array(
  "msg"=>"$msg"
   );
$getjson=$objjson->addjson($json_data,$jsoncallback);
echo $getjson;

?>
