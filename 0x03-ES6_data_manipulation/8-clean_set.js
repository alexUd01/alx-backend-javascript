export default function cleanSet(set, startString) {
  startString = String(startString); // eslint-disable-line no-param-reassign
  if (startString.length === 0) {
    return '';
  }

  const arr = Array.from(set);
  const result = arr
    .filter((elem) => elem.startsWith(startString))
    .map((elem) => elem.slice(startString.length));

  return result.join('-');
}
