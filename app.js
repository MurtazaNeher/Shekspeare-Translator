btnTranslate = document.querySelector("#btn-translate");
btnClear = document.querySelector("#btn-clear");

txtInput = document.querySelector("#txt-input");
txtOutput = document.querySelector("#txt-output");
var serverUrl = "https://api.funtranslations.com/translate/shakespeare.json";

function getServerUrl(text) {
    return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Sorry !!! Server down , try again after some time")
}


function clickEventHandler() {
    var inputTxt = txtInput.value;

    fetch(getServerUrl(inputTxt))
        .then(response => response.json())
        .then(json => {
            var translatedTxt = json.contents.translated;
            txtOutput.innerText = translatedTxt;
        })
        .catch(errorHandler)

};

function clearInput() {
    txtInput.value = "";
    txtOutput.vlaue = "";
}


btnTranslate.addEventListener("click", clickEventHandler);
btnClear.addEventListener("click", clearInput);