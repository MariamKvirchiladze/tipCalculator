`use strict`;
let bill;
let people;
let tipAmount;
let total;
let percentboxes = document.querySelectorAll(`.tip`);
let firstClick = false;
let clicked;
let tipPercent;

function addError(x, y) {
  document.querySelector(x).textContent = `Cant be zero...`;
  document.querySelector(y).style.border = `2px red solid`;
}
function removeError(x, y) {
  document.querySelector(x).textContent = ``;
  document.querySelector(y).style.border = `none`;
}
for (let i = 0; i < percentboxes.length; i++) {
  percentboxes[i].addEventListener(`click`, (event) => {
    if (firstClick) {
      clicked.classList.remove(`clicked`);
    }
    clicked = event.target;
    tipPercent = Number(event.target.value);
    calcTip();
    clicked.classList.add("clicked");
    firstClick = true;
  });
}

function calcTip() {
  bill = Number(document.querySelector(`#bill`).value);
  people = Math.floor(Number(document.querySelector(`#people`).value));
  document.querySelector(`#people`).value = people;
  error();
  if (bill > 0 && people > 0) {
    console.log(tipPercent, `2`);
    if (tipPercent > 0 && tipPercent <= 100) {
      let tip = (bill * tipPercent) / 100;
      tipAmount = (tip / people).toFixed(3);
      total = ((bill + tip) / people).toFixed(3);
      document.querySelector(`#valuetip`).textContent = `$` + tipAmount;
      document.querySelector(`#valuetotal`).textContent = `$` + total;
    }
  }
}

function reset() {
  document.querySelector(`#bill`).value = ``;
  document.querySelector(`#people`).value = ``;
  document.querySelector(`#valuetip`).textContent = `$0.00`;
  document.querySelector(`#valuetotal`).textContent = `$0.00`;
  removeError("#red-text1", "#bill");
  removeError("#red-text2", "#people");
}

function error() {
  bill = Number(document.querySelector(`#bill`).value);
  people = Number(document.querySelector(`#people`).value);
  if (bill <= 0) {
    addError("#red-text1", "#bill");
  } else if (bill > 0) {
    removeError("#red-text1", "#bill");
  }
  if (people == 0) {
    addError("#red-text2", "#people");
  } else if (people > 0) {
    removeError("#red-text2", "#people");
  }
}
