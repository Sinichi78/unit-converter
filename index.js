let inputNumber = []
const conversionFeet = 3.28084;
const conversionMeters = 0.3048;
const conversionGallons = 0.264172;
const conversionLiters  = 3.78541;
const conversionPounds = 2.20462;
const conversionKilograms = 0.453592;

let inputEl = document.getElementById("input-el")
let buttonEl = document.getElementById("button-el")
let Length = document.getElementById("length")
let Volume = document.getElementById("volume")
let Mass = document.getElementById("mass")

buttonEl.addEventListener("click", function(){
    inputNumber = (inputEl.value)
    let totalFeet = inputNumber * conversionFeet
    let totalMeters = inputNumber * conversionMeters
    
  

    Length.textContent = `${inputNumber} meters = ${Number(totalFeet).toFixed(3)} feet | 
    ${inputNumber} feet = ${Number(totalMeters).toFixed(3)} meters`

    let totalGallon = inputNumber * conversionGallons
    let totalLiters = inputNumber * conversionLiters

    Volume.textContent = `${inputNumber} liters = ${Number(totalGallon).toFixed(3)} gallons |
    ${inputNumber} gallons = ${Number(totalLiters).toFixed(3)} liters`

    let totalPounds = inputNumber * conversionPounds
    let totalKilograms = inputNumber * conversionKilograms

    Mass.textContent = `${inputNumber} kilos = ${Number(totalPounds).toFixed(3)} pounds | 
    ${inputNumber} pounds = ${Number(totalKilograms).toFixed(3)} kilos`

    
})







