import './style.css'
import javascriptLogo from './javascript.svg'

const app = document.querySelector('#app');
const modal = document.querySelector('#modal');

document.querySelector('#btn').addEventListener('click', openModal);

function openModal() {
  gsap.to('#modal', { opacity: 1, display: 'block', duration: 2 });
  modal.addEventListener('click', closeModal);
}

function modalHasFadedOut() {
  modal.classList.add('hidden');
}

function closeModal() {
  gsap.to('#modal', { opacity: 0, onComplete: modalHasFadedOut });
}