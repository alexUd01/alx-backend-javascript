export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const arr = Array.from(set);
  const result = arr
    .filter((elem) => elem.startsWith(startString))
    .map((elem) => {
      const subStr = elem.slice(startString.length);
      if (subStr && subStr !== elem) {
        return subStr;
      }
      return '';
    });

  return result.join('-');
}
