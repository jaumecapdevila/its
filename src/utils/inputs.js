const targets = ['input[type="text"]', 'input[type="search"]'];

const baseId = 'its-identifier';

/**
 * @returns {Array}
 */
const findTargets = function findTargets() {
  return document.querySelectorAll(targets.join(','));
};

/**
 * Add identifier to dom elements if not present
 * @param {Array} elements
 */
const generateIdentifiers = elements => {
  let counter = 1;
  elements.forEach(element => {
    if (!element.id) {
      element.id = `${baseId}-${counter}`;
      counter += 1;
    }
  });
};

export { findTargets, generateIdentifiers };
