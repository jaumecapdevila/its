import { regex } from '../utils/util';
import { getFocused } from '../utils/inputs';

const name = 'trim-trailing-spaces';

/**
 * Trim the trailing spaces of all the inputs
 */
const command = function command() {
  const target = getFocused();

  if (!target) {
    return;
  }

  target.value.replace(regex, ' ');
};

export { name, command };
