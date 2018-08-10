let restingEnergyRequirements;


// DOM Elements
const form = document.querySelector('#form');
const weightInput = document.querySelector('#weight-input');
const caloricNeeds = document.querySelector('#caloric-needs');
const pound = document.querySelector('#pound');
const kilogram = document.querySelector('#kilogram');

form.addEventListener('submit', calculate);

function calculate() {
    event.preventDefault();
    
    if (pound.checked) {
        caloricNeeds.innerHTML =  Math.round(Math.pow(weightInput.value * 0.45359237, .75) * 70);
    } else if (kilogram.checked) {
        caloricNeeds.innerHTML =  Math.round(Math.pow(weightInput.value, .75) * 70);
    }
}

