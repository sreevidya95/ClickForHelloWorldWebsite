"use Sctrict";
window.onload=init;
function init(){
    let helloBtn =document.getElementById("helloBtn");
    helloBtn.onclick=onHelloBtnClicked;
    const clearBtn =document.getElementById("clearBtn");
    clearBtn.onclick=onClearBtnclicked;
}
function onHelloBtnClicked(){
   let message=document.getElementById('messageDiv');
    message.innerHTML="Hello World";
}
function onClearBtnclicked(){
    let message = document.getElementById("messageDiv");
    message.innerHTML="";
}