var inputs = document.getElementsByClassName('input');
var inputValue = inputs.length
var btn = document.getElementById('btn')
var alertBox = document.getElementById('alertbox')


 btn.addEventListener("click" , function(e){
    e.preventDefault();
    alertBox.style.visibility = "hidden"
    for (var i=0 ; i < inputValue ; i++){
        if(inputs[i].value ===""){
            alertBox.style.visibility = "visible"
        }
    }
 });