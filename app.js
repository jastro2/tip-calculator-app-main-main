"use strict";

const tipPercentageBtn5 = document.getElementById("5-percent");
const tipPercentageBtn10 = document.getElementById("10-percent");
const tipPercentageBtn15 = document.getElementById("15-percent");
const tipPercentageBtn25 = document.getElementById("25-percent");
const tipPercentageBtn50 = document.getElementById("50-percent");

tipPercentageBtn5.value = 5;
tipPercentageBtn10.value = 10;
tipPercentageBtn15.value = 15;
tipPercentageBtn25.value = 25;
tipPercentageBtn50.value = 50;

tipPercentageBtn5.addEventListener("click", function () {
  alert(tipPercentageBtn5.value);
});
