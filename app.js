// https://www.omnicalculator.com/conversion/grams-to-calories

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const totalCaloriesRadio = document.getElementById('totalCaloriesRadio');
const caloriesfromcarbsRadio = document.getElementById('caloriesfromcarbsRadio');
const caloriesfromproteinRadio = document.getElementById('caloriesfromproteinRadio');
const caloriesfromfatRadio = document.getElementById('caloriesfromfatRadio');

let carbohydrate = v1;
let protein = v2;
let fat = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

totalCaloriesRadio.addEventListener('click', function() {
  variable1.textContent = 'Carbohydrate';
  variable2.textContent = 'Protein';
  variable3.textContent = 'Fat';
  carbohydrate = v1;
  protein = v2;
  fat = v3;
  variable2.style.display = 'inline'; v2.style.display = 'inline';
  variable3.style.display = 'inline'; v3.style.display = 'inline';
  result.textContent = '';
});

caloriesfromcarbsRadio.addEventListener('click', function() {
  variable1.textContent = 'Carbohydrate';
  carbohydrate = v1;
  variable2.style.display = 'none'; v2.style.display = 'none';
  variable3.style.display = 'none'; v3.style.display = 'none';
  result.textContent = '';
});

caloriesfromproteinRadio.addEventListener('click', function() {
  variable1.textContent = 'Protein';
  protein = v1;
  variable2.style.display = 'none'; v2.style.display = 'none';
  variable3.style.display = 'none'; v3.style.display = 'none';
  result.textContent = '';
});

caloriesfromfatRadio.addEventListener('click', function() {
  variable1.textContent = 'Fat';
  fat = v1;
  variable2.style.display = 'none'; v2.style.display = 'none';
  variable3.style.display = 'none'; v3.style.display = 'none';
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(totalCaloriesRadio.checked)
    result.textContent = `Total calories = ${computeTotalcalories().toFixed(2)}`;

  else if(caloriesfromcarbsRadio.checked)
    result.textContent = `Carbohydrate = ${computeCarbohydrate().toFixed(2)}`;

  else if(caloriesfromproteinRadio.checked)
    result.textContent = `Protein = ${computeProtein().toFixed(2)}`;

  else if(caloriesfromfatRadio.checked)
    result.textContent = `Fat = ${computeFat().toFixed(2)}`;
})

// calculation

function computeTotalcalories() {
  return (Number(carbohydrate.value) * 4) + (Number(protein.value) * 4) + (Number(fat.value) * 9);
}

function computeCarbohydrate() {
  return Number(carbohydrate.value) * 4;
}

function computeProtein() {
  return Number(protein.value) * 4;
}

function computeFat() {
  return Number(fat.value) * 9;
}