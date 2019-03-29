import keyUpListener from './listeners/keyUpListener';
import findTargets from './utils/inputs';

const targets = findTargets();

console.log(targets);
if (targets.length !== 0) {
  targets.forEach(target => {
    target.addEventListener('keyup', keyUpListener);
  });
}
