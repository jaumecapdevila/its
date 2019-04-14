import { regex } from '../utils/util';

import storage from '../storage/memory';

/**
 * @param {Event} event
 */
export default event => {
  const { target } = event;
  target.value = target.value.replace(regex, ' ');
  target.style.color = storage[target.id];
};
