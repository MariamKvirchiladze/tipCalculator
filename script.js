`use strict`;
let bill;
let people;
let tipAmount;
let total;

function addError(x, y) {
  document.querySelector(x).textContent = `Cant be zero...`;
  document.querySelector(y).style.border = `2px red solid`;
}
function removeError(x, y) {
  document.querySelector(x).textContent = ``;
  document.querySelector(y).style.border = `none`;
}

function calcTip(x) {
  bill = Number(document.querySelector(`#bill`).value);
  people = Math.floor(Number(document.querySelector(`#people`).value));
  document.querySelector(`#people`).value = people;
  if (bill > 0 && people > 0) {
    let tipPercent = Number(document.querySelector(x).value);
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
  removeError();
  document.querySelector(`#valuetip`).textContent = `$0.00`;
  document.querySelector(`#valuetotal`).textContent = `$0.00`;
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
