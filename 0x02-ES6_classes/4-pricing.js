import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount; // eslint-disable-line no-underscore-dangle
    this._currency = currency; // eslint-disable-line no-underscore-dangle
  }

  get amount() {
    return this._amount; // eslint-disable-line no-underscore-dangle
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('amount must be a number')
    }
    this._amount = newAmount; // eslint-disable-line no-underscore-dangle
  }

  get currency() {
    return this._currency; // eslint-disable-line no-underscore-dangle
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('currency must be a Currency')
    }
    this._currency = newCurrency; // eslint-disable-line no-underscore-dangle
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`; // eslint-disable-line no-underscore-dangle
  }

  static convertPrice(amount, conversionRate) {
    if (amount!== 'number') {
      throw new TypeError('amount must be a number')
    }
    if (conversionRate !== 'number') {
      throw new TypeError('consersionRate must be a number')
    }
    return amount * conversionRate;
  }
}
