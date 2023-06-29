export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') { throw new Error('Name must be a string'); }
    if (typeof length !== 'number') { throw new Error('Length must be a Number'); }
    if (typeof students !== 'object') { throw new Error('Students must be an array'); }
    this._name = name; // eslint-disable-line no-underscore-dangle
    this._length = length; // eslint-disable-line no-underscore-dangle
    this._students = students; // eslint-disable-line no-underscore-dangle
  }

  get name() {
    return this._name; // eslint-disable-line no-underscore-dangle
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = newName; // eslint-disable-line no-underscore-dangle
  }

  get length() {
    return this._length; // eslint-disable-line no-underscore-dangle
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new Error('Length must be a Number');
    }
    this._length = newLength; // eslint-disable-line no-underscore-dangle
  }

  get students() {
    return this._students; // eslint-disable-line no-underscore-dangle
  }

  set students(newStudents) {
    if (typeof newStudents !== 'object') {
      throw new Error('Students must be an array');
    }
    this._students = newStudents; // eslint-disable-line no-underscore-dangle
  }
}
