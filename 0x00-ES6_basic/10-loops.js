export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const newArr = [];
  for (const idx of array) {
    newArr[i] = appendString + idx;
    i += 1;
  }

  return newArr;
}
