const DELIMITER = ".";

/**
 * Extracts the value from a nested object based on a dot-separated expression string.
 *
 * @param {Object} object - The object to pluck the value from.
 * @param {string} expression - The dot-separated string representing the path to the value.
 * @param {string=} delimiter - The delimiter used to separate the keys in the expression string.
 * @returns {*[]} result - The value found at the path specified by the expression string. Always returns an array.
 */

export function pluck(object, expression, delimiter = DELIMITER) {
  let values = Array.isArray(object) ? object : [object];
  if (!expression) return values;
  const keys = expression.split(delimiter);

  for (const key of keys) {
    values = values.flatMap((item) => item[key] ?? []);
  }
  return values;
}
