"use Sctrict";
window.onload=init;
function init(){
    const helloBtn =document.getElementById("helloBtn");
    helloBtn.onclick=onHelloBtnClicked;
}
function onHelloBtnClicked(){
   let message=document.getElementById('messageDiv');
    message.innerHTML="Hello World";
}