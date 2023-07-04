export default function createInt8TypedArray(length, position, value) {
  const [len, pos, val] = [Number(length), Number(position), Number(value)];
  const buff = new ArrayBuffer(length);
  const int8view = new Int8Array(buff);

  if (pos >= len) { throw new Error('Position outside range'); }
  int8view[pos] = val;

  return buff;
}
