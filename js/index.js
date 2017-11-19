function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//Downloads
function newPage(num){
    var url = new Array();
    url[0] = "downloads/AceEnvy.zip";
    url[1] = "downloads/resources-template.zip";
    url[2] = "mailto:alexandracodes34@gmail.com";
    window.location=url[num];
  }

// Selection
function showDiv(elem){
    if(elem.value == 'ace'){
      document.getElementById('tru').style.display = "inline";
      document.getElementById('ddc').style.display = "none";
    }else if(elem.value == 'usr'){
      document.getElementById('tru').style.display = "none";
      document.getElementById('ddc').style.display = "inline";
    }else {
      document.getElementById('tru').style.display = "inline";
      document.getElementById('ddc').style.display = "inline";
    }
  }