const themeToggleBtn = document.querySelector('#themeToggle');

themeToggleBtn.addEventListener('click', switchTheme);

// var är old school, let är det nya coola

let isLightTheme = true;

function switchTheme() {
  isLightTheme = !isLightTheme;

  if (isLightTheme) {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
  } else {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
  }

  console.log(isLightTheme);
  /*
  if (colorChange === true) {
    colorChange = false;
  } else {
    colorChange = true;
  }*/
}

/*
- [x] skapa en knapp som växlar tema när vi trycker på den
- [x] en boolean för att hålla reda på vilket färgtema vi befinner oss i

- [] när vi trycker på knappen, anropa en funktion som kollar
  - [] vilket tema har vi just nu
  - [] ändra klass på body-elementet beroende på det

if (colorChange) {
  // ta bort mörk klass
} else {
  // lägg på mörk klass
}

- [] Använd classList

*/