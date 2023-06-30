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
    this._amount = newAmount; // eslint-disable-line no-underscore-dangle
  }

  get currency() {
    return this._currency; // eslint-disable-line no-underscore-dangle
  }

  set currency(newCurrency) {
    this._currency = newCurrency; // eslint-disable-line no-underscore-dangle
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency.code})`; // eslint-disable-line no-underscore-dangle
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
