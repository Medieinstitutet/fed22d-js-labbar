const themeToggleBtn = document.querySelector('#themeToggle');

themeToggleBtn.addEventListener('click', switchTheme);

// var är old school, let är det nya coola

function switchTheme() {
  document.body.classList.toggle('dark');
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