import { findTargets, generateIdentifiers } from './utils/inputs';

import register from './listener/register';

export default config => {
  const targets = findTargets();

  generateIdentifiers(targets);

  if (targets.length > 0) {
    register(targets, config.trimOnFocustLost);
  }
};
