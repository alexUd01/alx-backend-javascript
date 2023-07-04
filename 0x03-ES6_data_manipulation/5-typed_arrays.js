export default function createInt8TypedArray(length, position, value) {
  const buff = new ArrayBuffer(length);
  const int8view = new Int8Array(buff);

  if (position >= length) { throw new Error('Position outside range'); }
  int8view[position] = value;

  return buff;
}
