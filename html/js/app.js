getuser();



function getuser(){
if(localStorage.user_id&&localStorage.track)
{
user_id = localStorage.user_id;
track=localStorage.track;
home();
//localStorage.clear();
//alert(user_id);
}
else
{
login();
}
}


function login() {
$$("#menu").css('display', 'none');
$$("#content").html("");
var content='<div class="content-block-title">Sign In</div> \
<div class="list-block">\
  <ul>\
  <li>\
  <div class="item-content">\
    <div class="item-media"><i class="material-icons">mail</i></div>\
    <div class="item-inner">\
      <div class="item-title label">E-mail</div>\
      <div class="item-input">\
        <input id="email" type="email" placeholder="E-mail">\
      </div>\
    </div>\
  </div>\
</li>\
<li>\
<div class="item-content">\
  <div class="item-media"><i class="material-icons">https</i></div>\
  <div class="item-inner">\
    <div class="item-title label">Password</div>\
    <div class="item-input">\
      <input id="password" type="password" placeholder="Password">\
    </div>\
  </div>\
</div>\
</li>\
</ul>\
</div>\
</div>\
<div class="row">\
  <div class="col-50">\
    <a id="sign_up" href="#" class="button  button-fill">Sign Up</a>\
  </div>\
  <div class="col-50">\
    <a id="sign_in" href="#" class="button  button-fill">Sign In</a>\
  </div>\
</div> \
';
$$("#content").append(content);
}

$$(document).on("click", "#sign_up", function() {
  $$("#content").html("");
  var content='<div class="content-block-title">Sign In</div> \
  <div class="list-block">\
    <ul>\
    <li>\
    <div class="item-content">\
      <div class="item-media"><i class="material-icons">mail</i></div>\
      <div class="item-inner">\
        <div class="item-title label">E-mail</div>\
        <div class="item-input">\
          <input id="email" type="email" placeholder="E-mail">\
        </div>\
      </div>\
    </div>\
  </li>\
  <li>\
  <div class="item-content">\
    <div class="item-media"><i class="material-icons">https</i></div>\
    <div class="item-inner">\
      <div class="item-title label">Password</div>\
      <div class="item-input">\
        <input id="password" type="password" placeholder="Password">\
      </div>\
    </div>\
  </div>\
  </li>\
  <li>\
  <div class="item-content">\
    <div class="item-media"><i class="material-icons">https</i></div>\
    <div class="item-inner">\
      <div class="item-title label">Re-Password</div>\
      <div class="item-input">\
        <input id="re_password" type="password" placeholder="Re-Password">\
      </div>\
    </div>\
  </div>\
  </li>\
  </ul>\
  </div>\
  </div>\
  <div class="row">\
    <div class="col-100">\
      <a id="sign_up_regis" href="#" class="button  button-fill">Sign Up</a>\
    </div>\
  </div> \
  ';
  $$("#content").append(content);

});

$$(document).on("click", "#sign_up_regis", function() {
var email = $$('#email').val();
var password = $$('#password').val();
var re_password = $$('#re_password').val();
if(password==re_password){
  var url = "http://"+hosturl+"/screen/api/regisuser.php?jsoncallback=?";
  $$.getJSON( url, {
      email:email,
      password:password,
      re_password:re_password,}
,function( data ) {
  $$.each(data, function(i, field){
  var msg=field.msg;
  if(msg=="no"){
  myApp.alert("Have User", 'Screen Me!');
  }
  else{
login();
  }
  });
  });
}else{
myApp.alert('Password Not Match Re-Password', 'Screen Me!');
}
});


$$(document).on("click", "#sign_in", function() {
  var email = $$('#email').val();
  var password = $$('#password').val();
    var url = "http://"+hosturl+"/screen/api/loginuser.php?jsoncallback=?";
    $$.getJSON( url, {
        email:email,
        password:password}
  ,function( data ) {
    $$.each(data, function(i, field){
    var msg=field.msg;
    if(msg=="no"){
    myApp.alert("User Or Password Worng", 'Screen Me!');
    }
    else{
      user_id=field.user_id;
      track=field.track;
      localStorage.user_id=field.user_id;
      localStorage.track=field.track;
      $$("#menu").css('display', 'block');
      home();
    }
    });
    });

});//click sign_in
function home() {
  $$("#content").html("");
  var content="home";
  $$("#content").append(content);
}

function showprofile() {
  var url = "http://"+hosturl+"/screen/api/getprofile.php?jsoncallback=?";
  var getdata;
  $$.getJSON( url, {
      user_id:user_id,
      type:'1',
      pass:track}
  ,function( data ) {
  $$.each(data, function(i, field){
  var content='<div class="card facebook-card" id="'+field.user_id+'"> \
  <div class="card-header">   \
    <div class="row">\
    <div class="col-25"><div class="item-media"><i class="facebook-avatar"><img src="'+field.user_img+'" width="34" height="34"></i></div></div>\
    <div class="col-25">33</div>\
    <div class="col-25">33</div>\
    <div class="col-25">33</div>\
</div>  \
<div class="row">\
<div class="col-25"></div>\
<div class="col-25">Post</div>\
<div class="col-25">Follow</div>\
<div class="col-25">Follower</div>\
</div>  \
<div class="row">\
<div class="col-25"></div>\
<div class="col-75"><p><a href="#" class="button button-big button-fill color-gray">Edit Profile</a></p></div>\
</div>  \
<div class="row">\
<div class="col-100">'+field.user_name+'</div>\
</div>  \
  </div> \
  <div class="card-content"> \
  <div class="row">\
  <div class="col-33"><i class="material-icons">view_module</i></div>\
  <div class="col-33"><i class="material-icons">list</i></div>\
  <div class="col-33"><i class="material-icons">favorite_border</i></div>\
  </div>  \
</div> \
  </div> \
  <div class="card">\
    <div class="card-content">\
<div class="card-content-inner">\
<div class="row  no-gutter">\
<div class="col-33"><img src="http://192.168.1.201/screen/api/pic/tee-collection-1.jpg" width="100%" height="150"></div>\
<div class="col-33"><img src="http://192.168.1.201/screen/api/pic/tee-collection-2.jpg" width="100%" height="150"></div>\
<div class="col-33"><img src="http://192.168.1.201/screen/api/pic/tee-collection-3.jpg" width="100%" height="150"></div>\
</div>  \
<div class="row  no-gutter">\
<div class="col-33"><img src="http://192.168.1.201/screen/api/pic/tee-collection-1.jpg" width="100%" height="150"></div>\
<div class="col-33"><img src="http://192.168.1.201/screen/api/pic/tee-collection-2.jpg" width="100%" height="150"></div>\
<div class="col-33"><img src="http://192.168.1.201/screen/api/pic/tee-collection-3.jpg" width="100%" height="150"></div>\
</div>  \
</div>\
    </div>\
';
  $$("#content").append(content);
  });

  });
}






$$(document).on("click", "#logout", function() {
localStorage.clear();
login();
});
$$(document).on("click", "#home", function() {
menuhome();
home();
});
$$(document).on("click", "#find", function() {
menufind();
//showfind();
});
$$(document).on("click", "#setting", function() {
menusetting();
 });
$$(document).on("click", "#profile", function() {
menuprofile();
showprofile();
});



 function menuhome() {
   $$(".floating-button").html("").hide();
  $$('.tab-link-highlight').transform('translate3d(0%, 0px, 0px)');
  $$("#content").html("");
 }
 function menufind() {
   $$(".floating-button").html("").hide();
   $$('.tab-link-highlight').transform('translate3d(100%, 0px, 0px)');
   $$("#content").html("");
}
 function menusetting() {
   $$(".floating-button").html("").hide();
   $$('.tab-link-highlight').transform('translate3d(200%, 0px, 0px)');
   $$("#content").html("");
 }
 function menuprofile() {
   $$(".floating-button").html("").hide();
   $$('.tab-link-highlight').transform('translate3d(300%, 0px, 0px)');
   $$("#content").html("");
 }


$$('a.tab-link').click(function(){
    $$('a.tab-link').removeClass("active");
    $$(this).addClass("active");
});
