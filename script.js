/*
- Måste man göra en + & - funktion för varje sorts munk eller går det att lösa så en funktion fungerar för alla munkar?
*/

// Typecasting
/*const num1 = '1';
const num2 = '23';
const sum = Number(num1) + Number(num2);*/

const decreaseButtons = document.querySelectorAll('button[data-operator="minus"]');

for (let i = 0; i < decreaseButtons.length; i++) {
  decreaseButtons[i].addEventListener('click', decreaseCount);
}

function decreaseCount(e) {
  const amountEl = e.currentTarget.parentElement.querySelector('.amount');

  let amount = amountEl.innerText; // Eller .innerHTML eller .textContent

  amountEl.innerHTML = amount - 1;
}