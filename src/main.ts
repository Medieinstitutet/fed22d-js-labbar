import './style.scss';
import gsap from 'gsap';

const board: HTMLDivElement | null = document.querySelector('#gameboard');
const player: HTMLDivElement | null = document.querySelector('#player');
let boardWidth = 0;
let playerWidth = 0;
let posX = 0;

// ------------------------------------------------------------------------------------
// ------------------------------------------ FUNCTIONS -------------------------------
// ------------------------------------------------------------------------------------

function movePlayer(e: KeyboardEvent): void {
  if (e.key === 'ArrowRight') {
    posX += 10;
    if (posX >= boardWidth - playerWidth) {
      posX = boardWidth - playerWidth;
    }
    gsap.to(player, { x: posX });
  }

  if (e.key === 'ArrowLeft') {
    posX -= 10;
    if (posX <= 0) {
      posX = 0;
    }
    gsap.to(player, { x: posX });
  }

}

// ------------------------------------------------------------------------------------
// ------------------------------------------ INIT ------------------------------------
// ------------------------------------------------------------------------------------
if (player !== null && board !== null) {
  window.addEventListener('keydown', movePlayer);
  boardWidth = board?.getBoundingClientRect().width;
  playerWidth = player.getBoundingClientRect().width;
}