import { regex, replacement } from '../utils/util';

import storage from '../storage/memory';

/**
 * @param {Event} event
 */
export default event => {
  const { target } = event;
  target.value = target.value.replace(regex, replacement);
  target.style.color = storage[target.id];
};
