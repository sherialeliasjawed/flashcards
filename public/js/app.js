let hint = document.querySelector('.hint');
let button = document.createElement('button');

button.className = 'hint-button';
button.textContent = 'Show Hint';
hint.style.display = 'none';
hint.parentElement.appendChild(button);

button.addEventListener('click', function() {
  button.style.display = 'none';
  hint.style.display = '';
});
