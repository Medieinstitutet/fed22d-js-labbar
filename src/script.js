// Store HTML element references in variables for easy access
const generateButton = document.querySelector('#generate');
const nameField = document.querySelector('#name');
const ageField = document.querySelector('#age');
const electricityArea = document.querySelector('#electricityArea');

// Keep track if fields have correct values
let nameIsOk = false;
let ageIsOk = false;
let electricityIsOk = false;

// Check values on input field changes
nameField.addEventListener('change', checkName);
ageField.addEventListener('change', checkAge);
electricityArea.addEventListener('change', checkElectricityArea);

/**
 * Check that we have selected an electricity area.
 */
function checkElectricityArea() {
  if (electricityArea.value !== '') {
    electricityIsOk = true;
  } else {
    electricityIsOk = false;
  }
  activateGenerateButton();
}

/**
 * Check that user's age is equal to or above 18, so
 * that they're legally OK to sign contracts.
 */
function checkAge() {
  if (ageField.value >= 18) {
    ageIsOk = true;
  } else {
    ageIsOk = false;
  }
  activateGenerateButton();
}

/**
 * Check that the name contains at least one space.
 * // TODO: Find better RegEx/pattern to verify the name
 */
function checkName() {
  // jenni - 0: j, 1: e, 2: n
  if (nameField.value.indexOf(' ') > -1) { // kolla att det finns mellanslag i namnet
    nameIsOk = true;
  } else {
    nameIsOk = false;
  }
  activateGenerateButton();
}

/**
 * If name is typed correctly, age is above 18 and the electricity area is selected,
 * activate the button and add an event listener to it.
 */
function activateGenerateButton() {

  if (nameIsOk && ageIsOk && electricityIsOk) {
    generateButton.removeAttribute('disabled');
    generateButton.addEventListener('click', printPrice);
  } else {
    generateButton.setAttribute('disabled', '');
    generateButton.removeEventListener('click', printPrice);
  }
}

/**
 * Let the user know their price.
 */
function printPrice() {
  const priceTextField = document.querySelector('#priceText');

  if (electricityArea.value === 'area1') {
    priceTextField.textContent = 'Ditt pris är ⚡.';
  } else if(electricityArea.value === 'area2' || electricityArea.value === 'area3') {
    priceTextField.textContent = 'Ditt pris är ⚡⚡⚡⚡.';
  } else {
    priceTextField.textContent = 'Ditt pris är ⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡.';
  }

  // We could also use switch/case if we want, instead of the if statements
  /*switch(electricityArea.value) {
    case 'area1':
      priceTextField.innerHTML = 'Ditt pris är ⚡.';
      break;
    case 'area2':
    case 'area3':
      priceTextField.innerHTML = 'Ditt pris är ⚡⚡⚡⚡.';
      break;
    case 'area4':
      priceTextField.innerHTML = 'Ditt pris är ⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡.';
      break;
    default:
      priceTextField.innerHTML = 'Vi kan inte leverera el till dig.';
  }*/
}
