import './style.scss';

const container: HTMLDivElement | null = document.querySelector('#app');

if (container !== null) {
  container.innerHTML = 'test';
}