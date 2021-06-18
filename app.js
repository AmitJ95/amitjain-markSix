var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#output");
var  btnTranslate = document.querySelector("#translate");
btnTranslate.addEventListener("click", clickHandler);


var serverURL = "https://api.funtranslations.com/translate/minion.json";
function getTranslationText(input) {
    return serverURL + "?" + "text=" + input;
}
function clickHandler() {
    
    var inputTxt = txtInput.value;
    fetch(getTranslationText(inputTxt))
    .then(response => response.json())
    .then(json =>{
        var text = json.contents.translated
        txtOutput.innerText = text;
    })
}