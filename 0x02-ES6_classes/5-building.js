export default class Building {
  constructor(sqft) {
    this._sqft = sqft; // eslint-disable-line no-underscore-dangle
    if (!this.hasOwnProperty('evacuationWarningMessage')) { // eslint-disable-line no-prototype-builtins
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft; // eslint-disable-line no-underscore-dangle
  }

  evacuationWarningMessage() {
    return "WARNING!!!"
  }
}

// Check if `this` inherited from class Building && if it has evacuationWarningMessage method
// if (Object.getPrototypeOf(this) instanceof Building
//     && !this.hasOwnProperty('evacuationWarningMessage')) {}
