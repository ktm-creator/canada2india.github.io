var downArrow = document.getElementById("btn1");
var upArrow = document.getElementById("btn2");

downArrow.onclick=function(){
    'use-strict';
    document.getElementById("first").style="top:-620px";
    document.getElementById("second").style="top:-620px";
    downArrow.style="display:none";
    downArrow.style="display:block";
};
upArrow.onclick=function(){
    'use-strict';
    document.getElementById("first").style="top:0";
    document.getElementById("second").style="top:80px";
    upArrow.style="display:none";
    downArrow.style="display:block";
};
