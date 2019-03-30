import { regex, warning } from '../utils/util';

const memoryStorage = {};

/**
 * @param {Event} event
 */
export default event => {
  const { target } = event;

  if (target.value.match(regex) !== null) {
    if (memoryStorage[target.id] === undefined) {
      memoryStorage[target.id] = target.style.color;
    }
    target.style.color = warning;
  } else {
    target.style.color = memoryStorage[target.id];
  }
};
