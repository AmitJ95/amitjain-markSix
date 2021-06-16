var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var  btnTranslate = document.querySelector("#translate");
btnTranslate.addEventListener("click", function clickHandler() {
  
    txtOutput.innerText = "ABC" + txtInput.value;
    //console.log("clicked",txtInput.value);
})