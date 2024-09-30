class Currency {
    constructor(code, name) {
        this._code = typeof code === 'string' ? code : '';
        this._name = typeof name === 'string' ? name : '';
    }
    get code() {
        return this._code;
    }
    get name() {
        return this._name;
    }
    set code(newCode) {
        if (typeof newCode === 'string') {
            this._code = newCode;
        } else {
            console.error('Error: Code must be a string');
        }
    }
    set name(newName) {
        if (typeof newName === 'string') {
            this._name = newName;
        } else {
            console.error('Errot: Name must be a string')
        }
    }
    displayFullCurrency() {
        return `${this._name} (${this._code})`
    }
}
export default Currency;