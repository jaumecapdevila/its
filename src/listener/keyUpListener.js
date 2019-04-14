import { regex, warning } from '../utils/util';

import storage from '../storage/memory';

/**
 * @param {Event} event
 */
export default event => {
  const { target } = event;

  // Store original color
  if (storage[target.id] === undefined) {
    storage[target.id] = target.style.color;
  }

  target.style.color =
    target.value.match(regex) !== null ? warning : storage[target.id];
};
