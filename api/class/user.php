<?php
require_once("class/database.php");
class user
{

function adduser($email,$password,$user_name)
{
$join_date=date("Y-m-d H:i:s");
$clsMyDB = new MyDatabase();
$password=md5($password);
$strCondition2 = "SELECT  *  FROM  user WHERE  `email` ='$email'";
$objSelect2 = $clsMyDB->fncSelectRecord($strCondition2);
if(!$objSelect2)
{
$strinsert ="INSERT INTO  user(email,password,user_name,money,join_date) VALUES ('$email','$password','$user_name','0','$join_date')";
$objInsert2 = $clsMyDB->fncInsertRecord($strinsert);
$objdata="add";
}
else{
$objdata="no";
}
return $objdata;
}//function adduser

public function login($email,$password)
{
  $clsMyDB = new MyDatabase();
  $strCondition2 = "SELECT  *  FROM  user WHERE  `email` ='$email' and `password` ='$password'";
  $objSelect2 = $clsMyDB->fncSelectRecord($strCondition2);
  if(!$objSelect2)
  {
  $objdata="no";
  }
  else{
  $objdata="yes";
  }
  return $objdata;
}//function login


public function getprofile($user,$pass,$type)
{
if($type==1){
$email=$user;
$password=$pass;
$strCondition2 = "SELECT user_id,user_name,email,password,user_img FROM user  WHERE  md5(email) ='$email' and password ='$password'";
}else{
$strCondition2 = "SELECT  *  FROM  user WHERE  `user_id` ='$user'";
}
//echo $strCondition2;
//exit();
$clsMyDB = new MyDatabase();
$objSelect2 = $clsMyDB->fncSelectRecord($strCondition2);
if(!$objSelect2)
{
$objdata="no";
}
else{
$objdata=$objSelect2;
}
return $objdata;
}

public function getfollow($user_id)
{
$strCondition2 = "SELECT  follow  FROM  follow WHERE  follower ='$user_id'";
$clsMyDB = new MyDatabase();
$objSelect2 = $clsMyDB->fncSelectRecord($strCondition2);
if(!$objSelect2)
{
$objdata="no";
}
else{
$objdata=$objSelect2;
}
return $objdata;
}

public function getfeed($in)
{
  $clsMyDB = new MyDatabase();
  $sql= "SELECT a.user_id as user_id,user_name,user_img,feed_id,img,share,love,feed_time FROM user a INNER JOIN feed b on(a.user_id=b.user_id)  WHERE  b.user_id IN ($in)";
  $objSelect = $clsMyDB->fncSelectRecord($sql);
  if(!$objSelect)
  {
  $objdata="no";
  }
  else{
  $objdata=$objSelect;
  }
  return $objdata;
}




}//class

?>
