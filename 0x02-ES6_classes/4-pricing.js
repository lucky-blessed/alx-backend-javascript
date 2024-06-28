import Currency from './3-currency.js';

class Pricing {
    constructor(amount, currency) {
        this._amount = typeof amount === 'number' ? amount : 0;
        this._currency = currency instanceof Currency ? currency : new Currency('', '');
    }
    get amount() {
        return this._amount;
    }
    get currency() {
        return this._currency;
    }
    set amount(newAmount) {
        if (typeof newAmount === 'number') {
            this._amount = newAmount;
        } else {
            console.error('Error: Amount must be a number.');
        }
    }
    set currency(newCurrency) {
        if (newCurrency instanceof Currency) {
            this._currency = newCurrency;
        } else {
            console.error('Error: Currency must be an instance of the Currency class.');
        }
    }
    displayFullPrice() {
        return `${this._amount} ${this._currency.displayFullCurrency()}`;
    }
    static convertPrice(amount, conversionRate) {
        if (typeof amount === 'number' && typeof conversionRate === 'number') {
            return amount * conversionRate;
        } else {
            console.error('Error: Both amount and conversionRate must be numbers.');
            return null;
        }
    }
}
export default Pricing;