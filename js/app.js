function change (iconID){
    if(document.getElementById(iconID).className=="bi bi-caret-down-fill"){
      document.getElementById(iconID).className = "bi bi-caret-up-fill";
    }else{
      document.getElementById(iconID).className = "bi bi-caret-down-fill";
    }
  }