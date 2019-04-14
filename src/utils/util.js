const regex = /[ \t]{2,}/g;

const warning = '#F92672';

/**
 * @param {Object} object
 * @returns {Boolean}
 */
const isEmpty = object => Object.keys(object).length === 0;

/**
 * Checks if the object contains the specified property
 * @param {Object} object
 * @param {String} property
 * @returns {Boolean}
 */
const hasProperty = (object, property) =>
  Object.prototype.hasOwnProperty.call(object, property);

export { regex, warning, isEmpty, hasProperty };
