const themeToggleBtn = document.querySelector('#themeToggle');

themeToggleBtn.addEventListener('click', switchTheme);

let themeId = 0;
let previousClass = 'theme-0';

// var är old school, let är det nya coola

function switchTheme() {
  themeId++;
  if (themeId > 2) {
    themeId = 0;
  }
  document.body.classList.remove(previousClass);
  switch(themeId) {
    case 0:
      document.body.classList.add('theme-0');
      previousClass = 'theme-0';
      break;
    case 1:
      document.body.classList.add('theme-1');
      previousClass = 'theme-1';
      break;
    case 2:
      document.body.classList.add('theme-2');
      previousClass = 'theme-2';
      break;
  }
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