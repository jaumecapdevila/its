import { regex, warning } from './utils/util';

const inputs = document.querySelectorAll('input[type=text]');

if (inputs.length !== 0) {
  inputs.forEach(input => {
    input.addEventListener('keyup', () => {
      if (input.value.match(regex) !== null) {
        input.style.color = warning;
      } else {
        input.style.color = 'inherit';
      }
    });
  });
}
