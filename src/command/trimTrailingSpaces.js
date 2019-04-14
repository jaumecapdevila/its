import { regex, replacement } from '../utils/util';
import { getFocused } from '../utils/inputs';

const name = 'trim-trailing-spaces';

/**
 * Trim the trailing spaces of all the inputs
 */
const trimTrailingSpaces = function command() {
  const target = getFocused();

  if (!target) {
    return;
  }

  target.value = target.value.replace(regex, replacement);
};

export { name, trimTrailingSpaces };
