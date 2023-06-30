/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (!this.hasOwnProperty('evacuationWarningMessage')) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  evacuationWarningMessage() {
    return ` The ${this._sqft} WARNING!!!`;
  }
}

// Check if `this` inherited from class Building && if it has evacuationWarningMessage method
// if (Object.getPrototypeOf(this) instanceof Building
//     && !this.hasOwnProperty('evacuationWarningMessage')) {}

/* eslint-disable no-underscore-dangle */
