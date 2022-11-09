// Store HTML element references in variables for easy access
const generateButton = document.querySelector('#generate');
const nameField = document.querySelector('#name');
const ageField = document.querySelector('#age');
const electricityArea = document.querySelector('#electricityArea');
const priceTextField = document.querySelector('#priceText');

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
  // Vi kan konvertera en if-sats-jämförelse direkt till en boolsk variabel
  electricityIsOk = electricityArea.value !== '';
  activateGenerateButton();
}

/**
 * Check that user's age is equal to or above 18, so
 * that they're legally OK to sign contracts.
 */
function checkAge() {
  ageIsOk = ageField.value >= 18;
  activateGenerateButton();
}

/**
 * Check that the name contains at least one space.
 * // TODO: Find better RegEx/pattern to verify the name
 */
function checkName() {
  nameIsOk = nameField.value.indexOf(' ') > -1;
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
    priceTexField.textContent = '';
  }
}

/**
 * Let the user know their price.
 */
function printPrice() {
  if (electricityArea.value === 'area1') {
    priceTextField.textContent = 'Ditt pris är ⚡.';
  } else if(electricityArea.value === 'area2' || electricityArea.value === 'area3') {
    priceTextField.textContent = 'Ditt pris är ⚡⚡⚡⚡.';
  } else {
    priceTextField.textContent = 'Ditt pris är ⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡.';
  }
}
