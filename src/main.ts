import './style.scss';
import gsap from 'gsap';

const player: HTMLDivElement | null = document.querySelector('#player');
let posX = 0;

// ------------------------------------------------------------------------------------
// ------------------------------------------ FUNCTIONS -------------------------------
// ------------------------------------------------------------------------------------

function movePlayer(e: KeyboardEvent): void {
  if (e.key === 'ArrowRight') {
    posX += 10;
    gsap.to(player, { x: posX });
  }

  if (e.key === 'ArrowLeft') {
    posX -= 10;
    gsap.to(player, { x: posX });
  }

}

// ------------------------------------------------------------------------------------
// ------------------------------------------ INIT ------------------------------------
// ------------------------------------------------------------------------------------
if (player !== null) {
  window.addEventListener('keydown', movePlayer);
}