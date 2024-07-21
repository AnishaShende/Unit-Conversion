/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn");
let lengthConversion = document.getElementById("lengthCon");
let volumeConversion = document.getElementById("volumeCon");
let massConversion = document.getElementById("massCon");

convertBtn.addEventListener("click", function () {
  let number = Number(document.getElementById("input").value);
  console.log(number);
  lengthConversion.textContent = `${number} meters = ${(number * 3.281).toFixed(
    3
  )} feet | ${number} feet = ${(number / 3.281).toFixed(3)} meters`;

  volumeConversion.textContent = `${number} liters = ${(number * 0.264).toFixed(
    3
  )} gallons | ${number} gallons = ${(number / 0.264).toFixed(3)} liters`;

  massConversion.textContent = `${number} kilos = ${(number * 2.204).toFixed(
    3
  )} pounds | ${number} pounds = ${(number / 2.204).toFixed(3)} kilos`;
});
