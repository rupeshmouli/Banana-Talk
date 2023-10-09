var btntrans = document.querySelector("#click_btn");
var messbox =  document.querySelector("#txt_out");
var trans = document.querySelector("#translate-output")


function message()
{
    trans.innerText = messbox.value;
}

btntrans.addEventListener("click", message)