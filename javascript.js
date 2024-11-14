const buttonGs = document.getElementById("button-GS");
buttonGs.addEventListener ("click", function () {
let numberGs = document.getElementById("number-gs")
let numberGsNumber = Number(numberGs.innerHTML)
numberGsNumber++;
numberGs.innerHTML = numberGsNumber

const buttonGs = Number(window.prompt("Skoru giriniz", ""));

});

const rebuttonGs = document.getElementById("rebutton-GS");
rebuttonGs.addEventListener ("click", function () {
let numberGs = document.getElementById("number-gs")
let numberGsNumber = Number(numberGs.innerHTML)
numberGsNumber--;
numberGs.innerHTML = numberGsNumber
});


const buttonFb = document.getElementById("button-FB");
buttonFb.addEventListener ("click", function () {
let numberFb = document.getElementById("number-fb")
let numberFbNumber = Number(numberFb.innerHTML)
numberFbNumber++;
numberFb.innerHTML = numberFbNumber
});

const rebuttonFb = document.getElementById("rebutton-FB");
rebuttonFb.addEventListener ("click", function () {
let numberFb = document.getElementById("number-fb")
let numberFbNumber = Number(numberFb.innerHTML)
numberFbNumber--;
numberFb.innerHTML = numberFbNumber
});