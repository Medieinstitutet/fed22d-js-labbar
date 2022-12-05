import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

const app = document.querySelector('#app');

const arr1 = [1, 2, 3, 4];
const arr2 = ['a', 'b', 'c'];

if (arr1.length === arr2.length) {
  for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i], arr2[i]);
  }
} else {
  console.error('ARRAYS DO NOT MATCH IN LENGTH');
}

for (let i = 0; i < 10; i++) {
  app.innerHTML += `<div class="yellow"></div>`;
  app.innerHTML += `<div class="red"></div>`;
}

const anim = gsap.from('.yellow', { opacity: 0, left: 30, stagger: 0.2, repeat: -1, yoyo: true });

gsap.to('.red', {
  backgroundColor: 'green',
  left: -30,
  stagger: 0.2,
  repeat: -1,
  yoyo: true,
});

function reverseAnimation() {
  /* anim.reversed = */
}


/* document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" id="viteLogo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`; */
/* setupCounter(document.querySelector('#counter')); */

/* gsap.to('#viteLogo', {
  opacity: 0, rotate: 360, duration: 2, scaleX: 0, scaleY: 0,
  repeat: -1, yoyo: true,
 }); */

