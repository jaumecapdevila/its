import keyUpListener from './keyUpListener';

import blurListener from './blurListener';

export default (targets, isAutoTrimEnabled) => {
  targets.forEach(target => {
    target.addEventListener('keyup', keyUpListener);

    if (isAutoTrimEnabled) {
      target.addEventListener('blur', blurListener);
    }
  });
};
