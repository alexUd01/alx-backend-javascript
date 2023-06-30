export default class HolbertonClass {
  constructor(size, location) {
    this._size = size; // eslint-disable-line no-underscore-dangle
    this._location = location; // eslint-disable-line no-underscore-dangle
  }

  [Symbol.toPrimitive](hint) {
    let result;
    if (hint === 'number') {
      result = `${this._size}`; // eslint-disable-line no-underscore-dangle
    }
    if (hint === 'string') {
      result = `${this._location}`; // eslint-disable-line no-underscore-dangle
    }
    return result;
  }
}
