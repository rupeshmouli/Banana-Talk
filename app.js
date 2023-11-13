var btntrans = document.querySelector("#click_btn");
var messbox = document.querySelector("#txt_out");
var trans = document.querySelector("#translate-output")

const serverURL = "https://api.funtranslations.com/translate/minion.json"
 
function transurl(messbox)
{
    return serverURL + "?" +"text="+ messbox
}

function errorhandler(error)
{
    console.log("error occured", error)
    alert("Something wrong with server: try again after sometime")
}
function message()
 {
    // trans.innerText = messbox.value;
    var inputText = messbox.value;
    fetch(transurl(inputText))
    .then (response=>response.json())
    .then(json=>{
         var translatedText = json.contents.translated;
         trans.innerText = translatedText;
    }
         )
    .catch(errorhandler)  
 }

 btntrans.addEventListener("click", message)