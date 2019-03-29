import { regex, warning } from '../utils/util';

// const memoryStorage = [];

/**
 * @param {Event} event
 */
export default event => {
  const { target } = event;
  if (target.value.match(regex) !== null) {
    target.style.color = warning;
  } else {
    target.style.color = 'inherit';
  }
};
