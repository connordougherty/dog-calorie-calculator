let restingEnergyRequirements;
let caloriesPerDay;


// DOM Elements
const form = document.querySelector('#form');
const weightInput = document.querySelector('#weight-input');
const dailyEnergyNeeds = document.querySelector('#daily-energy-needs')
const caloricNeeds = document.querySelector('#caloric-needs');
const pound = document.querySelector('#pound');
const kilogram = document.querySelector('#kilogram');

form.addEventListener('submit', calculate);

function calculate() {
    event.preventDefault();
    
    if (pound.checked) {
        restingEnergyRequirements =  Math.pow(weightInput.value * 0.45359237, .75) * 70;
    } else if (kilogram.checked) {
        restingEnergyRequirements =  Math.pow(weightInput.value, .75) * 70;
    }

    switch (dailyEnergyNeeds.value) {
        case 'Neutered adult':
            caloriesPerDay = restingEnergyRequirements * 1.6
            break;
        case 'Intact adult':
            caloriesPerDay = restingEnergyRequirements * 1.8
            break;
        case 'Inactive/obese prone':
            caloriesPerDay = restingEnergyRequirements * 1.3
            break;
        case 'Weight loss':
            caloriesPerDay = restingEnergyRequirements * 1.0
            break;
        case 'Weight gain':
            caloriesPerDay = restingEnergyRequirements * 1.6
            break;
        case 'Active, working dogs':
            caloriesPerDay = restingEnergyRequirements * 3.5
            break;
        case 'Puppy 0-4 months':
            caloriesPerDay = restingEnergyRequirements * 3.0
            break;
        case 'Puppy 4 months to adult':
            caloriesPerDay = restingEnergyRequirements * 2.0
            break; 
    }

    caloricNeeds.innerHTML = Math.round(caloriesPerDay);
}

