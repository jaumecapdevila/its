const targets = ['input[type="text"]', 'input[type="search"]'];

const focused = 'input:focus';

const baseId = 'its-identifier';

/**
 * @returns {Array}
 */
const findTargets = function findTargets() {
  return document.querySelectorAll(targets.join(','));
};

/**
 * @returns {(Element|null)}
 */
const getFocused = function getFocused() {
  return document.querySelector(focused);
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

export { findTargets, getFocused, generateIdentifiers };
