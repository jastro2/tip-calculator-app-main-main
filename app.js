"use strict";

const tipPercentageBtn5 = document.getElementById("5-percent");
const tipPercentageBtn10 = document.getElementById("10-percent");
const tipPercentageBtn15 = document.getElementById("15-percent");
const tipPercentageBtn25 = document.getElementById("25-percent");
const tipPercentageBtn50 = document.getElementById("50-percent");
const inputs = document.querySelectorAll("input[type=text]");
const tipBtn = document.querySelectorAll(".tip-btn");
const tipPerPerson = document.querySelector("#tipPerPerson");
const totalPerPerson = document.querySelector("#totalPerPerson");
const billInput = document.querySelector("#billTotal");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const numberPeople = document.getElementById("numPeople");
let selectedTip = document.querySelector(".selected");
let selectedTipValue = 0;
let customTip = document.getElementById("customTip");

// Select tip % buttons

tipBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    tipBtn.forEach((element) => {
      element.classList.remove("selected");
    });
    btn.classList.add("selected");
    selectedTipValue = btn.value;
  });
});

// Submit button

submitBtn.addEventListener("click", function () {
  if (isNaN(billInput.value) || billInput.value.length === 0) {
    billInput.classList.add("invalid-input");
    document.getElementById("bill-input-msg").classList.remove("d-none");
  }

  if (isNaN(numberPeople.value) || numberPeople.value.length === 0) {
    numberPeople.classList.add("invalid-input");
    document.getElementById("number-people-msg").classList.remove("d-none");
  }

  if (
    !isNaN(billInput.value) &&
    billInput.value.length > 0 &&
    !isNaN(numberPeople.value) &&
    numberPeople.value.length > 0
  ) {
    selectedTipValue
      ? (selectedTipValue = selectedTipValue)
      : (selectedTipValue = customTip.value);

    let numTipPerPerson =
      (billInput.value * (selectedTipValue * 0.01)) / numberPeople.value;

    let numTotalPerPerson =
      billInput.value / numberPeople.value + numTipPerPerson * 1;

    tipPerPerson.textContent = numTipPerPerson.toFixed(2);

    totalPerPerson.textContent = numTotalPerPerson.toFixed(2);
    submitBtn.classList.add("d-none");
    resetBtn.classList.remove("d-none");
    document.getElementById("bill-input-msg").classList.add("d-none");
    document.getElementById("number-people-msg").classList.add("d-none");

    document
      .querySelectorAll("input")
      .forEach((el) => el.classList.remove("invalid-input"));
  }
});

// Reset button

resetBtn.addEventListener("click", function () {
  billInput.value = "";
  customTip.value = "";
  numberPeople.value = "";
  selectedTipValue = "";
  totalPerPerson.textContent = "$0.00";
  tipPerPerson.textContent = "$0.00";

  tipBtn.forEach((element) => {
    element.classList.remove("selected");
  });
  resetBtn.classList.add("d-none");
  submitBtn.classList.remove("d-none");
});
