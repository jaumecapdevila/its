import keyUpListener from './listeners/keyUpListener';

import blurListener from './listeners/blurListener';

import { findTargets, generateIdentifiers } from './utils/inputs';

const targets = findTargets();

generateIdentifiers(targets);

if (targets.length !== 0) {
  targets.forEach(target => {
    target.addEventListener('keyup', keyUpListener);
    target.addEventListener('blur', blurListener);
  });
}
