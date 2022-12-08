import './style.scss';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
gsap.registerPlugin(Draggable);

const board: HTMLDivElement | null = document.querySelector('#gameboard');
const player: HTMLDivElement | null = document.querySelector('#player');
const ball: HTMLDivElement | null = document.querySelector('#ball');

let boardWidth = 0;
let boardHeight = 0;
let playerWidth = 0;
let posX = 0;
let windowResizeTimer: number | undefined = undefined;
const ballDirection = {
  angleY: 1,
  speed: 2,
};
const ballSize = 15;
const playerHeight = 20;

// ------------------------------------------------------------------------------------
// ------------------------------------------ FUNCTIONS -------------------------------
// ------------------------------------------------------------------------------------

function randomInRange(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

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

function checkHit() {
  const bricksLeft = document.querySelectorAll('.brick');
  bricksLeft.forEach((brickElement) => {
    if (Draggable.hitTest(ball, brickElement)) {
      brickElement.classList.add('hit');
    }
  });
}

function newBallDirection() {
  ballDirection.angleY *= -1;

  const randomXPos = randomInRange(0, boardWidth);
  let targetY = boardHeight - ballSize - playerHeight;

  if (ballDirection.angleY === -1) {
    targetY = document.body.getBoundingClientRect().top;
  }
  gsap.to(ball, { 
    x: randomXPos, 
    y: targetY,
    duration: ballDirection.speed, 
    ease: 'none',
    onComplete: newBallDirection,
    onUpdate: checkHit,
  });
}

function startBall(): void {
  if (ball !== null) {
    const targetYPos = boardHeight - ballSize - playerHeight;
    const randomXPos = randomInRange(0, boardWidth);
    gsap.to(ball, { 
      x: randomXPos, 
      y: targetYPos, 
      duration: ballDirection.speed,
      ease: 'none',
      onComplete: newBallDirection,
      onUpdate: checkHit,
    });
  }
}

function waitForResizeToEnd() {
  clearTimeout(windowResizeTimer);
  windowResizeTimer = setTimeout(init, 700, true);
}

function createBricks(rows = 5, columns = 10) {
  const brickWidth = 100 / columns;

  const brickContainer: HTMLDivElement | null = document.querySelector('#brickContainer');

  if (brickContainer !== null ) {
    const brickGap = getComputedStyle(brickContainer).gap;

    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        brickContainer.innerHTML += `
          <div class="brick" style="width: calc(${brickWidth}% - ${brickGap})"></div>
        `;
      }
    }
  }

}

// ------------------------------------------------------------------------------------
// ------------------------------------------ INIT ------------------------------------
// ------------------------------------------------------------------------------------
function init(resizeEvent = false): void {
  if (player !== null && board !== null) {
    boardWidth = board?.getBoundingClientRect().width;
    boardHeight = board?.getBoundingClientRect().height;
    playerWidth = player.getBoundingClientRect().width;

    gsap.set(ball, { x: '50%', y: '100%' });

    if (!resizeEvent) {
      window.addEventListener('keydown', movePlayer);
      createBricks();
    }

    startBall();
  }
}

init();
window.addEventListener('resize', waitForResizeToEnd);