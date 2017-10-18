<?php
include("class/user.php");
include("class/json.php");
$jsoncallback=$_GET['jsoncallback'];
$user_id=$_GET['user_id'];
$password=$_GET['track'];
$type=$_GET['type'];
$user= new user;
$data=$user->getprofile($user_id,$password,$type);
$user_id=$data[0]['user_id'];
$user_name=$data[0]['user_name'];
$user_img=$data[0]['user_img'];
if($user_img==''){
$user_img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV9AkKZ87CqMtU-s9RUrJ3I21xDkUoV2v_xLn_R-FK_0BJP1hz';
}
$objjson=new json();
  $json_data[]=array(
  "user_id"=>"$user_id",
  "user_name"=>"$user_name",
  "user_img"=>"$user_img"
   );
$getjson=$objjson->addjson($json_data,$jsoncallback);
echo $getjson;

?>
