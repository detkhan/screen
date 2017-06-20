<?php
require_once("class/database.php");
class user
{

function adduser($email,$password)
{
$join_date=date("Y-m-d H:i:s");
$clsMyDB = new MyDatabase();
$password=md5($password);
$strCondition2 = "SELECT  *  FROM  user WHERE  `email` ='$email'";
$objSelect2 = $clsMyDB->fncSelectRecord($strCondition2);
if(!$objSelect2)
{
$strinsert ="INSERT INTO  user(email,password,money,join_date) VALUES ('$email','$password','0','$join_date')";
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
$strCondition2 = "SELECT * FROM (SELECT user_id,user_name,md5(email) as email,password,user_img FROM user)as a WHERE  `email` ='$email' and `password` ='$password'";
}else{
$strCondition2 = "SELECT  *  FROM  user WHERE  `user_id` ='$user'";
}

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
}//class

?>
