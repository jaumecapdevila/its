const targets = ['input[type="text"]', 'input[type="search"]'];

/**
 * @returns {Array}
 */
export default function findTargets() {
  return document.querySelectorAll(targets.join(','));
}
