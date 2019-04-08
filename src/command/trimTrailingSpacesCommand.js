import { regex } from '../utils/util';

const name = 'trim-trailing-spaces';

/**
 * Trim the trailing spaces of all the inputs
 * @param {Array} targets
 */
const command = function command(targets) {
  targets.forEach(target => {
    target.value = target.value.replace(regex, ' ');
  });
};

export { name, command };
