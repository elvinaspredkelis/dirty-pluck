const DELIMITER = ".";

/**
 * Extracts the value from a nested object based on a dot-separated query string.
 *
 * @param {Object} object - The object to pluck the value from.
 * @param {string} query - The dot-separated string representing the path to the value.
 * @param {string=} delimiter - The delimiter used to separate the keys in the query string.
 * @returns {*[]} result - The value found at the path specified by the query string. Always returns an array.
 */

export function pluck(object, query, delimiter = DELIMITER) {
  const keys = query.split(delimiter);
  let values = [object];

  for (const key of keys) {
    values = values.flatMap((item) => item[key] ?? []);
  }
  return values;
}
