import './style.scss';

const inputCopyFields = document.querySelectorAll('.clipboard-copy input');
inputCopyFields.forEach(field => {
  field.addEventListener('click', copyInputTextToClipboard);
  field.addEventListener('focusin', copyInputTextToClipboard);
});

function copyInputTextToClipboard(e) {
  e.preventDefault();
  const field = e.currentTarget;
  const inputText = field.value;
  const msgField = field.parentElement.nextElementSibling;

  navigator.clipboard.writeText(inputText).then(() => {
    msgField.innerHTML = 'Copied text to clipboard';
  });
}