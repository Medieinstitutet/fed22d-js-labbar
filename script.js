const contentBtn1 = document.querySelector('#content1');
const contentBtn2 = document.querySelector('#content2');
const contentBtn3 = document.querySelector('#content3');

contentBtn1.addEventListener('click', showContent1);
contentBtn2.addEventListener('click', showContent2);
contentBtn3.addEventListener('click', showContent3);

function showContent1() {
  document.querySelector('#portfolioContainer').classList.add('orange');
  document.querySelector('#portfolio1').classList.add('visible');
  document.querySelector('#portfolio2').classList.remove('visible');
  document.querySelector('#portfolio3').classList.remove('visible');
}

function showContent2() {
  document.querySelector('#portfolioContainer').classList.add('yellow');
  document.querySelector('#portfolio1').classList.remove('visible');
  document.querySelector('#portfolio2').classList.add('visible');
  document.querySelector('#portfolio3').classList.remove('visible');
}

function showContent3() {
  document.querySelector('#portfolioContainer').classList.add('green');
  document.querySelector('#portfolio1').classList.remove('visible');
  document.querySelector('#portfolio2').classList.remove('visible');
  document.querySelector('#portfolio3').classList.add('visible');
}