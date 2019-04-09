import { regex, warning } from '../utils/util';

import storage from '../storage/memory';

/**
 * @param {Event} event
 */
export default event => {
  const { target } = event;

  if (target.value.match(regex) !== null) {
    if (storage[target.id] === undefined) {
      storage[target.id] = target.style.color;
    }
    target.style.color = warning;
  } else {
    target.style.color = storage[target.id];
  }
};
