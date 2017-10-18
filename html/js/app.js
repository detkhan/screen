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
    <div class="item-media"><i class="material-icons">mail</i></div>\
    <div class="item-inner">\
      <div class="item-title label">Username</div>\
      <div class="item-input">\
        <input id="user_name" type="text" placeholder="Username">\
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
feed(0,1);
}

function feed(pagex,typex) {
//myApp.showPreloader('loading...<br><span class="preloader"><span class="preloader-inner"><span class="preloader-inner-gap"></span><span class="preloader-inner-left"><span class="preloader-inner-half-circle"></span></span><span class="preloader-inner-right"><span class="preloader-inner-half-circle"></span></span></span></span>');
$$("#content").attr("checkmenu",'1');
var page=parseInt(pagex);
var next=parseInt(page)+1;
var url = "http://"+hosturl+"/screen/api/feed.php?jsoncallback=?";
$$.getJSON(url, {
  page:page,
  user_id:user_id,
  track:track,
  type:typex
}, function (data) {
$$.each(data, function(i, field){
  var contentnews='<div class="card facebook-card" id="'+field.feed_id+'"> \
  <div class="card-header">   \
    <div class="item-media"><i class="facebook-avatar"><img src="'+field.user_img+'" width="34" height="34"></i></div>  \
    <div class="facebook-name">#'+field.user_name+'</div>  \
    <div class="facebook-date">'+field.feed_time+'</div>  \
  </div> \
  <div class="card-content"> \
    <div class="card-content-inner"> \
  <div id="newslinkclick" feed_id="'+field.feed_id+'"> \
      <img src="'+field.img+'" hight="70%" width="100%"> \
  <p id="totallike" class="color-gray">Love:<span id="likecon'+field.feed_id+'">'+field.love+'</span>Share:'+field.share+'</p> \
    </div> \
  </div> \
  </div> \
   <div class="card-footer"> \
    <a id="likenews" feed_id="'+field.feed_id+'" numlike="'+field.feed_id+'" href="#"><div><i class="material-icons">favorite_border</i></div></a> \
    <a id="share" newstitle="'+field.title+'"  newsimg="'+field.img+'" linknews="'+field.link+'" href="#"><div><i class="material-icons">share</i></div> \
  </div> \
  </div> \
';
var divcontent='#'+field.feed_id;
var checkcontent=$$(divcontent).html();
  if(checkcontent){

}else{
$$("#content").append(contentnews);
}

//myApp.showPreloader('loading...<br><span class="preloader"><span class="preloader-inner"><span class="preloader-inner-gap"></span><span class="preloader-inner-left"><span class="preloader-inner-half-circle"></span></span><span class="preloader-inner-right"><span class="preloader-inner-half-circle"></span></span></span></span>');

}); //each
if(next==1){
var content2='<div id="clicknewsbutton" pagenews="'+next+'"  typex="'+typex+'" ></div>';
$$("#content").append(content2);
}else{
$$( "#clicknewsbutton" ).attr( "pagenews", next );
$$( "#clicknewsbutton" ).attr( "typex", typex );
}
//myApp.hidePreloader();
});
}//function feed


function showprofile() {
  var url = "http://"+hosturl+"/screen/api/getprofile.php?jsoncallback=?";
  var getdata;
  $$.getJSON( url, {
      user_id:user_id,
      type:'1',
      track:track}
  ,function( data ) {
  $$.each(data, function(i, field){
  var content='<div class="card facebook-card" id="'+field.user_id+'"> \
  <div class="card-header">   \
    <div class="row">\
    <div class="col-25">\
    <div class="item-media image-container"><i class="facebook-avatar"><img src="'+field.user_img+'" width="34" height="34"></i></div>\
    </div>\
    <div class="col-25">33</div>\
    <div class="col-25">33</div>\
    <div class="col-25">33</div>\
</div>  \
<div class="row">\
<div class="col-25">'+field.user_name+'</div>\
<div class="col-25">Post</div>\
<div class="col-25">Follow</div>\
<div class="col-25">Follower</div>\
</div>  \
<div class="row">\
<div class="col-25"></div>\
<div class="col-75"><p><a href="#" class="button button-big button-fill color-gray">Edit Profile</a></p></div>\
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
<div class="col-33"><img src="http://127.0.0.1/screen/api/pic/tee-collection-1.jpg" width="100%" height="150"></div>\
<div class="col-33"><img src="http://127.0.0.1/screen/api/pic/tee-collection-2.jpg" width="100%" height="150"></div>\
<div class="col-33"><img src="http://127.0.0.1/screen/api/pic/tee-collection-3.jpg" width="100%" height="150"></div>\
</div>  \
<div class="row  no-gutter">\
<div class="col-33"><img src="http://127.0.0.1/screen/api/pic/tee-collection-1.jpg" width="100%" height="150"></div>\
<div class="col-33"><img src="http://127.0.0.1/screen/api/pic/tee-collection-2.jpg" width="100%" height="150"></div>\
<div class="col-33"><img src="http://127.0.0.1/screen/api/pic/tee-collection-3.jpg" width="100%" height="150"></div>\
</div>  \
</div>\
    </div>\
';
  $$("#content").append(content);
  });

  });
}


function takecamera() {
var content='<div class="imageupload">\
           <div ><strong>เพิ่มรูปภาพ</strong></div>\
          <input  id="imagebroswer" name="imagebroswer" type="file">\
          <canvas id="mainscreen"></canvas>\
        </div>';
$$("#content").append(content);
var screen = new fabric.Canvas('mainscreen');
    screen.setHeight(360);
    screen.setWidth(600);
}

$("input[name='imagebroswer']").on("input", function() {
  alert("test");
});
// event ในเการเพิ่มรูปภาพ
$("#content #imagebroswer").change(function() {
alert("test");
       var e = $(this);
       var reader = new FileReader();
       reader.onload = function (event){
                   var imgObj = new Image();
                   imgObj.src = event.target.result;
                   imgObj.onload = function () {





                   var image = new fabric.Image(imgObj);
                       image.set({
                            angle: 0,


                      });
                      image.scale(0.05);
                   screen.centerObject(image);
                   screen.add(image);
                   screen.renderAll();
                     }
               }


   reader.readAsDataURL(e[0].files[0]);

 });


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
$$(document).on("click", "#camera", function() {
menucamera();
takecamera();
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
function menucamera() {
  $$(".floating-button").html("").hide();
  $$('.tab-link-highlight').transform('translate3d(200%, 0px, 0px)');
  $$("#content").html("");
}
 function menusetting() {
   $$(".floating-button").html("").hide();
   $$('.tab-link-highlight').transform('translate3d(300%, 0px, 0px)');
   $$("#content").html("");
 }
 function menuprofile() {
   $$(".floating-button").html("").hide();
   $$('.tab-link-highlight').transform('translate3d(400%, 0px, 0px)');
   $$("#content").html("");
 }


$$('a.tab-link').click(function(){
    $$('a.tab-link').removeClass("active");
    $$(this).addClass("active");
});
