login();





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
  home();
    }
    });
    });

});//click sign_in
