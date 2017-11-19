// Mobile Navigation
function openNav(){
  document.getElementById("mySidenav").style.width = "100%";
}
function closeNav(){
  document.getElementById("mySidenav").style.width = "0";
}
// Q&A Open
var acc = document.getElementsByClassName("accordion");
var i;
for(i = 0; i < acc.length; i++){
  acc[i].onclick = function(){
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if(panel.style.maxHeight){
      panel.style.maxHeight = null;
    }else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}
// Downloads
function newPage(num){
  var url = new Array();
  url[0] = "../downloads/AceEnvy.zip";
  url[1] = "../downloads/resources-template.zip";
  window.location=url[num];
}
// Selection
function showDiv(elem){
  if(elem.value == 'ace'){
    $('#tru, #tru1').show();
  }else if(elem.value == 'usr'){
    $('#tru, #tru1').hide();
  }else {
    $('#tru, #tru1').show();
  }
}
// Selection Confirm
$('#us, #us1').click(function(){
  swal("Thanks!", "You Downloaded A Template From Our Own Lineup! Let Us Know What You Think", "success");
});
