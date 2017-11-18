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
  if(elem.value == 'ace'){
    document.getElementById('tru').style = "display: inline-block; padding: 5px;";
    document.getElementById('ddc').style = "display: none;";
  }else if(elem.value == 'usr'){
    document.getElementById('tru').style = "display: none;";
    document.getElementById('ddc').style = "display: inline-block; padding: 5px;";
  }else {
    document.getElementById('tru').style = "display: inline-block; padding: 5px;";
    document.getElementById('ddc').style = "display: inline-block; padding: 5px;";
  }
}
// Download Promps
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
  url[4] = "https://twitter.com/nadsr_2";
  url[5] = "https://instagram.com/nadsr2";
  url[6] = "https://github.com/nadsr2";
  // Downloads Selection
  url[7] = "downloads/AceEnvy.zip";
  url[8] = "downloads/resources-template.zip";
  window.location=url[num];
}
