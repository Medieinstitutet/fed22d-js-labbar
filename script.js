/*
- Måste man göra en + & - funktion för varje sorts munk eller går det att lösa så en funktion fungerar för alla munkar?
*/

// Typecasting
/*const num1 = '1';
const num2 = '23';
const sum = Number(num1) + Number(num2);*/

const decreaseButtons = document.querySelectorAll('button[data-operator="minus"]');

const increaseButtons = document.querySelectorAll('button[data-operator="plus"]');

for (let i = 0; i < decreaseButtons.length; i++) {
  decreaseButtons[i].addEventListener('click', decreaseCount);
  increaseButtons[i].addEventListener('click', increaseCount);
}

function increaseCount(e) {
  const amountEl = e.currentTarget.parentElement.querySelector('.amount');

  let amount = Number(amountEl.innerText);
  
  amountEl.innerHTML = amount + 1;

  updateDonutSum(e.currentTarget.parentElement);
}

function decreaseCount(e) {
  const amountEl = e.currentTarget.parentElement.querySelector('.amount');

  let amount = Number(amountEl.innerText); // Eller .innerHTML eller .textContent

  if (amount - 1 < 0) {
    return;
  }

  amountEl.innerHTML = amount - 1;

  updateDonutSum(e.currentTarget.parentElement);
}

/*
när man har klickat på plus eller minus så ska summan uppdateras
vi behöver ha reda på antalet av den munken
vi behöver ha reda på priset på den munken
*/

function updateDonutSum(donutElement) {
  const donutSinglePrice = donutElement.querySelector('.price').innerHTML;
  const orderedAmount = donutElement.querySelector('.amount').innerHTML;

  const sum = donutSinglePrice * orderedAmount;

  donutElement.querySelector('.sum').innerHTML = sum + ' kr';
  console.log(sum + ' kr');
}