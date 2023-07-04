export default function createInt8TypedArray(length, position, value) {
  const buff = new ArrayBuffer(length);
  const int8view = new Int8Array(buff);
  if (position >= length) {
    throw new Error('Position outside range');
  }
  int8view[position] = value;
  // dataView[position] = value;  *WRONG*
  // return int8view;  * CERTAIN PROPERTIES WONT BE ADDED *
  const dataView = new DataView(buff);
  return dataView;
}
