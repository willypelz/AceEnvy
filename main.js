// Mobile View
if(navigator.userAgent.match(/iPad|iPhone|Android|BlackBerry|Windows Phone|webOS/i)){
  location.replace("mobile.html");
}
// Navigation
function openNav(){
  document.getElementById("mySidenav").style.width = "100%";
}
function closeNav(){
  document.getElementById("mySidenav").style.width = "0";
}
// Selection
function showDiv(elem){
  if(elem.value == 'new'){
    document.getElementById('new').style = "display: inline-block; padding: 5px;";
    document.getElementById('new1').style = "display: inline-block; padding: 5px;";
    document.getElementById('new2').style = "display: inline-block; padding: 5px;";
    document.getElementById('featured').style = "display: none;";
    document.getElementById('featured1').style = "display: none;";
    document.getElementById('featured2').style = "display: none;";
  }else if(elem.value == 'featured'){
    document.getElementById('featured').style = "display: inline-block; padding: 5px;";
    document.getElementById('featured1').style = "display: inline-block; padding: 5px;";
    document.getElementById('featured2').style = "display: inline-block; padding: 5px;";
    document.getElementById('new').style = "display: none;";
    document.getElementById('new1').style = "display: none;";
    document.getElementById('new2').style = "display: none;";
  }else {
    document.getElementById('new').style = "display: inline-block; padding: 5px;";
    document.getElementById('new1').style = "display: inline-block; padding: 5px;";
    document.getElementById('new2').style = "display: inline-block; padding: 5px;";
    document.getElementById('featured').style = "display: inline-block; padding: 5px;";
    document.getElementById('featured1').style = "display: inline-block; padding: 5px;";
    document.getElementById('featured2').style = "display: inline-block; padding: 5px;";
  }
}
// Download Promps
$('#new').click(function(){
  swal({
    title: "Thanks!",
    text: "You Downloaded A Template From Our New Lineup! Let Us Know What You Think",
    icon: "success",
    button: "Ok!",
  });
});
$('#featured').click(function(){
  swal({
    title: "Thanks!",
    text: "You Downloaded A Template From Our Featured Lineup! Let Us Know What You Think",
    icon: "success",
    button: "Ok!",
  });
});
$('#ace').click(function(){
  swal({
    title: "Thanks!",
    text: "You Downloaded A Template From Our Own Lineup! Let Us Know What You Think",
    icon: "success",
    button: "Ok!",
  });
});
$('#usr').click(function(){
  swal({
    title: "Thanks!",
    text: "You Downloaded A Template From Our Users Lineup! Let Us Know What You Think",
    icon: "success",
    button: "Ok!",
  });
});
// Contact Me
function newPage(num){
  var url = new Array();
  url[0] = "https://facebook.com/alexandracodes34";
  url[1] = "https://instagram.com/alexandracodes34";
  url[2] = "https://github.com/alexandracodes34";
  url[3] = "mailto:alexandracodes34@gmail.com";
  // Downloads Selection
  url[4] = "downloads/AceEnvy.zip";
  url[5] = "";
  url[6] = "";
  url[7] = "";
  url[8] = "";
  url[9] = "";
  window.location=url[num];
}
