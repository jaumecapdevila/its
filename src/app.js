import { findTargets, generateIdentifiers } from './utils/inputs';

import register from './listeners/register';

export default config => {
  const targets = findTargets();

  generateIdentifiers(targets);

  if (targets.length > 0) {
    register(targets, config.trimOnFocustLost);
  }
};
