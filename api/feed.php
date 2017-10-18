<?php
include("class/user.php");
include("class/json.php");
$jsoncallback=$_GET['jsoncallback'];
$user_id_hash=$_GET['user_id'];
$track=$_GET['track'];
$page=$_GET['page'];
$type=$_GET['type'];
$user= new user;
$data1=$user->getprofile($user_id_hash,$track,1);
$user_id=$data1[0]['user_id'];
$follow=$user->getfollow($user_id);
$in='';
$in.="'".$user_id."'";
$total=count($follow);
if ($follow!="no") {
for ($i=0; $i < $total; $i++) {
    $in.=",'".$follow[$i]['follow']."'";
}
}
$data=$user->getfeed($in);

$objjson=new json();
$total_feed=count($data);
for ($ii=0; $ii < $total_feed; $ii++) {
  $user_id=$data[$ii]['user_id'];
  $user_name=$data[$ii]['user_name'];
  $user_img=$data[$ii]['user_img'];
  $feed_id=$data[$ii]['feed_id'];
  $img=$data[$ii]['img'];
  $share=$data[$ii]['share'];
  $love=$data[$ii]['love'];
  $feed_time=$data[$ii]['feed_time'];
  $link="test";
  $title="test";
  if($user_img==''){
  $user_img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV9AkKZ87CqMtU-s9RUrJ3I21xDkUoV2v_xLn_R-FK_0BJP1hz';
  }
  $json_data[]=array(
  "user_id"=>"$user_id",
  "user_name"=>"$user_name",
  "user_img"=>"$user_img",
  "feed_id"=>"$feed_id",
  "img"=>"$img",
  "share"=>"$share",
  "love"=>"$love",
  "feed_time"=>"$feed_time",
  "title"=>"$title",
  "link"=>"$link"
   );
   }
$getjson=$objjson->addjson($json_data,$jsoncallback);
echo $getjson;

?>
