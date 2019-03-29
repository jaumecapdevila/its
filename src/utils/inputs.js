const targets = ['text', 'search', 'email'];

/**
 * @returns {Array}
 */
export default function findTargets() {
  const inputs = [];

  targets.forEach(target => {
    inputs.push(document.querySelectorAll(target));
  });

  return inputs;
}
