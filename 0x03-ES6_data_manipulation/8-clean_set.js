export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    throw new TypeError('set must be of type `Set`');
  }
  if (typeof startString !== 'string') {
    throw new TypeError('startString must be a string');
  }
  if (startString.length === 0) {
    return '';
  }

  const arr = Array.from(set);
  const result = arr
    .filter((elem) => elem.startsWith(startString))
    .map((elem) => elem.slice(startString.length));

  return result.join('-');
}
